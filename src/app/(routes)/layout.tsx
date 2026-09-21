import { cookies } from "next/headers";
import Dock from "@/components/dock";
import { PostHogProvider } from "@/components/posthog-provider";
import { ConsentBanner } from "@/components/consent-banner";
import { CONSENT_COOKIE_NAME } from "@/lib/consent";
import RoutesShell from "@/components/routes-shell";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const initialConsent = cookieStore.get(CONSENT_COOKIE_NAME)?.value as
    | "granted"
    | "denied"
    | undefined;

  return (
    <PostHogProvider>
      <div className="flex flex-col h-dvh">
        <div className="px-5 pt-5 pb-3.5 sm:px-7.5 sm:pt-7.5 sm:pb-4.5 flex-1 min-h-0 outline-0">
          <RoutesShell webhookUrl={process.env.WEBHOOK_URL}>
            {children}
          </RoutesShell>
        </div>

        <Dock />
        <ConsentBanner initialConsent={initialConsent} />
      </div>
    </PostHogProvider>
  );
}

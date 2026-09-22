"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const LandingProblemSectionV1 = ({ webhookUrl }: { webhookUrl?: string }) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8 items-start">
        <div className="flex flex-col gap-y-1.5">
          <h2>
            Every Other Platform{" "}
            <span className="text-primary">
              Buries You Next to Everything Else
            </span>
          </h2>
          <p>
            General platforms weren&apos;t built for personal brands
            specifically — you&apos;re competing with celebrity gossip, memes,
            and brands with ten-person marketing teams, all fighting for the
            same algorithm&apos;s attention. Getting found by the right person
            — a future client, a co-founder, a mentor — ends up down to luck,
            not design.
          </p>
        </div>

        <RegistrationForm
          primary_cta="Notify Me When It Launches"
          cta_location="problem"
          webhookUrl={webhookUrl}
          emailOnly
          source="website"
        />
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={896}
          height={1200}
          src="/images/sections/home-problem.webp"
          alt="Personal brand buried in a noisy general feed"
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV1;

"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import { FootprintsIcon } from "lucide-react";

const LandingHowItWorksSectionV1 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper className="justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-2xl gap-y-2.5 items-center">
          <h2 className="text-center">
            From Inbox Signup{" "}
            <span className="text-primary bg-primary/5">
              to Your First Real Connection
            </span>
          </h2>
        </div>

        <RegistrationForm
          primary_cta="Notify Me When It Launches"
          cta_location="how-it-works"
          webhookUrl={webhookUrl}
          emailOnly
          source="website"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
          {/* —— COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 1 —</span> Sign Up
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Just your email — takes a few seconds.
            </span>
          </div>

          {/* —— COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 2 —</span>{" "}
              We&apos;ll Notify You
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              The moment it&apos;s live, you&apos;re the first to know.
            </span>
          </div>

          {/* —— COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 3 —</span> Create
              Your Profile and Start Connecting
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Find founders, professionals, and personal brands worth knowing.
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingHowItWorksSectionV1;

"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const cta_location = "social-proof-stack";

const LandingSocialProofBlockNum2SectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="max-w-md flex flex-col gap-y-8 items-center">
        <div className="text-center text-[22px] leading-8">
          Built on the same standard,&nbsp;
          <span className="text-primary bg-primary/5">
            well-documented tools real production apps run on —
          </span>
          &nbsp;Next.js, PostgreSQL, Docker&nbsp;
          <span className="text-primary bg-primary/5">
            — nothing exotic to maintain, nothing
          </span>
          &nbsp;you&apos;re locked into figuring out alone
        </div>

        <Button
          asChild
          onClick={() => capture("registration_cta_clicked", { cta_location })}
        >
          <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
            View on GitHub — Now          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default LandingSocialProofBlockNum2SectionV1;

"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const cta_location = "social-proof-engagement";

const LandingSocialProofBlockNum1SectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="flex flex-col gap-y-8 max-w-md items-center">
        <div className="text-center">
          Every Post&nbsp;
          <span className="text-primary bg-primary/5">
            keeps its reactions, view counts, and pinning —
          </span>
          &nbsp;mechanics that make people want to engage&nbsp;
          <span className="text-primary bg-primary/5">
            — without needing to be
          </span>
          &nbsp;on somebody else&apos;s platform to have them
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

export default LandingSocialProofBlockNum1SectionV1;

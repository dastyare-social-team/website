"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const cta_location = "final-cta";

const LandingFinalCTASectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center">
      <div className="max-w-xl text-center pt-5 flex flex-col gap-y-2.5 items-center">
        <h3>
          Stop Building
          <span className="text-primary">
            &nbsp;Someone Else&apos;s Platform. Start Building
          </span>
          &nbsp;Your Own Reach.
        </h3>
        <p>
          No license fee, no lock-in, no algorithm standing between your posts
          and the people who&apos;d actually buy from you. Deploy it and start
          publishing.
        </p>

        <div className="pt-5">
          <Button
            asChild
            onClick={() =>
              capture("registration_cta_clicked", { cta_location })
            }
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              View on GitHub — Now
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingFinalCTASectionV1;

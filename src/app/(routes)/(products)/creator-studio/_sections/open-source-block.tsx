"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const cta_location = "open-source";

const LandingOpenSourceSectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="flex flex-col gap-y-8 max-w-xl items-center">
        <div className="flex flex-col gap-y-1.5 items-center">
          <h2 className="text-center">
            Nothing Hidden,{" "}
            <span className="text-primary bg-primary/5">
              Nothing That Turns Into a Bill Later
            </span>
          </h2>
          <p className="text-center">
            DS-CS is genuinely open-source — no license fee, no paid tier
            hiding the functionality you actually need. Inspect the code,
            self-host it, modify it, and never wonder if the free version is
            secretly the limited one. It&apos;s the one piece of the Dastyare
            Social suite built fully open, on purpose.
          </p>
        </div>

        <Button
          asChild
          onClick={() => capture("registration_cta_clicked", { cta_location })}
        >
          <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
            View on GitHub — Now
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default LandingOpenSourceSectionV1;

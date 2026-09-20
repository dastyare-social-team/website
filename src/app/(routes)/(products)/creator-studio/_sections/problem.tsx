"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const cta_location = "problem";

const LandingProblemSectionV1 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8 items-start">
        <div className="flex flex-col gap-y-1.5">
          <h2>
            Every Post You Publish should be{" "}
            <span className="text-primary">
              Building Your Business — Not Padding
            </span>{" "}
            Someone Else&apos;s Numbers
          </h2>
          <p>
            Post on a platform you don&apos;t own, and the reach you build
            isn&apos;t
            really yours — one algorithm update, policy change, or suspension
            away from zero, no matter how good the content was. DS-CS keeps that
            reach working for you instead — your content stays discoverable,
            stays yours, and keeps bringing people to your business on its own
            terms — not whenever a feed decides to show it
          </p>
        </div>

        <Button
          asChild
          onClick={() => capture("registration_cta_clicked", { cta_location })}
        >
          <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
            View on GitHub — Now          </a>
        </Button>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        {/* TODO(creator-studio-problem): add supporting visual once assets are ready.
        <Image
          width={588}
          height={588}
          src="/images/sections/creator-studio-problem.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        /> */}
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV1;

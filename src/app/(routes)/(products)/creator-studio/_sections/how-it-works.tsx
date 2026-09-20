"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";
import { FootprintsIcon } from "lucide-react";

const cta_location = "how-it-works";

const LandingHowItWorksSectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            Getting{" "}
            <span className="text-primary bg-primary/5">started</span>
          </h2>
        </div>

        <Button
          asChild
          onClick={() => capture("registration_cta_clicked", { cta_location })}
        >
          <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
            View on GitHub — Now
          </a>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
          {/* —— COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 1 —</span> Deploy
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Docker multi-stage build, standard self-hosting setup. Full docs
              at docs.dastyare.social.
            </span>
          </div>

          {/* —— COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 2 —</span>{" "}
              Bootstrap Your Admin Account
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Set ADMIN_EMAIL and ADMIN_PASSWORD, and your account is ready on
              first build
            </span>
          </div>

          {/* —— COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 3 —</span> Start
              Publishing
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Post through the UI or the REST API directly — built for both from
              day one
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingHowItWorksSectionV1;

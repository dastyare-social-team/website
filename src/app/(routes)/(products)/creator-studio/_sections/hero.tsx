"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const value_props = [
  "Get found by the people actually looking for what you do — not buried by an algorithm's mood swings",
  "Nothing you post can be taken down, demonetized, or buried by a policy change overnight",
  "Every post keeps working for you long after it's published — indexed, searchable, and referenceable, not gone in a day",
];

const cta_location = "hero";

const LandingHeroSectionV1 = () => {
  return (
    <SectionWrapper className="md:pt-0 border-0">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>
            Get free of the algorithm.
            <span className="text-primary">&nbsp;Focus on getting leads </span>
            and making money.
          </h2>
          <div className="flex flex-col gap-y-1">
            Every post you publish should work for you — not pad someone
            else&apos;s engagement numbers. DS-CS puts your content where real
            buyers and search engines actually find it, answering to you, not a
            feed algorithm.
          </div>
          <p>
            Stop posting into a feed that decides who sees it. No more losing
            reach overnight to an algorithm update you had no say in.
          </p>
          <div className="flex flex-col gap-y-1">
            {value_props.map((value, index) => (
              <p key={index}>— {value}</p>
            ))}
          </div>
        </div>
        <div className="w-fit">
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

        <div className="text-[18px] opacity-80 leading-6.5">
          No sign-up wall to browse the code. Open-source, no license required.
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        {/* TODO(creator-studio-hero): add real product screenshot (channel-style
            post feed or shorts/video explore view) once assets are ready.
            <Image
              width={588}
              height={588}
              src="/images/sections/creator-studio-hero.webp"
              loading="eager"
              alt="DS-CS Creator Studio post feed"
              className="px-1 py-1 aspect-3/4 object-cover"
            /> */}
      </div>
    </SectionWrapper>
  );
};

export default LandingHeroSectionV1;

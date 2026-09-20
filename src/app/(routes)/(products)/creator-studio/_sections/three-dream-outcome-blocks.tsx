"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const cta_location = "benefit-blocks";

const LandingThreeDreamOutcomeBlocksSectionV1 = () => {
  return (
    <>
      <SectionWrapper className="md:flex-row-reverse">
        <div className="flex flex-col flex-1 gap-y-8 items-start">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">
              Show up wherever Your Audience is Actually Looking
            </p>
            <h2>Publish in Whatever Form Actually Fits what You&apos;re Saying</h2>
            <p>
              Text, image, video, voice, or file — each one published in the
              format that reads best, not squeezed into one mixed-up post trying
              to do everything at once
            </p>
          </div>

          <Button
            asChild
            onClick={() =>
              capture("registration_cta_clicked", { cta_location })
            }
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              View on GitHub — Now            </a>
          </Button>
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          {/* TODO(creator-studio-benefit-1): add real product screenshot for content formats once assets are ready.
          <Image
            width={588}
            height={588}
            src="/images/sections/creator-studio-benefit-1.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          /> */}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col flex-1 gap-y-8 items-start">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">
              Get Found by Search, and by AI tools People Ask instead
            </p>
            <h2>Ready For How People Actually Look things up Now</h2>
            <p>
              More People are Asking AI for Recommendations instead of scrolling
              a feed. DS-CS makes sure Your Content is ready for that shift
              already — indexed for search engines and structured so AI Agents
              can find and reference it, Not Just human eyes scrolling past
            </p>
          </div>

          <Button
            asChild
            onClick={() =>
              capture("registration_cta_clicked", { cta_location })
            }
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              View on GitHub — Now            </a>
          </Button>
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          {/* TODO(creator-studio-benefit-2): add real product screenshot for search/AI discovery once assets are ready.
          <Image
            width={588}
            height={588}
            src="/images/sections/creator-studio-benefit-2.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          /> */}
        </div>
      </SectionWrapper>

      <SectionWrapper className="md:flex-row-reverse">
        <div className="flex flex-col flex-1 gap-y-8 items-start">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">Nobody can Take this down but You</p>
            <h2>No Policy Change can touch What You&apos;ve built</h2>
            <p>
              No surprise suspension, no algorithm update, no policy change can
              reach it — it runs on your own server, under your control, on
              standard tooling you actually own
            </p>
          </div>

          <Button
            asChild
            onClick={() =>
              capture("registration_cta_clicked", { cta_location })
            }
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
              View on GitHub — Now            </a>
          </Button>
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          {/* TODO(creator-studio-benefit-3): add real product screenshot for self-hosting control once assets are ready.
          <Image
            width={588}
            height={588}
            src="/images/sections/creator-studio-benefit-3.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          /> */}
        </div>
      </SectionWrapper>
    </>
  );
};

export default LandingThreeDreamOutcomeBlocksSectionV1;

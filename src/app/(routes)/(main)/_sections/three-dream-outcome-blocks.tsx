"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingThreeDreamOutcomeBlocksSectionV1 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  const formProps = {
    primary_cta: "Notify Me When It Launches",
    webhookUrl,
    emailOnly: true as const,
    source: "website",
  };

  return (
    <>
      <SectionWrapper className="md:flex-row-reverse">
        <div className="flex flex-col flex-1 gap-y-8 items-start">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">
              Find the people who actually matter
            </p>
            <h2>
              Connect with founders, professionals, and other personal brands
            </h2>
            <p>
              Search and discovery built around personal brands specifically —
              not buried in a feed of everything else fighting for the same
              attention.
            </p>
          </div>

          <RegistrationForm {...formProps} cta_location="value-block-1" />
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          {/* TODO(home-value-1): add supporting visual once assets are ready.
          <Image
            width={588}
            height={588}
            src="/images/sections/home-value-1.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          /> */}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col flex-1 gap-y-8 items-start">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">Get found by the right person</p>
            <h2>Discovery that actually works for this niche</h2>
            <p>
              Indexed on Google, ready for AI search, and built so the
              algorithm favors personal brands instead of burying them under
              general content.
            </p>
          </div>

          <RegistrationForm {...formProps} cta_location="value-block-2" />
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          {/* TODO(home-value-2): add supporting visual once assets are ready.
          <Image
            width={588}
            height={588}
            src="/images/sections/home-value-2.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          /> */}
        </div>
      </SectionWrapper>

      <SectionWrapper className="md:flex-row-reverse">
        <div className="flex flex-col flex-1 gap-y-8 items-start">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">Turn connections into outcomes</p>
            <h2>Not just networking — actual outcomes</h2>
            <p>
              Find your next client, collaborator, mentor, or job — the App is
              built to connect you with people looking for exactly what you
              offer.
            </p>
          </div>

          <RegistrationForm {...formProps} cta_location="value-block-3" />
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          {/* TODO(home-value-3): add supporting visual once assets are ready.
          <Image
            width={588}
            height={588}
            src="/images/sections/home-value-3.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          /> */}
        </div>
      </SectionWrapper>
    </>
  );
};

export default LandingThreeDreamOutcomeBlocksSectionV1;

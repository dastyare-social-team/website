"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingFinalCTASectionV1 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper className="justify-center items-center">
      <div className="max-w-xl text-center pt-5 flex flex-col gap-y-2.5 items-center">
        <h3>
          Be the First to Know{" "}
          <span className="text-primary">
            When You Can Stop Getting Lost in Someone Else&apos;s Feed.
          </span>
        </h3>
        <p>
          One email. That&apos;s it — we&apos;ll let you know the moment
          it&apos;s live.
        </p>

        <div className="pt-5">
          <RegistrationForm
            primary_cta="Notify Me When It Launches"
            cta_location="final-cta"
            webhookUrl={webhookUrl}
            emailOnly
            source="website"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingFinalCTASectionV1;

"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingSocialProofBlockNum2SectionV1 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="flex flex-col gap-y-8 max-w-md items-center">
        <div className="text-center text-[22px] leading-8">
          Free to use. Built to be found{" "}
          <span className="text-primary bg-primary/5">
            — by real people, by Google,
          </span>
          &nbsp;and by AI search.
        </div>

        <RegistrationForm
          primary_cta="Notify Me When It Launches"
          cta_location="social-proof-found"
          webhookUrl={webhookUrl}
          emailOnly
          source="website"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingSocialProofBlockNum2SectionV1;

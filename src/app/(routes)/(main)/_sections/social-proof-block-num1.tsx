"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingSocialProofBlockNum1SectionV1 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="flex flex-col gap-y-8 max-w-md items-center">
        <div className="text-center">
          Built from&nbsp;
          <span className="text-primary bg-primary/5">
            studying 127 personal brand campaigns — including
          </span>
          &nbsp;Elon Musk and Gary Vee — for what actually&nbsp;
          <span className="text-primary bg-primary/5">
            gets a personal brand found
          </span>
        </div>

        <RegistrationForm
          primary_cta="Notify Me When It Launches"
          cta_location="social-proof-campaigns"
          webhookUrl={webhookUrl}
          emailOnly
          source="website"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingSocialProofBlockNum1SectionV1;

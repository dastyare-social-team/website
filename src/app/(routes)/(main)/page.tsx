import WindowLayout from "@/components/window-layout";
import LandingHeroSectionV1 from "./_sections/hero";
import LandingTrustLineSectionV1 from "./_sections/trust-line";
import LandingProblemSectionV1 from "./_sections/problem";
import LandingSocialProofBlockNum1SectionV1 from "./_sections/social-proof-block-num1";
import LandingSocialProofBlockNum2SectionV1 from "./_sections/social-proof-block-num2";
import LandingThreeDreamOutcomeBlocksSectionV1 from "./_sections/three-dream-outcome-blocks";
import LandingWhyThisWorkshopIsDifferentSectionV1 from "./_sections/why-this-workshop-different";
import LandingHowItWorksSectionV1 from "./_sections/how-it-works";
import LandingFAQSectionV1 from "./_sections/faq";
import LandingFinalCTASectionV1 from "./_sections/final-cta";

const Page = () => {
  return (
    <WindowLayout>
      <LandingHeroSectionV1 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingTrustLineSectionV1 />

      <LandingProblemSectionV1 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingSocialProofBlockNum1SectionV1
        webhookUrl={process.env.WEBHOOK_URL}
      />

      <LandingThreeDreamOutcomeBlocksSectionV1
        webhookUrl={process.env.WEBHOOK_URL}
      />

      <LandingSocialProofBlockNum2SectionV1
        webhookUrl={process.env.WEBHOOK_URL}
      />

      <LandingWhyThisWorkshopIsDifferentSectionV1
        webhookUrl={process.env.WEBHOOK_URL}
      />

      <LandingHowItWorksSectionV1 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingFAQSectionV1 />

      <LandingFinalCTASectionV1 webhookUrl={process.env.WEBHOOK_URL} />
    </WindowLayout>
  );
};

export default Page;

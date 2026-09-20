import SectionWrapper from "@/components/section-wrapper";
import FaqAccordion from "@/components/faq-accordion";
import { Button } from "@/components/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const items = [
  {
    value: "q1",
    question: "Who is this for?",
    answer:
      "Any personal brand — a founder, a manager building a name for herself, a freelancer, anyone with something real to say. Not just founders.",
  },
  {
    value: "q2",
    question: "Is it free?",
    answer: "Yes.",
  },
  {
    value: "q3",
    // TODO(open-items): confirm real launch timeline before shipping.
    question: "When does it launch?",
    answer:
      "Sometime next year. We'll notify you the moment it's live.",
  },
  {
    value: "q4",
    question: "Do I need to be a founder to use it?",
    answer: "No — built for personal brands of any kind, in any role.",
  },
  {
    value: "q5",
    question: "How is this different from LinkedIn or Twitter?",
    answer:
      "Built specifically for personal brand discovery — not general content competing for the same algorithm's attention.",
  },
  {
    value: "q6",
    // TODO(open-items): confirm what happens between signup and launch before shipping.
    question: "What happens after I sign up?",
    answer:
      "You'll get a confirmation, and occasional updates as launch gets closer.",
  },
];

const LandingFAQSectionV1 = async () => {
  const t = await getTranslations("faq");

  return (
    <SectionWrapper className="justify-center items-center md:pb-10">
      <div className="max-w-2xl w-full flex flex-col items-center gap-y-2.5">
        <div className="flex flex-col gap-y-1.5 pb-5 max-w-xl">
          <h2 className="text-center">
            {t("heading.prefix")}{" "}
            <span className="text-primary">{t("heading.highlight")}</span>
          </h2>
          <p className="text-center">{t("description")}</p>
        </div>

        <FaqAccordion items={items} className="max-w-5xl w-full" />

        <div className="max-w-md text-center pt-5 flex flex-col gap-y-2.5 items-center">
          <h3>
            {t("contact.title.prefix")}{" "}
            <span className="text-primary">{t("contact.title.highlight")}</span>
          </h3>
          <p className="text-[18px]">{t("contact.description")}</p>

          <div className="pt-5">
            <Link
              href="https://dastyare.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="text-[18px] px-3.5 border">
                {t("contact.button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingFAQSectionV1;

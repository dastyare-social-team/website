import SectionWrapper from "@/components/section-wrapper";
import FaqAccordion from "@/components/faq-accordion";
import { Button } from "@/components/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const items = [
  {
    value: "q1",
    question: "Is this actually free, or is there a paid tier?",
    answer:
      "Open-source, no license required. There's no hidden paid tier — DS-CS itself is complete as-is.",
  },
  {
    value: "q2",
    question: "Do I need the rest of the Dastyare Social suite to use this?",
    answer: "No. DS-CS runs standalone.",
  },
  {
    value: "q3",
    question:
      "What if I want the full personal brand build — website, content hub, everything?",
    answer:
      "That's the Launch Package. DS-CS is one piece; the Launch Package bundles it with the rest.",
  },
  // TODO(open-items): FAQ 4 — MCP support status unconfirmed per internal notes. Confirm before publishing, then uncomment.
  // {
  //   value: "q4",
  //   question: "Does this support MCP for AI agent tool use?",
  //   answer: "TBD — confirm current status before publishing.",
  // },
  {
    value: "q5",
    question: "What database and stack does this run on?",
    answer:
      "Next.js, React, Bun, PostgreSQL, Drizzle ORM — full details in the docs.",
  },
  {
    value: "q6",
    question: "Is my content actually searchable, or just technically public?",
    answer:
      "Every post is indexed for search engines and includes an llms.txt site map for AI agents — built to be found, not just technically accessible.",
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

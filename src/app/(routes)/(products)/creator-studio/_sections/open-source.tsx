"use client";

import SectionWrapper from "@/components/section-wrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { CheckIcon, MinusIcon, XIcon } from "lucide-react";
import { Button } from "@/components/button";
import { capture } from "@/lib/posthog";
import { GITHUB_REPO_URL } from "@/lib/constants";

const headers = [
  "",
  "DS-CS",
  "Posting directly on LinkedIn/Twitter/Instagram",
  "A generic self-hosted blog or CMS",
];

const rows: {
  label: string;
  cells: ({ icon: "check" | "x" | "dash" } | { text: string })[];
}[] = [
  {
    label: "No policy change or suspension can take it down",
    cells: [{ icon: "check" }, { icon: "x" }, { icon: "check" }],
  },
  {
    label: "Indexed for search AND structured for AI agents",
    cells: [{ icon: "check" }, { text: "Rarely" }, { text: "Rarely" }],
  },
  {
    label: "Genuinely open-source, no license fee",
    cells: [{ icon: "check" }, { text: "—" }, { text: "Sometimes" }],
  },
  {
    label:
      "Built for founders' actual content formats (text, image, video, voice, file)",
    cells: [{ icon: "check" }, { text: "Partially" }, { icon: "x" }],
  },
  {
    label: "Full REST API for developers from day one",
    cells: [{ icon: "check" }, { icon: "x" }, { text: "Rarely" }],
  },
];

const renderCell = (
  cell: { icon?: string } | { text?: string },
  isPrimaryCol = false,
) => {
  if ("icon" in cell && cell.icon) {
    if (cell.icon === "check")
      return <CheckIcon className={isPrimaryCol ? "text-primary" : ""} />;
    if (cell.icon === "x") return <XIcon />;
    return <MinusIcon />;
  }
  if ("text" in cell && cell.text)
    return <span className="text-[20px]">{cell.text}</span>;
  return null;
};

const LandingWhyThisWorkshopIsDifferentSectionV1 = () => {
  const cta_location = "why-different";

  return (
    <SectionWrapper className="hidden lg:flex flex-1 justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            Not just{" "}
            <span className="text-primary bg-primary/5">
              another way to post online
            </span>
          </h2>
        </div>

        <Button
          asChild
          onClick={() => capture("registration_cta_clicked", { cta_location })}
        >
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub — Now
          </a>
        </Button>

        {/* —— Comparison Table —— */}
        <Table className="w-full max-w-5xl overflow-x-scroll select-none">
          <TableHeader className="border-b-2 border-primary/10 overflow-x-scroll">
            <TableRow className="hover:bg-transparent">
              {headers.map((header, cellIndex) => (
                <TableHead
                  key={`header-${cellIndex}`}
                  className={
                    cellIndex === 0
                      ? "max-w-37.5 whitespace-normal wrap-break-word"
                      : cellIndex === 1
                        ? "w-[150px] max-w-[150px] whitespace-normal break-words text-primary px-5 py-2.5 text-center text-[20px]"
                        : "w-[150px] max-w-[150px] whitespace-normal break-words px-5 py-2.5 text-center text-[20px]"
                  }
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="border-l-2 border-primary/10">
            {rows.map((row, index) => (
              <TableRow key={`${row.label}-${index}`} className="h-full">
                <TableCell className="px-4.5 py-2.5 max-w-87.5 whitespace-normal wrap-break-word text-[22px] border-r-2 border-primary/10 bg-primary/3">
                  {row.label}
                </TableCell>

                {row.cells.map((cell, cellIndex) => (
                  <TableCell
                    key={`${row.label}-${cellIndex}`}
                    className="px-5 py-2.5 text-center border-r-2 border-primary/10"
                  >
                    <div className="flex flex-1 justify-center items-center">
                      {renderCell(cell, cellIndex === 0)}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SectionWrapper>
  );
};

export default LandingWhyThisWorkshopIsDifferentSectionV1;

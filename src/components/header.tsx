"use client";

import { Button } from "@/components/button";
import RegistrationForm from "@/components/registration-form";
import { routes } from "@/config/routes";
import { GITHUB_REPO_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ webhookUrl }: { webhookUrl?: string }) => {
  const pathname = usePathname();
  const isCreatorStudio = pathname?.includes("creator-studio");

  return (
    <div className="sticky top-0 backdrop-blur-xl flex gap-x-2.5 bg-primary/[1%] border-b border-primary/10 px-5 pt-5 select-none z-50">
      <Link
        href={routes.default}
        className="flex items-center gap-x-2.5 pb-2.5 cursor-pointer"
      >
        <div>
          <Image
            src="/icon.png"
            alt="logo"
            loading="lazy"
            width={30}
            height={30}
            className="aspect-square"
          />
        </div>

        <div className="text-xl leading-2">
          Dastyare Social
          <span className="text-sm">
            &nbsp;—/ Raise Visibility, Build Brand, Grow SALES
          </span>
        </div>
      </Link>

      <div className="pb-2.5"></div>

      <div className="flex-1" />

      <div className="hidden min-[450px]:flex items-center pb-2.5">
        {isCreatorStudio ? (
          <Button asChild variant="secondary">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub — Now
            </a>
          </Button>
        ) : (
          <RegistrationForm
            primary_cta="Notify Me When It Launches"
            cta_location="header"
            webhookUrl={webhookUrl}
            emailOnly
            source="website"
            triggerVariant="secondary"
          />
        )}
      </div>
    </div>
  );
};

export default Header;

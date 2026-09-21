"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const value_props = [
  "Connect directly with other personal brands, founders, and professionals in your field",
  "Get discovered by the people actually looking for you, not lost in a noisy general feed",
  "Find your next client, collaborator, mentor, or job opportunity",
];

const LandingHeroSectionV1 = ({ webhookUrl }: { webhookUrl?: string }) => {
  return (
    <SectionWrapper className="md:pt-0 border-0">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <p className="text-[20px]">COMING SOON</p>
          <h2>
            Connect with other personal brands{" "}
            <span className="text-primary">
              — founders, professionals, anyone building a name for themselves
            </span>
          </h2>
          <p>
            Stop getting lost in a feed built for everyone except you. No more
            networking that goes nowhere.
          </p>
          <div className="flex flex-col gap-y-1">
            {value_props.map((value, index) => (
              <p key={index}>— {value}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2.5" id="notify">
          <RegistrationForm
            primary_cta="Notify Me When It Launches"
            cta_location="hero"
            webhookUrl={webhookUrl}
            emailOnly
            source="website"
          />

          <div className="text-[18px] opacity-80 leading-6.5">
            Just your email. We&apos;ll let you know the moment it&apos;s live.
          </div>
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={896}
          height={1200}
          src="/images/sections/home-hero.webp"
          loading="eager"
          alt="Personal brands connecting on Dastyare Social"
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingHeroSectionV1;

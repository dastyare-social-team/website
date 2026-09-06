"use client";

import WindowWrapper from "../window-wrapper";

const Intro = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-1">
      <div>Introduction — /.</div>
      <div className="text-lg opacity-80 tracking-tighter line-clamp-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nihil
        quaerat nisi at fugit consequatur, odit est itaque repellat molestias
        nulla, accusantium eius. Aliquam nulla asperiores beatae accusantium
        voluptatibus praesentium.
      </div>
      <div className="text-lg opacity-80 tracking-tighter line-clamp-2">
        @founders_card
      </div>
    </div>
  );
};

const IntroWindow = WindowWrapper(Intro);

export default IntroWindow;

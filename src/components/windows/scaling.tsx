"use client";

import WindowWrapper from "../window-wrapper";

const Scaling = () => {
  return (
   <div className="flex-1">Scaling — /.</div>
  );
};

const ScalingWindow = WindowWrapper(Scaling);

export default ScalingWindow;

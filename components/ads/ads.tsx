"use client";

import { AdUnit } from "next-google-adsense";

export const Ads1 = () => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <AdUnit
          publisherId="pub-6808814529890463"
          slotId={"6036611144"}
          layout="display"
        />
      </div>
    </div>
  );
};

export const Ads2 = () => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <AdUnit
          publisherId="pub-6808814529890463"
          slotId={"8324035544"}
          layout="display"
        />
      </div>
    </div>
  );
};

export const Ads3 = () => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <AdUnit
          publisherId="pub-6808814529890463"
          slotId={"4551214014"}
          layout="display"
        />
      </div>
    </div>
  );
};

"use client";

import { AdUnit } from "next-google-adsense";

export const Ads1 = () => {
  return (
    <div className="w-full my-4">
      <h2 className="text-center w-full text-sm font-medium text-gray-900 mb-2">
        Sponsored
      </h2>
      <AdUnit
        publisherId="pub-6808814529890463"
        slotId="6036611144"
        layout="display"
      />
    </div>
  );
};

export const Ads2 = () => {
  return (
    <div className="w-full my-4">
      <h2 className="text-center w-full text-sm font-medium text-gray-900 mb-2">
        Sponsored
      </h2>
      <AdUnit
        publisherId="pub-6808814529890463"
        slotId="8324035544"
        layout="display"
      />
    </div>
  );
};

export const Ads3 = () => {
  return (
    <div className="w-full my-4 min-w-[350px] min-h-[300px]">
      <h2 className="text-center w-full text-sm font-medium text-gray-900 mb-2">
        Sponsored
      </h2>
      <AdUnit
        publisherId="pub-6808814529890463"
        slotId="4551214014"
        layout="display"
      />
    </div>
  );
};

import { Ads1, Ads2 } from "@/components/ads/ads";
import { Combobox } from "@/components/etc/combobox";
import { Pagination } from "@/components/etc/pagination";

import { FrameCard } from "@/components/views/frame-card";
import { getLatestFrames } from "@/lib/frames";
import type { Metadata } from "next";

export const revalidate = 360;

export const metadata: Metadata = {
  title: "Explore | Photos Frame Maker",
};

const ExplorePage = async () => {
  const frameData = await getLatestFrames(0);

  if (!frameData) return null;

  const jsonLd = `
  {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home Page",
        "item": "https://photosframemaker.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Explore Page",
        "item": "https://photosframemaker.com/explore"
      }]
    }
  `;

  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-0 sm:px-2 md:px-4 xl:px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      ></script>
      <div className="w-full flex justify-end my-2 md:my-8 px-2 sm:px-0">
        <Combobox />
      </div>
      <Ads1 />
      <div className="w-full flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-wrap">
        {frameData.map((f) => (
          <FrameCard
            key={f.id}
            id={f.id}
            createdAt={f.createdAt}
            img={f.img}
            name={f.name}
            supporter={f.supporter}
            nameUser={f.user.name as string}
            profilePic={f.user.image}
          />
        ))}
      </div>
      <Ads2 />
      <Pagination baseLink="/explore/" isBack={true} isNext={true} page={1} />
    </section>
  );
};

export default ExplorePage;

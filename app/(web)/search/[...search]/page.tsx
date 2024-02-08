import { redirect } from "next/navigation";

import { FrameCard } from "@/components/views/frame-card";
import { Title } from "@/components/views/title";

import { findFrames } from "@/lib/frames";
import { NoFrameFound } from "@/components/views/no-frame";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { search: string[] };
}): Promise<Metadata> {
  return {
    title: `${params.search[0]} | Photos Frame Maker`,
  };
}

const SearchPage = async ({ params }: { params: { search: string[] } }) => {
  if (!params.search) redirect("/");

  const frameData = await findFrames(0, params.search[0]);

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
        "name": "Search Page",
        "item": "https://photosframemaker.com/search/${params.search[0]}"
      }]
    }
  `;

  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-0 sm:px-2 md:px-4 xl:px-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      ></script>
      <Title
        label="Campaigns that matches you're search."
        title={"Result for: " + params.search[0]}
      />
      <div className="w-full flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 flex-wrap">
        {frameData && frameData.length > 0 ? (
          frameData.map((f) => (
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
          ))
        ) : (
          <NoFrameFound />
        )}
      </div>
    </section>
  );
};

export default SearchPage;

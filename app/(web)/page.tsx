import { FrameCard } from "@/components/views/frame-card";
import { Title } from "@/components/views/title";

import { getLatestFrames } from "@/lib/frames";

export const revalidate = 360;

const HomePage = async () => {
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
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "Popular Page",
        "item": "https://photosframemaker.com/popular"
      },{
        "@type": "ListItem",
        "position": 4,
        "name": "Help Page",
        "item": "https://photosframemaker.com/help"
      },{
        "@type": "ListItem",
        "position": 5,
        "name": "Login Page",
        "item": "https://photosframemaker.com/login"
      },{
        "@type": "ListItem",
        "position": 6,
        "name": "Terms & Condition Page",
        "item": "https://photosframemaker.com/terms"
      }]
    }
  `;

  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      ></script>
      <Title
        label=" Campaigns that gained the most supports in the last 24 hours."
        link="/explore"
        linkText="View All"
        title=" Trending in India "
      />
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
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
    </section>
  );
};

export default HomePage;

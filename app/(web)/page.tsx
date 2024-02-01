import { FrameCard } from "@/components/views/frame-card";
import { Title } from "@/components/views/title";

import { getLatestFrames } from "@/lib/frames";

export const revalidate = 0;

const HomePage = async () => {
  const frameData = await getLatestFrames();

  if (!frameData) return null;

  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container">
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
            nameUser={f.user.name}
            profilePic={f.user.profilePic}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;

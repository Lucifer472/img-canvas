import { Combobox } from "@/components/etc/combobox";

import { FrameCard } from "@/components/views/frame-card";
import { getLatestFrames } from "@/lib/frames";

export const revalidate = 0;

const ExplorePage = async () => {
  const frameData = await getLatestFrames(0);

  if (!frameData) return null;

  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-0 sm:px-2 md:px-4 xl:px-0">
      <div className="w-full flex justify-end my-2 md:my-8 px-2 sm:px-0">
        <Combobox />
      </div>
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
    </section>
  );
};

export default ExplorePage;

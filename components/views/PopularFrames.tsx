import { User } from "@prisma/client";

import { Title } from "@/components/views/title";
import { FrameCard } from "@/components/views/frame-card";

interface PopularFrames {
  frameData: {
    id: string;
    img: string;
    name: string;
    desc: string | null;
    supporter: number;
    createdAt: Date;
    userId: string;
    user: User;
  }[];
}

export const PopularFrames = ({ frameData }: PopularFrames) => {
  return (
    <div className="bg-white w-full max-w-[820px] p-2 xss:p-4 sm:p-6 rounded-2xl shadow-sm flex flex-col items-start gap-y-4 overflow-x-scroll">
      <Title title="Trending in India" link="/explore" linkText="View All" />
      <div className="flex items-center justify-start gap-x-2 max-w-[780px]">
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
    </div>
  );
};

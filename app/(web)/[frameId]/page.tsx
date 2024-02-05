import Image from "next/image";
import { ClockIcon, UsersIcon } from "lucide-react";

import { getFrame, getPopularFrames } from "@/lib/frames";
import { datehandler } from "@/lib/utils";

import { ImageView } from "@/components/views/image-upload";
import { PopularFrames } from "@/components/views/PopularFrames";
import { FrameSharePop } from "@/components/views/SocialShare";

const FramePage = async ({ params }: { params: { frameId: string } }) => {
  const frame = await getFrame(params.frameId);
  const popular = await getPopularFrames(0);

  if (!frame) return null;

  return (
    <section className="w-full h-full bg-emerald-50">
      <div className="flex flex-col items-center gap-y-8 py-8 basic-container w-full h-full">
        <div className="w-full h-full flex flex-col gap-y-4 items-center">
          <Image
            src={frame.user.image as string}
            alt="Profile Image"
            width={80}
            height={80}
            className="object-cover w-20 h-20 rounded-full"
          />
          <span className="text-sm text-center font-medium hover:border-b border-black cursor-pointer">
            {frame.user.name}
          </span>
          <div className="flex items-center justify-center gap-x-2">
            <UsersIcon className="w-6 h-6 text-black" />
            <span className="text-[14px] text-gray-800">
              {frame.supporter} Supporters
            </span>
            <ClockIcon className="w-6 h-6 text-black" />
            <span className="text-[14px] text-gray-800">
              {datehandler(frame.createdAt)}
            </span>
          </div>
          <p className="text-sm text-gray-800">{frame.desc}</p>
          <FrameSharePop label={"tbw.zn/" + frame.id} img={frame.img} />
        </div>
        <ImageView
          img={frame.img}
          id={frame.id}
          userId={frame.user.id}
          prevSup={frame.supporter}
          prevSupd={frame.user.supported}
        />
        {popular && <PopularFrames frameData={popular} />}
      </div>
    </section>
  );
};

export default FramePage;

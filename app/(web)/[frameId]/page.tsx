import Image from "next/image";
import { ClockIcon, UsersIcon } from "lucide-react";

import { getFrame, getPopularFrames } from "@/lib/frames";
import { datehandler } from "@/lib/utils";

import { ImageView } from "@/components/views/image-upload";
import { PopularFrames } from "@/components/views/PopularFrames";
import { FrameSharePop } from "@/components/views/SocialShare";
import Link from "next/link";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { frameId: string };
}): Promise<Metadata> {
  const frame = await getFrame(params.frameId);

  const newTitle = frame?.name + " | Photos Frame Maker";

  return {
    title: newTitle,
    description: frame?.desc,
    openGraph: {
      images: [frame?.img as string],
    },
  };
}

const FramePage = async ({ params }: { params: { frameId: string } }) => {
  const frame = await getFrame(decodeURIComponent(params.frameId));
  const popular = await getPopularFrames(0);

  if (!frame) return null;

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
        "name": "${frame?.name}",
        "item": "https://photosframemaker.com/${frame?.id}"
      }]
    }
  `;

  return (
    <section className="w-full h-full bg-sky-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      ></script>
      <div className="flex flex-col items-center gap-y-8 py-8 basic-container w-full h-full">
        <div className="w-full h-full flex flex-col gap-y-4 items-center">
          <Image
            src={frame.user.image as string}
            alt="Profile Image"
            width={80}
            height={80}
            className="object-cover w-20 h-20 rounded-full"
          />
          <Link
            href={
              "/profile/" + encodeURIComponent(frame.user.username as string)
            }
            className="text-sm text-center font-medium hover:border-b border-black cursor-pointer"
          >
            {frame.user.name}
          </Link>
          <h2 className="text-2xl font-medium text-center">{frame.name}</h2>
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
          <p className="text-sm text-gray-800 text-center">{frame.desc}</p>
          <FrameSharePop
            label={"https://photosframemaker.com/" + frame.id}
            img={frame.img}
          />
        </div>
        <ImageView img={frame.img} id={frame.id} userId={frame.user.id} />
        {popular && <PopularFrames frameData={popular} />}
      </div>
    </section>
  );
};

export default FramePage;

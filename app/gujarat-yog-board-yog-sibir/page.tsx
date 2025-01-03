import type { Metadata } from "next";
import Image from "next/image";
import { ClockIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

import { auth } from "@/auth";

import { getFrame } from "@/lib/frames";
import { datehandler } from "@/lib/utils";

import { ImageView } from "./_image";
import { FrameSharePop } from "@/components/views/SocialShare";
import DeleteFrameForm from "@/components/auth/delete-frame-form";

export async function generateMetadata(): Promise<Metadata> {
  const frame = await getFrame("gujarat-yog-board-yog-sibir");

  const newTitle = frame?.name + " | Photos Frame Maker";

  return {
    title: newTitle,
    description: frame?.desc,
    openGraph: {
      images: [frame?.img as string],
    },
  };
}

const FramePage = async () => {
  const frame = await getFrame("gujarat-yog-board-yog-sibir");

  const session = await auth();

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
            src={"/asset/images/gujarat-yog.png"}
            alt="Profile Image"
            width={80}
            height={80}
            className="object-cover w-20 h-20 rounded-full"
          />
          <div className="text-sm text-center font-medium hover:border-b border-black cursor-pointer">
            Gujarat state yog board
          </div>
          {session &&
            session.user &&
            session.user.email === frame.user.email && (
              <DeleteFrameForm id={frame.id} />
            )}
          <h2 className="text-2xl font-medium text-center">
            Gujarat state yog board
          </h2>
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
          <p className="text-sm text-gray-800 text-center">
            Gujarat state yog board
          </p>
          <FrameSharePop label={frame.id} img={frame.img} />
        </div>
        <ImageView
          imgName={frame.name}
          img={frame.img}
          id={frame.id}
          userId={frame.user.id}
        />
      </div>
    </section>
  );
};

export default FramePage;

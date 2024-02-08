import { Poppins } from "next/font/google";
import { redirect } from "next/navigation";
import Image from "next/image";
import { CalendarRange, Users2 } from "lucide-react";

import { DropDownMenu } from "@/components/etc/dropdown-menu";
import { FrameCard } from "@/components/views/frame-card";

import { findUser } from "@/lib/user";
import { cn } from "@/lib/utils";
import { findFramesWithId } from "@/lib/frames";
import { timeFormatOptions } from "@/constant";

import type { Metadata } from "next";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { profileId: string };
}): Promise<Metadata> {
  const userData = await findUser(params.profileId);

  const newTitle = userData?.name + " | Photos Frame Maker";

  return {
    title: newTitle,
  };
}

const ProfilePage = async ({ params }: { params: { profileId: string } }) => {
  const profileId = params.profileId;
  if (!profileId) redirect("/");

  const userData = await findUser(profileId);

  if (!userData) redirect("/");

  const frameData = await findFramesWithId(0, userData.username as string);

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
        "name": "${userData.name}",
        "item": "https://photosframemaker.com/profile/${params.profileId}"
      }]
    }
  `;

  return (
    <div className="w-full h-full flex flex-col gap-y-4 bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      ></script>
      <div className="w-full py-2 bg-white">
        <div className="basic-container flex justify-between items-center p-2">
          <div className="flex items-center justify-center max-w-[250px] gap-x-4">
            <Image
              src={userData.image}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div className="flex items-start flex-col">
              <h1 className={cn("text-lg", poppins.className)}>
                {userData.name}
              </h1>
              <span className="text-muted-foreground">{userData.username}</span>
            </div>
          </div>
          <DropDownMenu />
        </div>
      </div>
      <div className="p-4 flex flex-wrap md:flex-nowrap gap-x-4 max-w-[1024px] mx-auto">
        <div className="bg-white flex flex-col items-start gap-y-4 p-4 my-2 rounded-md min-w-[340px] sm:min-w-[380px] max-h-[100px]">
          <h1 className={cn("text-lg", poppins.className)}>About</h1>
          <div className="flex items-center justify-start  gap-x-4">
            <div className="flex items-center justify-start">
              <Users2 />
              <span className="text-sm">{userData.supported} Supporters</span>
            </div>
            <div className="flex items-center justify-start">
              <CalendarRange />
              <span className="text-sm">
                Joined on
                {userData.createdAt.toLocaleDateString(
                  "en-GB",
                  // @ts-ignore
                  timeFormatOptions
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col items-start gap-y-4 p-4 my-2 rounded-md">
          <h2
            className={cn(
              "text-lg py-2 border-b border-gray-200 w-full",
              poppins.className
            )}
          >
            Campains
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
            {frameData &&
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import { Poppins } from "next/font/google";
import Image from "next/image";

import { DropDownMenu } from "@/components/etc/dropdown-menu";
import { cn } from "@/lib/utils";
import { CalendarRange, Megaphone, Users2 } from "lucide-react";
import { getLatestFrames } from "@/lib/frames";
import { FrameCard } from "@/components/views/frame-card";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

const ProfilePage = async () => {
  const frameData = await getLatestFrames();

  if (!frameData) return null;

  return (
    <div className="w-full h-full flex flex-col gap-y-4 bg-gray-100">
      <div className="w-full h-[128px] bg-white">
        <div className="basic-container flex justify-between items-center p-2">
          <div className="flex items-center max-w-[250px] gap-x-4">
            <Image
              src={"/demo-profile.webp"}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
            <div className="flex items-start flex-col">
              <h1 className={cn("text-lg", poppins.className)}>Hardik Sadhu</h1>
              <span className="text-muted-foreground">@hardikasdhu</span>
            </div>
          </div>
          <DropDownMenu />
        </div>
      </div>
      <div className="p-4 flex flex-wrap md:flex-nowrap gap-x-4 max-w-[1024px] mx-auto">
        <div className="bg-white flex flex-col items-start gap-y-4 p-4 my-2 rounded-md min-w-[320px] sm:min-w-[380px] max-h-[150px]">
          <h1 className={cn("text-lg", poppins.className)}>About</h1>
          <div className="flex items-center justify-start  gap-x-4">
            <div className="flex items-center justify-start">
              <Users2 />
              <span>11,298 Supporters</span>
            </div>
            <div className="flex items-center justify-start">
              <Megaphone />
              <span>11,298 Supporters</span>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <CalendarRange />
            <span>Joined on 31 Marc 2022</span>
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

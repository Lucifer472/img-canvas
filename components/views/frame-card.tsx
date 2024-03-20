import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn, datehandler } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, UsersIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface FrameCard {
  id: string;
  img: string;
  name: string;
  supporter: number;
  createdAt: Date;
  profilePic: string;
  nameUser: string;
}

export const FrameCard = ({
  id,
  img,
  name,
  supporter,
  createdAt,
  profilePic,
  nameUser,
}: FrameCard) => {
  const truncateString = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength - 3) + "...";
    }
  };

  return (
    <Link
      href={"/" + encodeURIComponent(id)}
      className="border border-slate-100 rounded-md shadow-sm w-[300px] h-[490px] xx:w-[340px] xx:h-[525px] xss:w-[230px] xss:h-[390px] hover:shadow-lg"
    >
      <div className="w-full flex flex-col items-start gap-y-4 p-2">
        <div className="relative w-[300px] h-[300px] xx:w-[340px] xx:h-[525px] xss:w-[210px] xss:h-[210px]">
          <div className="absolute w-[280px] h-[280px] xx:w-[320px] xx:h-[320px] xss:w-[210px] xss:h-[210px] overflow-hidden">
            <Image
              src={img}
              alt="Image"
              fill
              className="object-contain aspect-square rounded-md hover:scale-125 transition-transform duration-300"
            />
          </div>
        </div>
        <h2
          className={cn(
            "text-lg hover:border-b border-black",
            poppins.className
          )}
        >
          {truncateString(name, 15)}
        </h2>
        <div className="flex items-center justify-center gap-x-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={profilePic} />
            <AvatarFallback>{nameUser}</AvatarFallback>
          </Avatar>
          <span className="text-[14px] font-medium hover:border-b border-black">
            {nameUser}
          </span>
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-200" />
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center justify-start gap-x-2 p-2">
          <UsersIcon className="w-[18px] h-[18px] text-muted-foreground" />
          <p className="text-[14px] text-muted-foreground">
            {supporter} Supporters
          </p>
        </div>
        <div className="flex items-center justify-start gap-x-1 p-2">
          <Clock className="w-[18px] h-[18px] text-muted-foreground" />
          <p className="text-[14px] text-muted-foreground">
            {datehandler(createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

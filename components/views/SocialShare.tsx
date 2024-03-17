"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CopyCheckIcon, Share2 } from "lucide-react";
import toast from "react-hot-toast";

import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FrameSharePopProps {
  label: string;
  img: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const FrameSharePop = ({ label, img }: FrameSharePopProps) => {
  const handleCopy = () => {
    if (navigator) {
      navigator.clipboard.writeText(label).then(() => {
        toast.success("Text Copied!");
      });
    } else {
      toast.error("Something Went Wrong!");
    }
  };

  const truncateString = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength - 3) + "...";
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-between w-[280px] sm:w-[340px] bg-sky-500 hover:bg-sky-600 rounded-full p-2 text-white">
          <span className="ml-2 text-[10px] xss:text-xs">
            {truncateString("https://photosframemaker.com/" + label, 40)}
          </span>
          <Share2 className="p-1 bg-sky-400 rounded-full" />
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[280px] max-w-[400px] w-[90%] min-h-[600px] p-0 rounded-lg">
        <DialogHeader className="flex w-full h-full items-center justify-center bg-slate-200 rounded-t-lg">
          <Image
            src={img}
            alt="Image"
            width={220}
            height={220}
            className="border border-black border-dashed rounded-sm bg-white"
          />
        </DialogHeader>
        <div className="bg-white flex flex-col items-center w-full gap-y-4">
          <h2
            className={cn(
              "text-xl text-center font-[600] px-2",
              poppins.className
            )}
          >
            Share this campaign to social media
          </h2>

          <div className="flex items-center justify-center gap-x-2">
            <Link
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                encodeURIComponent("https://photosframemaker.com/" + label)
              }
              target="_blank"
            >
              <Image
                src={"/facebook.svg"}
                alt="Facebook"
                width={60}
                height={60}
              />
            </Link>
            <Link
              href={
                "https://twitter.com/intent/tweet?url=" +
                encodeURIComponent("https://photosframemaker.com/" + label)
              }
              target="_blank"
            >
              <Image src={"/x.svg"} alt="Facebook" width={70} height={70} />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?text=" +
                " Get yourself this Photoframemaker at " +
                encodeURIComponent("https://photosframemaker.com/" + label) +
                " Don't forget to follow @photoframemaker for further updates! #photoframemaker"
              }
              target="_blank"
            >
              <Image src={"/wp-2.svg"} alt="Facebook" width={60} height={60} />
            </Link>
          </div>
          <span
            className={cn(
              "text-muted-foreground font-[500]",
              poppins.className
            )}
          >
            or Copy using button given below
          </span>
        </div>
        <DialogFooter className="rounded-lg mb-4 px-4">
          <Button
            variant={"outline"}
            className="w-full flex items-center justify-between"
            onClick={handleCopy}
          >
            <span className="text-[10px] xss:text-xs">
              {truncateString("https://photosframemaker.com/" + label, 48)}
            </span>
            <CopyCheckIcon className="w-4 h-4 xss:w-6 xss:h-6" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

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
  weight: ["500", "700"],
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

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-between w-[340px] bg-emerald-500 hover:bg-emerald-600 rounded-full p-2 text-white">
          <span className="ml-2 text-xs">{label}</span>
          <Share2 className="p-1 bg-emerald-400 rounded-full" />
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[300px] max-w-[400px] w-full h-[600px] p-0 rounded-lg">
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
            className={cn("text-xl text-center font-[700]", poppins.className)}
          >
            Share this campaign to social media
          </h2>

          <div className="flex items-center justify-center gap-x-2">
            <Link href={"/"}>
              <Image
                src={"/facebook.svg"}
                alt="Facebook"
                width={60}
                height={60}
              />
            </Link>
            <Link href={"/"}>
              <Image src={"/x.svg"} alt="Facebook" width={70} height={70} />
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
        <DialogFooter className="rounded-lg px-4">
          <Button
            variant={"outline"}
            className="w-full flex items-center justify-between"
            onClick={handleCopy}
          >
            <span className="text-xs">{label}</span>
            <CopyCheckIcon />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

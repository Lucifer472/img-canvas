import Link from "next/link";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export const NoFrameFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-6 min-h-[500px]">
      <h1 className={cn("text-2xl text-center", poppins.className)}>
        No Frames Found for you are search result!
      </h1>
      <Button variant={"default"} size={"lg"} asChild>
        <Link href={"/"}>Go Home</Link>
      </Button>
    </div>
  );
};

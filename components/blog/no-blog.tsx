import Link from "next/link";
import { Button } from "@/components/ui/button";

const NoBlog = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center flex-col w-full min-h-[500px] gap-6">
        <span className="text-2xl sm:text-4xl text-center font-medium">
          Sorry! No Blog Found
        </span>
        <Link href={"/"}>
          <Button
            size={"lg"}
            className={`bg-black text-white px-2 sm:px-4 md:px-6 py-4 text-sm sm:text-base md:text-lg`}
          >
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoBlog;

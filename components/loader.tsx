import { Poppins } from "next/font/google";
import { ClipLoader } from "react-spinners";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Loader = ({ isOpen }: { isOpen: boolean }) => {
  console.log(isOpen);
  return (
    <>
      <div
        className={cn(
          "w-full h-full max-w-80 max-h-56 bg-white flex flex-col gap-y-4 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md z-50",
          isOpen ? "fixed" : "hidden"
        )}
      >
        <ClipLoader
          color="#0496ff"
          cssOverride={{
            borderWidth: "10px",
          }}
          speedMultiplier={0.6}
          size={74}
        />
        <span className={cn("text-xl", poppins.className)}>
          Loading Please Wait...
        </span>
      </div>
      <div
        className={cn(
          "w-full h-full min-w-[100vw] min-h-[100vh] z-40 top-0 left-0 bg-black bg-opacity-70",
          isOpen ? "fixed" : "hidden"
        )}
      ></div>
    </>
  );
};

export default Loader;

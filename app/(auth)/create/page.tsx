import { FrameForm } from "@/components/auth/frame-form";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

const FrameCreatePage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center my-6">
      <div className="w-full h-full bg-white p-4 shadow-md rounded-md flex flex-col items-start max-w-[720px] mx-auto">
        <h1
          className={cn(
            "text-xl pb-2 w-full border-b border-slate-100",
            poppins.className
          )}
        >
          Create Frames
        </h1>
        <FrameForm />
      </div>
    </div>
  );
};

export default FrameCreatePage;

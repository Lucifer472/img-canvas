import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const dynamic = "force-static";

const HelpPage = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-0 sm:px-2 md:px-4 xl:px-0">
      <h1
        className={cn(
          "md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Let&apos;s Talk!
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Contact Us
      </span>
      <p className="w-full text-center text-lg">
        If you have any questions about Twibbonize, please contact our team. We
        will be happy to assist you as soon as possible.
      </p>
      <div className="w-full p-4 mt-4 border-t border-b border-black grid grid-cols-3 items-center">
        <div className="col-span-1 flex flex-col items-center justify-center gap-y-4 w-full border-r border-black my-4">
          <Image src={"/wp.svg"} alt="Wp" width={60} height={60} />
          <span>WhatsApp</span>
          <Link href={"tel"} className="text-emerald-600">
            +62 812 8000 7325
          </Link>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center gap-y-4 w-full border-r border-black my-4">
          <Image src={"/call.svg"} alt="Wp" width={60} height={60} />
          <span>Hotline</span>
          <Link href={"tel"} className="text-emerald-600">
            +62 812 8000 7325
          </Link>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center gap-y-4 w-full  my-4">
          <Image src={"/email.svg"} alt="Wp" width={60} height={60} />
          <span>E-Mail</span>
          <Link href={"tel"} className="text-emerald-600">
            hi@twibbonize.com
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-4">
        <span className={cn("text-2xl", poppins.className)}>
          Office & Representative
        </span>
        <div className="flex flex-col gap-y-1 text-center">
          <p className="font-medium text-lg">Photosframemaker</p>
          <p>Created By TruepubMedia Solution Private Limited.</p>
          <p>Shop No. 501-502,</p>
          <p>Kabir Shilp,Near Landmark,</p>
          <p>Kudasan,Gandhinagar,Gujarat</p>
          <p>India - 382010</p>
        </div>
      </div>
    </section>
  );
};

export default HelpPage;

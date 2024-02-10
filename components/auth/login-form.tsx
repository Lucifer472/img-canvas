"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginMethod } from "@/actions/auth";
import { useEffect } from "react";
import toast from "react-hot-toast";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

interface LoginModalProps {
  label: string;
  text: string;
  linkLabel: string;
  link: string;
}

export const LoginModal = ({
  label,
  text,
  linkLabel,
  link,
}: LoginModalProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error")) {
      toast.error("Something went Wrong");
    }
  }, [searchParams]);

  const handleGoogle = () => {
    LoginMethod();
  };

  return (
    <div className="max-w-[350px] w-full py-6 px-4 rounded-md bg-white shadow-lg border border-slate-100">
      <div className="w-full h-full flex items-start justify-start flex-col gap-y-4">
        <Link href={"/"} className="w-full flex items-center justify-center">
          <Image src={"/logo.png"} alt="Logo" width={180} height={180} />
        </Link>
        <h1
          className={cn(
            "text-sm text-center text-muted-foreground w-full",
            poppins.className
          )}
        >
          {label}
        </h1>
        <div className="w-full h-full flex flex-col gap-y-4 mt-2">
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full min-h-[50px]"
            onClick={handleGoogle}
          >
            <Image src={"/google.svg"} alt="Google" width={20} height={20} />
            <span className={cn("text-sm ml-4", poppins.className)}>
              Continue with Google
            </span>
          </Button>
          <div className="flex items-center justify-center w-full">
            <div className="w-full h-[1px] bg-slate-200"></div>
            <span className="px-2">OR</span>
            <div className="w-full h-[1px] bg-slate-200"></div>
          </div>
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full min-h-[50px]"
          >
            <Image src={"/facebook.svg"} alt="Google" width={25} height={25} />
            <span className={cn("text-sm ml-4", poppins.className)}>
              Continue with Facebook
            </span>
          </Button>
        </div>
        <p className="w-full flex items-center justify-center gap-2">
          {text}
          <Link
            href={link}
            className="text-sky-500 hover:border-b border-sky-500"
          >
            {linkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
};

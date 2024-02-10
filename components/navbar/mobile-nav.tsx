"use client";

import { usePathname } from "next/navigation";
import { CompassIcon, HomeIcon, PlusSquareIcon, User } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Session } from "next-auth";

export const MobileNav = ({ user }: { user: Session | null }) => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden items-center justify-evenly gap-x-4 w-full h-[80px] px-2 bg-white fixed bottom-0 left-0 z-10 rounded-t-sm border-t border-slate-100 shadow-md">
      <Link
        href={"/"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[25%] w-full h-full cursor-pointer px-4"
        )}
      >
        <HomeIcon
          className={cn("w-8 h-8", pathname === "/" && "text-sky-500")}
        />
        <span>Home</span>
      </Link>
      <Link
        href={"/explore"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[25%] w-full h-full cursor-pointer px-4"
        )}
      >
        <CompassIcon
          className={cn(
            "w-8 h-8",
            pathname === "/explore" && "text-sky-500",
            pathname === "/popular" && "text-sky-500"
          )}
        />
        <span>Trending</span>
      </Link>
      <Link
        href={"/create"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[25%] w-full h-full cursor-pointer px-4"
        )}
      >
        <PlusSquareIcon
          className={cn(
            "w-8 h-8",
            pathname === "/create" && "text-sky-500"
          )}
        />
        <span>Create</span>
      </Link>
      <Link
        href={user ? "/profile/" + user.user?.id : "/login"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[25%] w-full h-full cursor-pointer px-4"
        )}
      >
        <User
          className={cn(
            "w-8 h-8",
            pathname === "/login" && "text-sky-500",
            pathname === "/profile" && "text-sky-500"
          )}
        />
        <span>{user ? "Account" : "Login"}</span>
      </Link>
    </div>
  );
};

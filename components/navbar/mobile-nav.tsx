"use client";

import { usePathname } from "next/navigation";
import { CompassIcon, HomeIcon, PlusSquareIcon, User } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Session } from "next-auth";

export const MobileNav = ({ user }: { user: Session | null }) => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden items-center justify-evenly gap-x-4 w-full h-[80px] px-4 bg-white fixed bottom-0 left-0 z-10 rounded-t-sm border-t border-slate-100 shadow-md">
      <Link
        href={"/"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[23%] w-full h-full cursor-pointer"
        )}
      >
        <HomeIcon
          className={cn("w-6 h-6", pathname === "/" && "text-sky-500")}
        />
        <span className="text-xs text-center w-full mt-2">Home</span>
      </Link>
      <Link
        href={"/explore"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[23%] w-full h-full cursor-pointer "
        )}
      >
        <CompassIcon
          className={cn(
            "w-6 h-6",
            pathname === "/explore" && "text-sky-500",
            pathname === "/popular" && "text-sky-500"
          )}
        />
        <span className="text-xs text-center w-full mt-2">Trending</span>
      </Link>
      <Link
        href={"/create"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[23%] w-full h-full cursor-pointer "
        )}
      >
        <PlusSquareIcon
          className={cn("w-6 h-6", pathname === "/create" && "text-sky-500")}
        />
        <span className="text-xs text-center w-full mt-2">Create</span>
      </Link>
      <Link
        href={user ? "/profile/" + user.user?.id : "/login"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[23%] w-full h-full cursor-pointer "
        )}
      >
        <User
          className={cn(
            "w-6 h-6",
            pathname === "/login" && "text-sky-500",
            pathname === "/profile" && "text-sky-500"
          )}
        />
        <span className="text-xs text-center w-full mt-2">
          {user ? "Account" : "Login"}
        </span>
      </Link>
    </div>
  );
};

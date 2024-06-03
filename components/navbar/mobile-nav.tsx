"use client";

import { usePathname } from "next/navigation";
import {
  CompassIcon,
  HomeIcon,
  Newspaper,
  PlusSquareIcon,
  User,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Session } from "next-auth";

export const MobileNav = ({ user }: { user: Session | null }) => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden items-center justify-evenly gap-x-2 w-full h-[80px] px-4 bg-white fixed bottom-0 left-0 z-50 rounded-t-sm border-t border-slate-100 shadow-md">
      <Link
        href={"/"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[20%] w-full h-full cursor-pointer"
        )}
      >
        <HomeIcon
          className={cn("w-5 h-5", pathname === "/" && "text-sky-500")}
        />
        <span className="text-xs text-center w-full mt-2">Home</span>
      </Link>
      <Link
        href={"/explore"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[20%] w-full h-full cursor-pointer "
        )}
      >
        <CompassIcon
          className={cn(
            "w-5 h-5",
            pathname === "/explore" && "text-sky-500",
            pathname === "/popular" && "text-sky-500"
          )}
        />
        <span className="text-xs text-center w-full mt-2">Trending</span>
      </Link>
      <Link
        href={"/blog"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[20%] w-full h-full cursor-pointer "
        )}
      >
        <Newspaper
          className={cn("w-5 h-5", pathname === "/blog" && "text-sky-500")}
        />
        <span className="text-xs text-center w-full mt-2">Blogs</span>
      </Link>
      <Link
        href={"/create"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[20%] w-full h-full cursor-pointer "
        )}
      >
        <PlusSquareIcon
          className={cn("w-5 h-5", pathname === "/create" && "text-sky-500")}
        />
        <span className="text-xs text-center w-full mt-2">Create</span>
      </Link>
      <Link
        // @ts-ignore
        href={user ? "/profile/" + user.user?.username : "/login"}
        className={cn(
          "flex flex-col items-center justify-center min-w-[20%] w-full h-full cursor-pointer",
          pathname.startsWith("/profile") && "text-sky-500"
        )}
      >
        <User
          className={cn(
            "w-5 h-5",
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

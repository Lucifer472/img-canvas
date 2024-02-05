"use client";
import Link from "next/link";
import { Session } from "next-auth";
import { Compass, Menu, PlusSquare, UserRound } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOutMethod } from "@/actions/auth";

export const NavLinks = ({ user }: { user: Session | null }) => {
  return (
    <div className="w-full max-w-[350px] h-full hidden md:flex items-center justify-start gap-x-6">
      <Link href={"/explore"}>
        <Compass className="h-8 w-8" />
      </Link>
      <Link href={"/create"}>
        <PlusSquare className="h-8 w-8" />
      </Link>
      <Popover>
        <PopoverTrigger className="flex items-center justify-center gap-x-2 p-2 rounded-full border border-slate-100 hover:shadow-md">
          <Menu className="w-6 h-6" />
          <UserRound className="w-6 h-6" />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-start gap-y-0 max-w-[160px] px-0">
          {user ? (
            <>
              <Link
                href={"/profile"}
                className="w-full py-2 px-2 hover:bg-emerald-100/60 font-medium"
              >
                My Account
              </Link>
              <div
                onClick={() => LogOutMethod()}
                className="w-full py-2 px-2 hover:bg-emerald-100/60 cursor-pointer"
              >
                Sing Out
              </div>
            </>
          ) : (
            <>
              <Link
                href={"/sing-up"}
                className="w-full py-2 px-2 hover:bg-emerald-100/60 font-medium"
              >
                Sign up
              </Link>
              <Link
                href={"/login"}
                className="w-full py-2 px-2 hover:bg-emerald-100/60"
              >
                Log In
              </Link>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

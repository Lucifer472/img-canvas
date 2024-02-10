"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const SearchBar = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [focus, setFocus] = useState(false);

  const router = useRouter();

  const handleSearch = () => {
    router.push("/search/" + search);
  };

  return (
    <div
      className={cn(
        "max-w-[350px] w-full h-[50px] flex items-center justify-center border-2 border-slate-200 rounded-full hover:border-sky-400 px-2 mx-2",
        focus && "border-sky-400"
      )}
    >
      <Input
        type="text"
        placeholder="search here..."
        className="border-none focus:outline-none hover:outline-none bg-transparent"
        onKeyUp={(e: any) => setSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <Button
        className="bg-sky-600 hover:bg-sky-600 rounded-full p-3"
        size={"sm"}
        variant={"ghost"}
        onClick={handleSearch}
      >
        <SearchIcon className="w-4 h-4 text-white" />
      </Button>
    </div>
  );
};

"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  baseLink: string;
  isNext: boolean;
  isBack: boolean;
  page: number;
}

export const Pagination = ({
  baseLink,
  isNext,
  isBack,
  page,
}: PaginationProps) => {
  const router = useRouter();

  return (
    <div className="w-full max-w-[340px] mx-auto my-4 border-t border-b border-slate-100 py-2">
      <div className="flex items-center justify-center w-full gap-x-2">
        <Button
          disabled={isBack}
          onClick={() => router.push(baseLink + "/" + (page - 1))}
        >
          <ArrowLeft />
        </Button>
        <Button
          variant={"link"}
          className="text-xl"
          onClick={() => router.push(baseLink + "/" + page)}
        >
          {page}
        </Button>
        <Button
          disabled={!isNext}
          onClick={() => router.push(baseLink + "/" + (page + 1))}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

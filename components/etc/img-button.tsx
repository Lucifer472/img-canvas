import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ImgBtnProps {
  href: string;
  src: string;
}

export const ImgBtn = ({ href, src }: ImgBtnProps) => {
  return (
    <Button
      variant={"outline"}
      className="border-sky-500 hover:border-sky-600 cursor-pointer"
      asChild
    >
      <Link href={href} target="_blank">
        <Image
          src={src}
          alt="Img"
          width={30}
          height={30}
          className="object-contain min-w-[30px] min-h-[30px]"
        />
      </Link>
    </Button>
  );
};
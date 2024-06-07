import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

import { convertDateFormat } from "@/lib/date";
import textSlice from "@/lib/text";

interface BlogCardProps {
  link: string;
  img: string;
  title: string;
  description: string;
  updatedAt: Date;
  category: string;
}

export const BlogCardMain = ({
  link,
  img,
  title,
  description,
  updatedAt,
  category,
}: BlogCardProps) => {
  return (
    <article className="flex sm:flex-row flex-col w-full  gap-y-3 gap-x-5">
      <Link href={link}>
        <Image
          src={img}
          width={283}
          height={159}
          className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
          style={{
            objectFit: "cover",
          }}
          alt={title}
        />
      </Link>

      <div>
        <Link
          href={"/blog/" + category}
          className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3] capitalize"
        >
          {category}
        </Link>
        <Link href={link}>
          {" "}
          <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
            {title}
          </h2>
          <p className="text-xl text-[#717275]  font-light">{description}</p>
          <div className="flex mt-4 items-center">
            <h1 className="text-xs font-medium text-[#292929] mr-1">
              {convertDateFormat(updatedAt)} --
            </h1>
            <span className="flex items-center gap-x-1 text-xs">
              <Clock className="h-3 w-3" />
              Awesome read
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export const BlogCardSecond = ({
  link,
  img,
  title,
  updatedAt,
  category,
}: BlogCardProps) => {
  return (
    <article className="pb-5 flex flex-col sm:flex-row gap-5 border-b-2 border-white">
      <Link
        href={link}
        className="relative w-full h-fit aspect-video sm:w-[80px] sm:h-[60px]"
      >
        <Image
          src={img}
          fill
          className="rounded-2xl cursor-pointer hover:opacity-90 z-1"
          style={{
            objectFit: "contain",
          }}
          alt={title}
        />
      </Link>
      <div className="text-white flex flex-col">
        <Link
          href={"/blog/" + category}
          className="py-1 px-2 mr-2 w-fit rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
        >
          {category}
        </Link>
        <Link href={link} className="flex flex-col">
          <h2 className="mt-4 text-xl font-bold hover:underline cursor-pointer tracking-tight">
            {textSlice(title, 120)}
          </h2>
          <div className="flex mt-4 items-center flex-wrap gap-2">
            <h1 className="text-xs font-medium">
              {convertDateFormat(updatedAt)} --
            </h1>
            <span className="flex items-center gap-x-1 text-xs">
              <Clock className="h-3 w-3" />
              Excellent read
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export const BlogCardExtra = ({
  link,
  img,
  title,
  updatedAt,
  category,
}: BlogCardProps) => {
  return (
    <div className="flex sm:flex-row flex-col w-full gap-y-3 gap-x-5 ">
      <Link href={link}>
        <Image
          src={img}
          width={283}
          height={159}
          className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[283px] sm:h-[159px]"
          style={{
            objectFit: "cover",
          }}
          alt={title}
        />
      </Link>

      <div>
        <Link
          href={"/blog/" + category}
          className="py-1 px-2 mr-2 w-fit rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
        >
          {category}
        </Link>
        <Link href={link}>
          <h2 className=" mt-4 text-xl font-bold">{title}</h2>
          <div className="flex mt-4 items-center">
            <h1 className="text-xs font-medium text-[#292929] mr-1">
              {convertDateFormat(updatedAt)} --
            </h1>
            <span className="flex items-center gap-x-1 text-xs">
              <Clock className="h-3 w-3" />
              Best read
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const BlogCardFinal = ({
  link,
  img,
  title,
  description,
  updatedAt,
  category,
}: BlogCardProps) => {
  return (
    <div className="flex col-span-1 flex-col mb-3  gap-y-3 gap-x-5 ">
      <Link href={link}>
        <Image
          src={img}
          width={283}
          height={159}
          className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[283px] sm:h-[159px]"
          style={{
            objectFit: "cover",
          }}
          alt={title}
        />
      </Link>

      <Link
        href={"/blog/" + category}
        className="py-1 px-2 mr-2 w-fit rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
      >
        {category}
      </Link>
      <Link href={link}>
        <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
          <h2 className=" text-3xl  tracking-tight font-bold  ">{title}</h2>
          <p className="text-3xl text-[#717275] font-light">{description}</p>
        </span>
        <div className="flex gap-2 ">
          <h1 className="text-xs  font-medium text-black mr-1">
            {convertDateFormat(updatedAt)} --
          </h1>
          <span className="flex items-center gap-x-1 text-xs text-black">
            <Clock className="h-3 w-3 " />2 minute read
          </span>
        </div>
      </Link>
    </div>
  );
};

import { Blog } from "@prisma/client";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BlogCardSecond } from "../blog/blog-card";
import { convertDateFormat } from "@/lib/date";

const LatestBlogs = ({ blogData }: { blogData: Blog[] }) => {
  return (
    <section className="bg-black flex flex-col gap-y-2 justify-between">
      <div className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] px-4 py-4 w-full grid sm:grid-cols-2 gap-x-2">
        <div className="sm:col-span-1 row-span-1 flex gap-2 items-start justify-center flex-col">
          <h3 className=" text-3xl my-2 text-white tracking-tight font-semibold">
            Latest from Photosframemaker
          </h3>
          <div className="col-span-1 flex flex-col relative rounded-xl w-full h-fit aspect-video sm:hidden">
            <Image
              src={blogData[0].img}
              fill
              className="rounded-xl cursor-pointer hover:opacity-85 z-1"
              style={{
                objectFit: "contain",
              }}
              alt={blogData[0].title}
            />
          </div>
          <Link
            href={"/blog/" + blogData[0].category}
            className="py-1 px-2 my-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3] capitalize"
          >
            {blogData[0].category.slice(1).replace("-", " ")}
          </Link>
          <span className="sm:block flex flex-col sm:my-4 text-white  hover:underline cursor-pointer">
            <h2 className=" text-xl my-1 tracking-tight font-semibold  ">
              {blogData[0].title}
            </h2>
            <p className="text-xl  font-light">{blogData[0].description}</p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-white mr-1">
              {convertDateFormat(blogData[0].updatedAt)} --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-white">
              <Clock className="h-3 w-3 " />
              Wow read
            </span>
          </div>
        </div>
        <div className="col-span-1 hidden sm:flex relative rounded-xl w-full h-[400px]">
          <Image
            src={blogData[0].img}
            fill
            className="rounded-xl cursor-pointer hover:opacity-85 z-1"
            style={{
              objectFit: "contain",
            }}
            alt={blogData[0].title}
          />
        </div>
      </div>
      <div className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] px-4 py-4 flex flex-col gap-5 w-full">
        {blogData.map((b) => (
          <BlogCardSecond
            category={b.category}
            description={b.description}
            img={b.img}
            link={`/blog/${b.url}`}
            title={b.title}
            updatedAt={b.updatedAt}
            key={b.id}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;

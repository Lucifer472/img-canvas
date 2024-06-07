import { Blog } from "@prisma/client";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BlogCardExtra } from "../blog/blog-card";
import { convertDateFormat } from "@/lib/date";

const TopBlogs = ({ blogData }: { blogData: Blog[] }) => {
  return (
    <section className="sm:px-2 sm:pb-4 basic-container w-full">
      <div className="grid sm:grid-cols-2 justify-center sm:gap-x-7  gap-y-7 px-4 py-4">
        <div className="flex flex-col w-full row-span-1 sm:gap-x-9 gap-y-3 sm:col-span-1">
          <Link href={`/blog/${blogData[0].url}`}>
            <Image
              src={blogData[0].img}
              width={680}
              height={1160}
              className="rounded-xl cursor-pointer "
              style={{
                objectFit: "cover",
              }}
              alt={blogData[0].title}
            />
          </Link>
          <div className="mt-2 relative  flex items-start flex-col gap-4 py-1">
            <Link
              href={"/blog/" + blogData[0].category}
              className="py-1 px-2 my-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3] capitalize"
            >
              {blogData[0].category.slice(1).replace("-", " ")}
            </Link>
            <Link href={`/blog/${blogData[0].url}`}>
              <span className="font-bold  capitalize leading-6 tracking-tight text-3xl sm:text-2xl text-[#292929]  hover:underline">
                {blogData[0].title}
              </span>
              <p className="sm:text-2xl text-3xl leading-6 font-light tracking-tight inline text-[#717275]  hover:underline ml-1">
                {blogData[0].description}
              </p>
            </Link>
            <div className="flex justify-between items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                {convertDateFormat(blogData[0].updatedAt)} --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />
                Great read
              </span>
            </div>
          </div>
        </div>
        <div className="sm:col-span-1 row-span-1  flex sm:gap-x-9 gap-y-3  flex-col">
          {blogData.map((b) => (
            <BlogCardExtra
              key={b.id}
              category={b.category}
              description={b.description}
              img={b.img}
              link={`/blog/${b.url}`}
              title={b.title}
              updatedAt={b.updatedAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBlogs;

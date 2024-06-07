import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

import TableContent from "@/components/etc/table-content";
import { convertDateFormat } from "@/lib/date";
import { Separator } from "@/components/ui/separator";
import { Blog } from "@prisma/client";

const BlogMain = ({ blog }: { blog: Blog }) => {
  const data = JSON.parse(blog.blog as string);
  const faq = JSON.parse(blog.faq as string);

  // const blogHeadings = data.blocks.filter((b: any) => b.type === "header");

  const BlogGen = dynamic(() => import("@/components/blog/blog-gen"), {
    ssr: true,
  });

  return (
    <article className="flex flex-col w-full basic-container">
      <div className="my-6 px-4 flex flex-col w-full gap-y-1">
        <div className="flex items-center justify-start">
          <Link
            href={"/blog/" + blog.category}
            className="py-1 px-2 my-1 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3] capitalize"
          >
            {blog.category.replace("-", " ")}
          </Link>
          <span className="mx-2 w-[12px] h-[1px] bg-black"></span>
          <div className="serif text-xs">
            {convertDateFormat(blog.updatedAt)}
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl lg:leading-[1.5em] font-bold text-left serif">
          {blog?.title}
        </h1>
        <div className="flex items-center justify-start">
          <Link href={"/"} className="text-xs">
            by{" "}
            <span className="font-semibold serif hover:font-bold">
              {blog.author}
            </span>
          </Link>
        </div>
      </div>
      {/* <TableContent headings={blogHeadings as any} /> */}
      <BlogGen blog={data.blocks} faq={faq} />
    </article>
  );
};

export default BlogMain;

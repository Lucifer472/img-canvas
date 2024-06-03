import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

import TableContent from "@/components/etc/table-content";
import { convertDateFormat } from "@/lib/date";
import { Separator } from "@/components/ui/separator";

const BlogMain = ({ blog, link }: { blog: any; link: string }) => {
  const data = JSON.parse(blog.blog);
  const faq = JSON.parse(blog.faq);

  const blogHeadings = data.blocks.filter((b: any) => b.type === "header");

  const BlogGen = dynamic(() => import("@/components/blog/blog-gen"), {
    ssr: true,
  });

  return (
    <article className="flex flex-col w-full ">
      <div className="padding">
        <h1 className="text-xl leading-[1.2em] sm:text-3xl md:text-4xl lg:text-6xl lg:leading-[1.5em] font-bold text-left text-gray-700">
          {blog?.title}
        </h1>
      </div>
      <div className="border-y-2 border-black padding">
        <div className="flex gap-2 sm:gap-0 items-center justify-between w-full">
          <div className="flex items-center gap-2 py-2">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 rounded-full">
              <Image
                src={blog?.authorImg}
                alt="Author"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <Link
              href={`/ihardiksadhu`}
              className="text-xs sm:text-sm hover:underline"
            >
              {blog?.author}
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href={link}
              className="hover:underline capitalize hidden xss:block sm:text-sm"
            >
              {blog?.category}
            </Link>
            <Separator orientation="vertical" />
            <time
              className="text-xs sm:text-sm"
              dateTime={convertDateFormat(blog.date)}
            >
              {convertDateFormat(blog.date)}
            </time>
          </div>
        </div>
      </div>
      <TableContent headings={blogHeadings as any} />
      <BlogGen blog={data.blocks} faq={faq} />
    </article>
  );
};

export default BlogMain;

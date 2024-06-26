"use client";
import { Blog } from "@prisma/client";
import { BlogCardMain } from "../blog/blog-card";
import { useEffect, useState } from "react";
import { fetchNewBlogs } from "@/actions/blog";

const RecentBlogs = () => {
  const [blogData, setBlogData] = useState<Blog[] | null>(null);

  useEffect(() => {
    const handleInitialData = async () => {
      const data = await fetchNewBlogs(1);

      return data;
    };

    handleInitialData().then((d) => {
      setBlogData(d);
    });
  }, []);

  if (blogData === null) return;

  const handleLoadMore = () => {
    console.log("Still Working");
  };

  return (
    <section className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] px-4 py-4  flex flex-col gap-5 w-full ">
      <h3 className="text-2xl font-bold tracking-tight">Recent Articles</h3>

      {blogData.map((b) => (
        <BlogCardMain
          key={b.id}
          category={b.category}
          description={b.description}
          img={b.img}
          link={`/blog/${b.url}`}
          title={b.title}
          updatedAt={b.updatedAt}
        />
      ))}

      <div className="flex justify-center">
        <button
          onClick={handleLoadMore}
          className="px-8 py-5 sm:w-[561px] h-[51px] items-center justify-center flex rounded-xl bg-black text-white hover:text-black"
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default RecentBlogs;

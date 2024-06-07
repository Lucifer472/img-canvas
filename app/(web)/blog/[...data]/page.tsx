import { fetchBlogByUrl, fetchBlogsByCategory } from "@/lib/blog";

import { Category } from "@/constant";
import { redirect } from "next/navigation";
import { BlogCardFinal } from "@/components/blog/blog-card";

import BlogMain from "@/components/blog/blog-main";

const BlogPage = async ({ params }: { params: { data: string[] } }) => {
  const slug = params.data[0];
  const page = parseInt(params.data[1]) | 1;

  const mainBlog = await fetchBlogByUrl(slug);

  if (mainBlog) {
    return <BlogMain blog={mainBlog} />;
  }

  const isCategory = Category.findIndex((c) => c.value === slug);

  if (isCategory === -1) {
    return redirect("/");
  }

  const blogs = await fetchBlogsByCategory(page, slug);

  // if (!blog) return <NoBlog />;

  return (
    <section className="sm:px-2 px-4 py-4 sm:basic-container max-w-[599px] w-full">
      <div className="flex flex-col justify-center pl-4 py-4 ">
        <h1 className="text-3xl font-bold tracking-tight">
          {Category[isCategory].label}
        </h1>
        <span className="text-3xl text-[#717275] tracking-normal font-light mb-3">
          Latest updates on photosframemaker, fresh from our product team.
        </span>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        {blogs?.map((b) => (
          <BlogCardFinal
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
    </section>
  );
};

export default BlogPage;

import { BlogList } from "@/components/blog/blog-list";
import NoBlog from "@/components/blog/no-blog";
import { Pagination } from "@/components/etc/pagination";
import { fetchBlogsByCategory } from "@/lib/blog";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = parseInt(searchParams.page) || 1;
  const blogs = await fetchBlogsByCategory(page, 15, "personal");

  if (!blogs) return <NoBlog />;

  return (
    <section className="px-2 pb-4 basic-container">
      <BlogList data={blogs} title="All Blogs" isCat />
      <Pagination
        baseLink="/blog/personal?page="
        isBack={page < 2}
        isNext={blogs.length > 14}
        page={page}
      />
    </section>
  );
};

export default BlogPage;

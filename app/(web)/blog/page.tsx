import NoBlog from "@/components/blog/no-blog";
import LatestBlogs from "@/components/views/latest-blog";
import RecentBlogs from "@/components/views/recent-blog";
import TopBlogs from "@/components/views/top-blog";
import { fetchBlogs } from "@/lib/blog";

const BlogPage = async () => {
  const blogs = await fetchBlogs(1, 15);

  if (!blogs) return <NoBlog />;

  return (
    <>
      {/* <BlogList data={blogs} title="All Blogs" isCat />
      <Pagination
        baseLink="/blog?page="
        isBack={page < 2}
        isNext={blogs.length > 14}
        page={page}
      /> */}
      <TopBlogs blogData={blogs} />
      <LatestBlogs blogData={blogs} />
      <RecentBlogs blogData={blogs} />
    </>
  );
};

export default BlogPage;

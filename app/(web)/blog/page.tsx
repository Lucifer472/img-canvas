import NoBlog from "@/components/blog/no-blog";
import LatestBlogs from "@/components/views/latest-blog";
import RecentBlogs from "@/components/views/recent-blog";
import TopBlogs from "@/components/views/top-blog";
import { fetchBlogs } from "@/lib/blog";

const BlogPage = async () => {
  const blogs = await fetchBlogs(1, 8);

  if (!blogs) return <NoBlog />;

  const blog1 = blogs.splice(0, 4);
  const blog2 = blogs.splice(4, 8);

  return (
    <>
      <TopBlogs blogData={blog1} />
      <LatestBlogs blogData={blog2} />
      <RecentBlogs />
    </>
  );
};

export default BlogPage;

import { BlogList } from "@/components/blog/blog-list";
import BlogMain from "@/components/blog/blog-main";
import NoBlog from "@/components/blog/no-blog";
import { Separator } from "@/components/ui/separator";
import { fetchBlogByUrl, fetchBlogs } from "@/lib/blog";

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const blog = await fetchBlogByUrl(slug);

  const blogs = await fetchBlogs(1, 4);

  if (!blog) return <NoBlog />;

  return (
    <section className="px-2 py-4 basic-container">
      <BlogMain blog={blog} link="/" />
      <Separator className="my-2" />
      <BlogList data={blogs} title="Related Posts" />
    </section>
  );
};

export default BlogPage;

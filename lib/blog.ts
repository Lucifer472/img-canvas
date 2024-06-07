import db from "./db";

export const addBlog = async (
  author: string,
  authorImg: string,
  blog: string,
  category: string,
  description: string,
  img: string,
  keywords: string,
  title: string,
  url: string,
  faq: string
) => {
  try {
    const data = await db.blog.create({
      data: {
        author,

        blog,
        category,
        description,
        img,
        keywords,
        title,
        url,
        faq,
      },
    });

    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchBlogs = async (page: number, limit: number | undefined) => {
  try {
    const data = await db.blog.findMany({
      skip: (page - 1) * 15,
      take: limit || 15,
    });

    if (!data || data.length < 1) return null;

    return data;
  } catch (error) {
    return null;
  }
};

export const fetchBlogsByCategory = async (
  page: number,
  category: string,
  limit?: number
) => {
  try {
    const data = await db.blog.findMany({
      skip: (page - 1) * 15,
      take: limit || 15,
      where: {
        category,
      },
    });

    if (!data || data.length < 1) return null;

    return data;
  } catch (error) {
    return null;
  }
};

export const fetchBlogByUrl = async (url: string) => {
  try {
    const data = await db.blog.findUnique({
      where: {
        url,
      },
    });

    if (!data) return null;

    return data;
  } catch (error) {
    return null;
  }
};

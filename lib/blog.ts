import { BlogSchema } from "@/schema";
import * as z from "zod";
import db from "./db";

export const addBlog = async (
  value: z.infer<typeof BlogSchema>,
  author: string,
  url: string,
  img: string
) => {
  try {
    const data = await db.blog.create({
      data: {
        title: value.title,
        url: url,
        img: img,
        keywords: value.keywords,
        description: value.desc,
        blog: value.blog,
        faq: value.faq,
        category: value.category,
        author,
      },
    });

    if (!data) return { error: "Something went wrong" };

    return { success: data };
  } catch (error) {
    return { error: "Something went wrong!" };
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

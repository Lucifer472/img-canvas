"use server";

import * as z from "zod";
import { auth } from "@/auth";
import { addBlog, fetchBlogs } from "@/lib/blog";
import { BlogSchema } from "@/schema";

export const createBlog = async (v: z.infer<typeof BlogSchema>) => {
  const session = await auth();

  if (
    !session ||
    !session.user ||
    session.user.email !== "shubhkhatri0000@gmail.com"
  ) {
    return { error: "You are not authorized" };
  }

  const validatedFields = BlogSchema.safeParse(v);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { data } = validatedFields;
  let img = " ";
  const block = JSON.parse(data.blog);
  for (const e of block.blocks) {
    if (e.type === "image") {
      img = e.data.file.url;
      break;
    }
  }

  const blog = await addBlog(
    data,
    "shubhkhatri0000",
    data.title
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "-"),
    img
  );

  if (!blog) {
    return { error: "Unable to create blog!" };
  }

  return { success: "blog added successfully!" };
};

export const fetchNewBlogs = async (page: number) => {
  const blogs = await fetchBlogs(page + 1, 8);

  return blogs;
};

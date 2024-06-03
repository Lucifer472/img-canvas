"use server";

import * as z from "zod";
import { auth } from "@/auth";
import { addBlog } from "@/lib/blog";
import { BlogSchema } from "@/schema";

export const createBlog = async (v: z.infer<typeof BlogSchema>) => {
  const session = await auth();

  if (
    !session ||
    !session.user ||
    session.user.email !== "hardiksadhu472@gmail.com"
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
    "Hardik Sadhu",
    "https://images.drivingexamexpert.com/blogs/658bf7dce0f4b.PNG",
    data.blog,
    data.category,
    data.desc,
    img,
    data.keywords,
    data.title,
    data.title
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "-"),
    data.faq
  );

  if (!blog) {
    return { error: "Unable to create blog!" };
  }

  return { success: "blog added successfully!" };
};

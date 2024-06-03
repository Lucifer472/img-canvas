import * as z from "zod";

export const FrameSchema = z.object({
  name: z
    .string()
    .min(6, {
      message: "Name Must be 6 Latters long!",
    })
    .max(50, {
      message: "Name can only be 50 Latters Long!",
    }),
  desc: z
    .string()
    .min(6, {
      message: "Description Must be 6 Latters Long",
    })
    .max(255, {
      message: "Description is too Long!",
    }),
  frame: z.string().min(1),
  url: z.string().min(6, {
    message: "Minimum 6 latters Required",
  }),
});

export const ReportSchema = z.object({
  subject: z.string().min(1).max(50),
  email: z.string().email(),
  mess: z.string().min(50).max(255),
  campLink: z.string().min(10),
  commentId: z.number().optional(),
});

export const SingUpSchema = z.object({
  name: z.string().min(3).max(25),
  username: z.string().min(3).max(20),
  password: z.string().min(6),
  img: z.string(),
});

export const loginSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6),
});

export const BlogSchema = z.object({
  title: z.string().min(3).max(100),
  keywords: z.string().max(100),
  desc: z.string().max(100),
  category: z.string().min(1).max(50),
  blog: z.string(),
  faq: z.string(),
});

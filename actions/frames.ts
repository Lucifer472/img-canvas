"use server";

import * as z from "zod";
import { addSupport, createFrameUsingId, getFrame } from "@/lib/frames";

import { auth } from "@/auth";
import { FrameSchema } from "@/schema";

export const supportAdded = async (id: string, userId: string) => {
  await addSupport(id, userId);
  return null;
};

export const createFrames = async (v: z.infer<typeof FrameSchema>) => {
  const validatedFields = FrameSchema.safeParse(v);

  if (!validatedFields.success) return { error: "Invalid Fields" };

  const data = validatedFields.data;

  if (data.frame === "/img-upload-demo.jpg") {
    return { error: "Invalid Image Upload" };
  }

  const session = await auth();

  if (!session) return { error: "Pleas login to Create Frames!" };

  if (!session.user) return { error: "Pleas login to Create Frames!" };

  const frame = await createFrameUsingId(
    data.url.toLocaleLowerCase(),
    data.frame,
    data.name,
    data.desc,
    session.user.id as string
  );

  if (!frame) return { error: "Something Went Wrong!" };

  return { success: "Frame Created Succefully!" };
};

export const checkUrl = async (url: string) => {
  const data = await getFrame(url);

  if (data) return false;

  return true;
};

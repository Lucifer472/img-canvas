"use server";

import {
  createComment,
  getCommentByFrameId,
  getCommentByUser,
} from "@/lib/comments";

export const addComment = async (
  text: string,
  userId: string,
  frameId: string,
  reCaptcha: string
) => {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  const formData = `secret=${secretKey}&response=${reCaptcha}`;

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const res1 = await res.json();
    if (res1 && res1.success && res1.score > 0.5) {
      const pastComments = await getCommentByUser(userId);

      if (pastComments && pastComments.length > 9) {
        return { error: "Comment Limit Reached" };
      }

      const data = await createComment(text, userId, frameId);
      if (!data.error || data.success) {
        return { success: data.success };
      }
      return { error: data.error ? data.error : "Error Fetching Comments" };
    }
  } catch (e) {
    return { error: e };
  }

  return { error: "Invalid Recaptcha" };
};

export const fetchComments = async (frameId: string, skip: number) => {
  const data = await getCommentByFrameId(frameId, skip);

  if (data.error || !data.success) {
    return { error: data.error ? data.error : "Error Fetching Comments" };
  }

  return { success: data.success };
};

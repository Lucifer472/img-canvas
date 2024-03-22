import db from "@/lib/db";

export const createComment = async (
  text: string,
  userId: string,
  frameId: string
) => {
  try {
    const data = await db.comment.create({
      data: {
        text,
        userId,
        frameId,
      },
    });

    if (!data) return { error: "Unable to create a comments" };

    return { success: "Comment Added Successfully!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const deleteComment = async (id: number) => {
  try {
    const data = await db.comment.delete({
      where: {
        id,
      },
    });

    if (!data) return { error: "Unable to delete Comments!" };

    return { success: data };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const getCommentByFrameId = async (frameId: string, skip: number) => {
  try {
    const data = await db.comment.findMany({
      skip,
      take: 1000,
      where: {
        frameId,
      },
      include: {
        user: true,
      },
    });

    if (!data) return { error: "Unable to get comments" };

    return { success: data };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const getCommentByUser = async (userId: string) => {
  try {
    const data = await db.comment.findMany({
      where: {
        AND: [
          { userId: userId }, // Replace userId with the actual user ID
          { createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } },
        ],
      },
      orderBy: { createdAt: "asc" }, // Order comments by createdAt in ascending order
      take: 20,
    });

    if (!data || data.length === 0) return null;

    return data;
  } catch (error) {
    return null;
  }
};

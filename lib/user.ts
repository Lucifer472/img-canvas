import db from "@/lib/db";

export const findUser = async (id: string) => {
  try {
    const data = await db.user.findUnique({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

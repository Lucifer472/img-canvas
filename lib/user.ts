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

export const findUserbyEmail = async (email: string) => {
  const data = await db.user.findUnique({
    where: {
      email,
    },
  });

  return data;
};

export const addUserName = async (email: string, username: string) => {
  const data = await db.user.update({
    where: {
      email,
    },
    data: {
      username,
    },
  });

  return data;
};

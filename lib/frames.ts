import db from "@/lib/db";

export const getLatestFrames = async () => {
  try {
    const data = await db.frames.findMany({
      take: 20,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true, // Assuming your relationship is named "user"
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getPopularFrames = async () => {
  try {
    const data = await db.frames.findMany({
      take: 8,
      orderBy: {
        supporter: "desc",
      },
      include: {
        user: true, // Assuming your relationship is named "user"
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getFrame = async (id: string) => {
  try {
    const data = await db.frames.findUnique({
      where: {
        id,
      },
      include: {
        user: true, // Assuming your relationship is named "user"
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const addSupport = async (
  id: string,
  userId: string,
  prevSup: number,
  prevSupd: number
) => {
  await db.frames.update({
    where: {
      id,
    },
    data: {
      supporter: prevSup + 1,
    },
  });

  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      supported: prevSupd + 1,
    },
  });
};

export const findFrames = async (skip: number, search: string) => {
  try {
    const data = await db.frames.findMany({
      skip: skip,
      take: 8,
      orderBy: {
        supporter: "desc",
      },
      where: {
        name: {
          contains: search,
        },
      },
      include: {
        user: true, // Assuming your relationship is named "user"
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

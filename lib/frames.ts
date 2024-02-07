import db from "@/lib/db";

export const getLatestFrames = async (skip: number) => {
  try {
    const data = await db.frames.findMany({
      skip: skip,
      take: 15,
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

export const getPopularFrames = async (skip: number) => {
  try {
    const data = await db.frames.findMany({
      skip: skip,
      take: 15,
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
      take: 15,
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

export const findFramesWithId = async (skip: number, userName: string) => {
  try {
    const data = await db.frames.findMany({
      skip: skip,
      take: 16,
      orderBy: {
        supporter: "desc",
      },
      where: {
        user: {
          username: userName,
        },
      },
      include: {
        user: true,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const createFrameUsingId = async (
  id: string,
  img: string,
  name: string,
  desc: string,
  userId: string
) => {
  try {
    const data = await db.frames.create({
      data: {
        id,
        img,
        name,
        desc,
        userId,
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

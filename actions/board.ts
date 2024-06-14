"use server";

import db from "@/lib/db";

export const addNameAndNumber = async (name: string, number: string) => {
  await db.yogBoardData.create({
    data: {
      name,
      number,
    },
  });

  return true;
};

"use server";

import { addSupport } from "@/lib/frames";

export const supportAdded = async (
  id: string,
  userId: string,
  prevSup: number,
  prevSupd: number
) => {
  await addSupport(id, userId, prevSup, prevSupd);
  return null;
};

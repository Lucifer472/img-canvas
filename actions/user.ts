"use server";
import * as z from "zod";
import { SingUpSchema } from "@/schema";
import bcrypt from "bcryptjs";

import { addNewUser, findUserbyUsername } from "@/lib/user";

export const registerAction = async (v: z.infer<typeof SingUpSchema>) => {
  const validatedFields = SingUpSchema.safeParse(v);

  if (!validatedFields.success) return { error: "Invalid Fields" };

  const isExists = await findUserbyUsername(validatedFields.data.username);

  if (isExists) return { error: "Username Alredy Exists!" };

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  const user = await addNewUser(
    validatedFields.data.img,
    hashedPassword,
    validatedFields.data.name,
    validatedFields.data.username
  );

  if (!user) return { error: "Something Went Wrong!" };

  return { sucess: "User Created Successfully" };
};

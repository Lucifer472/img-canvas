"use server";

import { signIn, signOut } from "@/auth";

export const LoginMethod = async (
  provider: "google" | "facebook" | "credentials",
  username?: string,
  password?: string
) => {
  if (provider === "credentials") {
    await signIn("credentials", {
      username,
      password,
      redirectTo: "/",
    });
  } else {
    await signIn(provider, {
      redirect: true,
      redirectTo: "/",
    });
  }
  return;
};

export const LogOutMethod = async () => {
  await signOut();
  return;
};

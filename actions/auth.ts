"use server";

import { signIn, signOut } from "@/auth";

export const LoginMethod = async (provider: "google" | "facebook") => {
  await signIn("google", {
    redirect: true,
    redirectTo: "/",
  });
  return;
};

export const LogOutMethod = async () => {
  await signOut();
  return;
};

import type { NextAuthConfig } from "next-auth";

import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import { loginSchema } from "@/schema";
import { findUserbyUsername } from "@/lib/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);

        if (!validateFields.success) return null;

        const { username, password } = validateFields.data;

        const user = await findUserbyUsername(username);
        if (!user) return null;

        if (!user.emailVerified) return null;

        const isPasswordMatch = await bcrypt.compare(
          password,
          user.password as string
        );

        if (!isPasswordMatch) return null;
        return user;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
} satisfies NextAuthConfig;

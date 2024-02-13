import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import db from "@/lib/db";

import { addUserName, findUserbyEmail } from "@/lib/user";
import { extractUsername } from "@/lib/utils";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user }) {
      const mainUser = await findUserbyEmail(user.email as string);
      if (mainUser) {
        if (mainUser.username) {
          return true;
        }
        const username = extractUsername(mainUser.email);

        await addUserName(mainUser.email, username);
        return true;
      }
      return false;
    },
    // @ts-ignore
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});

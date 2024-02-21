import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/auth.config";
import db from "@/lib/db";

import { addUserName, findUser, findUserbyEmail } from "@/lib/user";
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
    // @ts-ignore
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;

        const mainUser = await findUser(session.user.id as string);
        if (mainUser) {
          if (!mainUser.username) {
            const username = extractUsername(mainUser.email);
            const data = await addUserName(mainUser.email, username);
            // @ts-ignore
            session.user.username = data.username;
            return session;
          }
          // @ts-ignore
          session.user.username = mainUser.username;
        }
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  trustHost: true,
  ...authConfig,
});

import NextAuth from "next-auth";

import authConfig from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  if (nextUrl.pathname.startsWith("/create")) {
    if (isLoggedIn) {
      return null;
    }

    return Response.redirect(new URL("/login", nextUrl));
  }

  if (
    nextUrl.pathname.startsWith("/login") ||
    nextUrl.pathname.startsWith("/sign-up")
  ) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
  }
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

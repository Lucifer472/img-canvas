import { LoginModal } from "@/components/auth/login-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page | Photos Frame Maker",
};

export const dynamic = "force-static";

const LoginPage = () => {
  return (
    <div className="w-full my-6 min-h-[600px] flex items-center justify-center">
      <LoginModal
        label="Sign in to your account"
        text="Don't have an account?"
        link="/sign-up"
        linkLabel="Create an Account"
      />
    </div>
  );
};

export default LoginPage;

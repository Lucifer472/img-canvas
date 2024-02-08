import { LoginModal } from "@/components/auth/login-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page | Photos Frame Maker",
};

export const dynamic = "force-static";

const LoginPage = () => {
  return (
    <div className="w-full h-screen min-h-[600px] flex items-center justify-center">
      <LoginModal
        label="Sign in to your account"
        text="Don't have an account?"
        link="/sing-up"
        linkLabel="Sing Up"
      />
    </div>
  );
};

export default LoginPage;

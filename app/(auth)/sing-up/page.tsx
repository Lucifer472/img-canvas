import { LoginModal } from "@/components/auth/login-form";

export const dynamic = "force-static";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sing Up | Photos Frame Maker",
};

const SingUpPage = () => {
  return (
    <div className="w-full h-screen min-h-[600px] flex items-center justify-center">
      <LoginModal
        label="Sing up For an Account"
        text="Alredy Have an Account?"
        link="/login"
        linkLabel="Sing In"
      />
    </div>
  );
};

export default SingUpPage;

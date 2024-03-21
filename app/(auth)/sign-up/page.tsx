import type { Metadata } from "next";
import { RegisterModal } from "@/components/auth/sing-form";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Sing Up | Photos Frame Maker",
};

const SingUpPage = () => {
  return (
    <div className="w-full my-8 min-h-[600px] flex items-center justify-center">
      <RegisterModal
        label="Sing up For an Account"
        text="Already Have an Account?"
        link="/login"
        linkLabel="Login to Account!"
      />
    </div>
  );
};

export default SingUpPage;

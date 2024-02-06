import { LoginModal } from "@/components/auth/login-form";

export const revalidate = 360000;

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

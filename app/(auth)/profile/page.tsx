import { redirect } from "next/navigation";

export const dynamic = "force-static";

const ProfilePage = () => {
  redirect("/");
};

export default ProfilePage;

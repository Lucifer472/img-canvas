import { redirect } from "next/navigation";

export const revalidate = 3600000;

const ProfilePage = () => {
  redirect("/");
};

export default ProfilePage;

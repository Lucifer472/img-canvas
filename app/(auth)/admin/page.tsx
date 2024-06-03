import { redirect } from "next/navigation";
import { auth } from "@/auth";

import BlogForm from "@/components/auth/blog-form";
import FormWrapper from "@/components/views/form-wrapper";

const AdminPage = async () => {
  const session = await auth();

  if (session) {
    if (session.user?.email !== "hardiksadhu472@gmail.com") {
      return redirect("/");
    }
  } else {
    return redirect("/");
  }

  return (
    <div className="w-full h-full flex items-center justify-center my-6">
      <div className="global-container flex items-center justify-center w-full min-h-screen py-6">
        <FormWrapper
          title="Add New Blog"
          label="This is form is for adding New Blog!"
        >
          <BlogForm />
        </FormWrapper>
      </div>
    </div>
  );
};

export default AdminPage;

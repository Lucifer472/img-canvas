"use client";

import { deleteFrame } from "@/actions/frames";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteFrameForm = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteFrame(id).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }

      if (res.success) {
        toast.success("Frame Removed Successfully");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    });
  };

  return (
    <Button variant={"destructive"} onClick={handleDelete}>
      Delete Frame
    </Button>
  );
};

export default DeleteFrameForm;

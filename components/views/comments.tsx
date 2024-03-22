"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Poppins } from "next/font/google";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { MessageSquareMoreIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { addComment, fetchComments } from "@/actions/comments";
import Image from "next/image";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "../ui/button";
import { ReportCampaign } from "../etc/Report-Camp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface comment {
  id: number;
  text: string;
  createdAt: Date;
  userId: string;
  frameId: string;
  user: {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    username: string | null;
    password: string | null;
    image: string;
    supported: number;
    createdAt: Date;
  };
}

const Comments = () => {
  const [data, setData] = useState<null | comment[]>(null);
  const [update, setUpdate] = useState(0);

  const [pending, setPending] = useState(false);

  const params = useParams();
  const session = useSession();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    reCaptcha: string
  ) => {
    e.preventDefault();
    if (!pending) {
      setPending(true);

      if (
        session.status === "authenticated" &&
        params.frameId &&
        session.data.user
      ) {
        const formData = new FormData(e.target as any);

        addComment(
          formData.get("comment") as string,
          session.data.user.id as string,
          params.frameId as string,
          reCaptcha
        ).then((res) => {
          if (res.error) {
            toast.error(res.error as string);
          }
          if (res.success) {
            setUpdate((prev) => prev + 1);
            toast.success("Comment added Successfully!");
          }
          setPending(false);
          // @ts-ignore
          e.target.reset();
        });
      } else {
        toast.error("Please Login to comment!");
        setPending(false);
      }
    }
  };

  const verifyRecaptcha = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      toast.error("Failed!");
      return;
    }
    executeRecaptcha("comment_form").then((gReCaptchaToken) => {
      handleSubmit(e, gReCaptchaToken);
    });
  };

  useEffect(() => {
    if (params.frameId) {
      fetchComments(params.frameId as string, 0).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }

        if (res.success && res.success.length > 0) {
          setData((prev) =>
            prev && prev !== res.success
              ? [...prev, ...res.success]
              : [...res.success]
          );
          setData(res.success);
        }
      });
    }
  }, [params.frameId, update]);

  return (
    <div className="w-[320px] xxs:w-[360px] xss:w-[450px] sm:w-[520px] min-h-[620px] mx-auto bg-white rounded-md border border-slate-100 shadow-sm">
      <div className="w-full h-[620px] flex flex-col items-start justify-start overflow-hidden">
        <div className="w-full flex items-center justify-between px-1 xxs:px-2 xss:px-4 sm:px-6 py-4">
          <h2 className={cn("font-[600] text-lg", poppins.className)}>
            Comment
          </h2>
          <span className="px-4 py-2 bg-gray-100 rounded-md">
            {data ? data.length : 0} Comments
          </span>
        </div>
        <div className="w-full flex items-center justify-center px-2 sm:px-4 py-2 bg-gray-100 border-y border-slate-300">
          <form
            onSubmit={verifyRecaptcha}
            id="comment_form"
            className="px-2 py-4 bg-white w-full flex items-center justify-center rounded-md outline-[1px] hover:outline hover:outline-sky-500"
          >
            <input
              type="text"
              className="focus:outline-none w-full px-2"
              placeholder="Add a comment..."
              id="comment"
              name="comment"
            />
            <button type="submit" className="text-gray-600 font-medium pr-2">
              Send
            </button>
          </form>
        </div>
        {!data ? (
          <div className="w-full h-full flex items-center justify-center flex-col gap-y-4">
            <MessageSquareMoreIcon className="w-16 h-16 text-gray-600" />
            <h2>No Comments</h2>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-start gap-y-2 overflow-y-scroll py-4">
            {data.map((data) => (
              <div
                className="w-full flex items-start justify-start px-2 xss:px-4 sm:px-6 py-2"
                key={data.id}
              >
                <div className="mr-4 relative">
                  <Image
                    src={data.user.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain", borderRadius: "9999px" }}
                  />
                </div>
                <div className="overflow-hidden w-full flex flex-col ">
                  <div className="mb-1 flex items-center justify-between">
                    <h2 className={cn("text-sm font-[600]", poppins.className)}>
                      {data.user.name}
                    </h2>
                    <span className="text-xs text-slate-500">
                      {data.createdAt.toDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="break-words text-sm ">
                      {data.text.toString()}
                    </span>
                  </div>
                  <ReportCampaign label="report" commentId={data.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;

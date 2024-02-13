"use client";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { LoginMethod } from "@/actions/auth";
import { registerAction } from "@/actions/user";

import { SingUpSchema } from "@/schema";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

interface RegisterModalProps {
  label: string;
  text: string;
  linkLabel: string;
  link: string;
}

export const RegisterModal = ({
  label,
  text,
  linkLabel,
  link,
}: RegisterModalProps) => {
  const searchParams = useSearchParams();
  const [file, setFile] = useState<any>(null);
  const [img, setImg] = useState("/img-upload-demo.jpg");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SingUpSchema>>({
    resolver: zodResolver(SingUpSchema),
    defaultValues: {
      img: img,
      name: "",
      password: "",
      username: "",
    },
  });

  const formData = useMemo(() => {
    const data = new FormData();
    data.append("folder", "frames");
    if (file) {
      data.append("img", file);
    }
    return data;
  }, [file]);

  const router = useRouter();

  useEffect(() => {
    if (file) {
      startTransition(() => {
        fetch("https://img.missiongujarat.in/api/upload", {
          method: "POST",
          body: formData,
        }).then((res) => {
          if (res.ok) {
            res.text().then((res) => {
              setImg(res);
              form.setValue("img", res);
            });
          } else {
            toast.error("Something Went Wrong!");
          }
        });
      });
    }
  }, [file, formData, form]);

  useEffect(() => {
    if (searchParams.get("error")) {
      toast.error("Something went Wrong");
    }
  }, [searchParams]);

  const handleGoogle = () => {
    LoginMethod("google");
  };

  const handleFacebook = () => {
    LoginMethod("facebook");
  };

  const onSubmit = (v: z.infer<typeof SingUpSchema>) => {
    registerAction(v).then((res) => {
      if (res.sucess) {
        toast.success("User Added!");
        router.push("/login");
      }

      if (res.error) {
        toast.error(res.error);
        if (res.error === "Username Alredy Exists!") {
          form.setError("username", {
            message: "Username Alredy Exist!",
            type: "required",
          });
        }
      }
    });
  };

  return (
    <div className="max-w-[350px] w-full h-full py-6 px-4 rounded-md bg-white shadow-lg border border-slate-100">
      <div className="w-full h-full flex items-start justify-start flex-col gap-y-2">
        <Link href={"/"} className="w-full flex items-center justify-center">
          <Image src={"/logo.png"} alt="Logo" width={180} height={180} />
        </Link>
        <h1
          className={cn(
            "text-sm text-center text-muted-foreground w-full",
            poppins.className
          )}
        >
          {label}
        </h1>
        <div className="w-full h-full flex flex-col gap-y-4 mt-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-start flex-col gap-y-4 my-2 w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="w-full"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Username:</FormLabel>
                    <Input
                      placeholder="exmpleName"
                      {...field}
                      className="w-full"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password:</FormLabel>
                    <Input
                      placeholder="******"
                      type="password"
                      {...field}
                      className="w-full"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full">
                <span className="block my-2">Profile Upload:</span>
                <Input
                  type="file"
                  id="frame-img"
                  name="frame-img"
                  disabled={isPending}
                  className="hidden"
                  onChange={(e: any) => setFile(e.target.files?.[0])}
                />
                <FormLabel
                  htmlFor="frame-img"
                  className="w-[250px] h-[250px] mx-auto relative block rounded-md border-2 border-slate-100 cursor-pointer"
                >
                  <Image src={img} alt="Demo" fill className="rounded-md" />
                </FormLabel>
              </div>
              <Button
                disabled={isPending}
                size={"lg"}
                className="w-full"
                type="submit"
              >
                Create Account
              </Button>
            </form>
          </Form>
          <div className="flex items-center justify-center w-full">
            <div className="w-full h-[1px] bg-slate-200"></div>
            <span className="px-2">OR</span>
            <div className="w-full h-[1px] bg-slate-200"></div>
          </div>
          <Button
            variant={"outline"}
            size={"lg"}
            className="w-full min-h-[50px]"
            onClick={handleGoogle}
          >
            <Image src={"/google.svg"} alt="Google" width={20} height={20} />
            <span className={cn("text-sm ml-4", poppins.className)}>
              Continue with Google
            </span>
          </Button>
          <Button
            onClick={handleFacebook}
            variant={"outline"}
            size={"lg"}
            className="w-full min-h-[50px]"
          >
            <Image src={"/facebook.svg"} alt="Google" width={25} height={25} />
            <span className={cn("text-sm ml-4", poppins.className)}>
              Continue with Facebook
            </span>
          </Button>
        </div>
        <p className="w-full flex items-center justify-center gap-2">
          {text}
          <Link
            href={link}
            className="text-sky-500 hover:border-b border-sky-500"
          >
            {linkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
};

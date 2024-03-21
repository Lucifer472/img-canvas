"use client";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { useSearchParams } from "next/navigation";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

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

import { loginSchema } from "@/schema";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

interface LoginModalProps {
  label: string;
  text: string;
  linkLabel: string;
  link: string;
}

export const LoginModal = ({
  label,
  text,
  linkLabel,
  link,
}: LoginModalProps) => {
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });

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

  const onSubmit = (v: z.infer<typeof loginSchema>) => {
    LoginMethod("credentials", v.username, v.password);
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
              <Button
                disabled={isPending}
                size={"lg"}
                className="w-full"
                type="submit"
              >
                Login
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
        <Button
          onClick={handleFacebook}
          variant={"outline"}
          size={"lg"}
          asChild
        >
          <Link href={link} className="w-full min-h-[50px]">
            {linkLabel}
          </Link>
        </Button>
      </div>
    </div>
  );
};

"use client";

import { useEffect, useState, useTransition } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FlagIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { ReportSchema } from "@/schema";
import { sentReportCampaign } from "@/actions/mail";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface ReportCampaignProps {
  label?: string;
  commentId?: number;
}

export const ReportCampaign = ({ label, commentId }: ReportCampaignProps) => {
  const [isPending, startTransition] = useTransition();
  const [campId, setCampId] = useState<null | string>(null);

  const params = useParams();

  useEffect(() => {
    if (params.frameId) {
      setCampId(params.frameId as string);
    }
  }, []);

  const form = useForm<z.infer<typeof ReportSchema>>({
    resolver: zodResolver(ReportSchema),
    defaultValues: {
      email: "",
      mess: "",
      subject: commentId ? "remove comment" : "",
      campLink: "",
      commentId: commentId,
    },
  });

  useEffect(() => {
    if (campId) {
      form.setValue("campLink", `https://photosframemaker.com/${campId}`);
    }
  }, [campId, form]);

  const onSubmit = (v: z.infer<typeof ReportSchema>) => {
    startTransition(() => {
      sentReportCampaign(
        v.subject,
        v.email,
        v.mess,
        v.campLink,
        v.commentId
      ).then((res) => {
        if (res.error) {
          toast.error(res.error as string);
        }

        if (res.success) {
          toast.success("Email Sent Successfully!");
          form.reset();
        }
      });
    });
  };

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex items-center gap-x-1 hover:underline",
          label && "text-xs font-medium"
        )}
      >
        {!label && <FlagIcon />}
        {label ? label : "Report Campaign"}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={cn(poppins.className, "text-2xl")}>
            Why do you report this campaign?
          </DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col items-start w-full gap-y-2 py-4"
            >
              <FormField
                name="subject"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label className="w-full text-left block">Subject</Label>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={commentId !== undefined}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Reason behind Report" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Plagiarism">Plagiarism</SelectItem>
                        <SelectItem value="Sensitive Content">
                          Sensitive Content
                        </SelectItem>
                        <SelectItem value="Dangerous Content">
                          Dangerous Content
                        </SelectItem>
                        <SelectItem value="Spam Content">
                          Spam Content
                        </SelectItem>
                        <SelectItem value="Remove Campaign">
                          Remove Campaign
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label className="w-full text-left block">Email:</Label>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="Please Enter Email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="mess"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label className="w-full text-left block">Message:</Label>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="w-full resize-none"
                        placeholder="Message Here...."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="campLink"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Label className="w-full text-left block">Link:</Label>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder="Link of the Campaign"
                        defaultValue={
                          campId ? `https://photosframemaker.com/${campId}` : ""
                        }
                        disabled={commentId !== undefined}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size={"lg"} disabled={isPending}>
                Submit
              </Button>
            </form>
          </Form>
          <DialogDescription>
            Community Guidelines protect the privacy of reporter&apos;s
            identity.{" "}
            <Link href="/terms" className="text-sky-500 hover:underline">
              Read More
            </Link>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

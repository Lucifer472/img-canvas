"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { debounce } from "lodash";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { checkUrl, createFrames } from "@/actions/frames";
import { FormError, FormSuccess } from "../message";
import { FrameSchema } from "@/schema";

export const FrameForm = () => {
  const [img, setImg] = useState("/img-upload-demo.jpg");
  const [file, setFile] = useState<null | File>(null);

  const [isPending, startTranstion] = useTransition();

  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);

  const [urlError, setUrlError] = useState<null | string>(null);

  const formData = useMemo(() => {
    const data = new FormData();
    data.append("folder", "frames");
    if (file) {
      data.append("img", file);
    }
    return data;
  }, [file]);

  const form = useForm<z.infer<typeof FrameSchema>>({
    resolver: zodResolver(FrameSchema),
    defaultValues: { name: "", desc: "", frame: "", url: "" },
  });

  const debounceUrlChecker = debounce(() => {
    checkUrl(form.getValues("url")).then((res) => {
      if (!res) {
        setUrlError("Url Alredy Exists!");
      }
      if (res) {
        setUrlError(null);
      }
    });
  }, 1000);

  useEffect(() => {
    if (file) {
      fetch("https://img.missiongujarat.in/api/upload", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.ok) {
          res.text().then((res) => {
            setImg(res);
            form.setValue("frame", res);
          });
        } else {
          setError("Something Went Wrong!");
        }
      });
    }
  }, [file, formData, form]);

  const handleUrlChange = (e: any) => {
    // Replace characters that are not alphanumeric, spaces, or dashes with an empty string
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9 -]/g, "");

    // Convert consecutive spaces to a single dash
    const formattedValue = sanitizedValue.replace(/\s+/g, "-");

    form.setValue("url", formattedValue);

    debounceUrlChecker();
  };

  const onSubmit = (values: z.infer<typeof FrameSchema>) => {
    if (urlError) return null;
    startTranstion(() => {
      createFrames(values).then((res) => {
        setError(null);
        setSuccess(null);
        if (res.error) {
          setError(res.error);
        }

        if (res.success) {
          setSuccess(res.success);
        }
      });
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 mt-4 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description:</FormLabel>
              <FormControl>
                <Input {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Url:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={handleUrlChange}
                  className="w-full"
                />
              </FormControl>
              <FormMessage>{urlError}</FormMessage>
            </FormItem>
          )}
        />
        <div className="w-full">
          <span>Frame Upload:</span>
          <Input
            type="file"
            id="frame-img"
            name="frame-img"
            className="hidden"
            onChange={(e: any) => setFile(e.target.files?.[0])}
          />
          <Label
            htmlFor="frame-img"
            className="w-[250px] h-[250px] mx-auto relative block rounded-md border-2 border-slate-100 cursor-pointer"
          >
            <Image src={img} alt="Demo" fill className="rounded-md" />
          </Label>
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <div className="w-full flex justify-center">
          <Button type="submit" size={"lg"} disabled={isPending}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

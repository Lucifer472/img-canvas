"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import download from "downloadjs";
import Image from "next/image";
import { toJpeg, toPng } from "html-to-image";
import { Poppins } from "next/font/google";
import { CopyIcon, RotateCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import Loader from "@/components/loader";
import { UserImage } from "@/components/views/user-image";
import { ImgBtn } from "@/components/etc/img-button";

import { supportAdded } from "@/actions/frames";

import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";
import { addNameAndNumber } from "@/actions/board";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface ImageViewProps {
  imgName: string;
  img: string;
  id: string;
  userId: string;
  userName?: string | null;
}

enum STEP {
  "UPLOAD",
  "PREVIEW",
  "DOWNLOAD",
  "SHARE",
  "BACK",
}

export const ImageView = ({
  imgName,
  img,
  id,
  userId,
  userName,
}: ImageViewProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [reduceOp, setReduceOp] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const [userImg, setUserImg] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [isPending, setIsPending] = useState(false);
  const [isGetting, setIsGetting] = useState(false);
  const [loading, setLoading] = useState(true);

  const [step, setStep] = useState<STEP>(0);

  const [name, setName] = useState("");

  const mainDiv = useRef<HTMLDivElement | null>(null);

  const handleKeyPress = (event: any) => {
    // Allow control characters like backspace
    const isControlChar =
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight";
    if (!/[0-9]/.test(event.key) && !isControlChar) {
      event.preventDefault();
    }
  };

  const formData = useMemo(() => {
    const data = new FormData();
    data.append("folder", "users");
    if (file) {
      data.append("img", file);
    }
    return data;
  }, [file]);

  useEffect(() => {
    const picture = new window.Image();
    picture.src = img;

    const handleImageLoad = () => {
      setImageSize({
        width: picture.width,
        height: picture.height,
      });
    };

    picture.onload = handleImageLoad;

    // Clean up the event listener when the component unmounts
    return () => {
      picture.onload = null;
    };
  }, [img]);

  useEffect(() => {
    if (file) {
      setIsPending(true);
      fetch("https://img.missiongujarat.in/api/upload", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.ok) {
          res.text().then((res) => {
            setUserImg(res);
            setStep(1);
          });
        } else {
          toast.error("Something Went Wrong!");
        }
        setIsPending(false);
      });
    }
  }, [file, formData]);

  const handlePreviewDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    addNameAndNumber(
      formData.get("name") as string,
      formData.get("number") as string
    ).then(() => {
      setStep(2);
      if (step === 2) {
        setLoading(false);
      } else {
        setLoading(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 6500);
    });
  };

  const handleDownload = () => {
    setIsGetting(true);
    if (mainDiv.current) {
      toJpeg(mainDiv.current, {
        includeQueryParams: true,
        canvasWidth: imageSize.width,
        canvasHeight: imageSize.height,
        quality: 1,
        pixelRatio: 1,
      }).then((dataUrl) => {
        supportAdded(id, userId).then((res) => {
          download(dataUrl, imgName + ".jpg");
          setStep(3);
          setIsGetting(false);
        });
      });
    }
  };

  const resetState = () => {
    setStep(0);
    setUserImg(null);
    setFile(null);
    setImageSize({ width: 0, height: 0 });
    setRotation(0);
    setName("");
  };

  const handleCopy = () => {
    if (navigator) {
      navigator.clipboard
        .writeText(
          `Hi, I'm ${name}, I'm ready to support ${imgName}! (Mention 3 of your friends or more here)                                              
Get yourself this Photoframemaker at https://photosframemaker.com/${id} Don't forget to follow @photoframemaker for further updates! #photosframemaker`
        )
        .then(() => {
          toast.success("Text Copied!");
        });
    } else {
      toast.error("Something Went Wrong!");
    }
  };

  const textShare = `Hi, I'm ${name}, I'm ready to support this campaign! (Mention 3 of your friends or more here) Get yourself this Photoframemaker at https://photosframemaker.com/${id} Don't forget to follow @photoframemaker for further updates! #photosframemaker`;

  return (
    <div className="w-[320px] xxs:w-[360px] xss:w-[450px] sm:w-[520px] h-full mx-auto">
      <Loader isOpen={isPending} />
      <div className="bg-white rounded-lg w-full h-full">
        <div className="flex flex-col w-full h-full py-4 px-2">
          <div className="border-2 border-dashed border-border ">
            {step !== 3 && step !== 4 && (
              <div className="relative overflow-hidden" ref={mainDiv}>
                <p className="absolute text-[8px] xss:text-xs font-medium top-[64.9%] left-[6%] z-50">
                  {name}
                </p>
                <Image
                  src={img}
                  alt="Image"
                  width={500}
                  height={500}
                  className={cn(
                    "object-contain pointer-events-none relative z-10",
                    isDragging && "opacity-50",
                    reduceOp && "opacity-50"
                  )}
                />
                <UserImage
                  img={userImg}
                  isDragging={isDragging}
                  rotation={rotation}
                  setIsDragging={setIsDragging}
                  setReduceOp={setReduceOp}
                />
              </div>
            )}
            {step === 3 && (
              <div className="w-full min-h-[450px] bg-white flex flex-col gap-y-2 px-4 py-6">
                <p className="flex items-center justify-start gap-x-1 text-sm">
                  <span className="whitespace-nowrap">Hi, I&apos;m</span>
                  {name}
                  <span>, I&apos;m ready to support {imgName}</span>
                </p>
                <p className="text-sm w-full mt-8">
                  (Mention 3 of your friends or more here)
                  <br />
                  <br />
                  Get yourself this Photoframemaker at{" "}
                  {`photosframemaker.com/${id}`}
                  <br />
                  <br />
                  Don&apos;t forget to follow @photoframemaker for further
                  updates!
                  <br />
                  <br />
                  #photoframemaker
                </p>
              </div>
            )}
            {step === 4 && (
              <div className="relative overflow-hidden">
                <Image
                  src={"/bg-share.png"}
                  alt="Image"
                  width={500}
                  height={500}
                  className={cn(
                    "object-contain pointer-events-none relative z-10",
                    isDragging && "opacity-50",
                    reduceOp && "opacity-50"
                  )}
                />
                <Image
                  src={img}
                  alt="Image"
                  fill
                  className="object-contain scale-50"
                />
              </div>
            )}
          </div>
          {step === 0 && (
            <Button className="mt-4 bg-sky-500 hover:bg-sky-600" asChild>
              <Label htmlFor="userImg">
                Upload Image
                <Input
                  disabled={userImg === null ? false : true}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="userImg"
                  name="userImg"
                  onChange={(e: any) => setFile(e.target.files?.[0])}
                />
              </Label>
            </Button>
          )}
          {step === 1 && (
            <>
              <div className="w-full flex items-start mt-4 justify-center gap-x-2">
                <Button
                  className="bg-sky-500 hover:bg-sky-600 cursor-pointer w-full py-2"
                  onClick={() => setRotation((prev) => prev + 5)}
                >
                  <RotateCw className="mr-1" />
                  <span> Rotate Image</span>
                </Button>
              </div>
              <form
                className="flex flex-col gap-2 w-full mt-2"
                onSubmit={handlePreviewDownload}
              >
                <Input
                  type="text"
                  minLength={3}
                  required
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="You're Name"
                />
                <Input
                  type="text"
                  accept="[0-9]*"
                  onKeyDown={handleKeyPress}
                  required
                  name="number"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  maxLength={10}
                  minLength={10}
                  inputMode="numeric"
                />
                <Button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600"
                  size={"lg"}
                >
                  Download Image
                </Button>
              </form>
            </>
          )}
          {step === 3 && (
            <div className="w-full flex flex-col items-start mt-4 justify-center gap-y-2">
              <div className="w-full flex items-start justify-center gap-x-2">
                <ImgBtn
                  src="/wp-2.svg"
                  href={"https://api.whatsapp.com/send/?text=" + textShare}
                />
                <ImgBtn
                  src="/facebook.svg"
                  href={
                    "https://www.facebook.com/sharer.php?u=" + `${textShare}`
                  }
                />
                <ImgBtn
                  src="/x.svg"
                  href={"https://twitter.com/intent/tweet?text=" + textShare}
                />
                <Button
                  variant={"outline"}
                  className="border-sky-500 hover:border-sky-600 cursor-pointer"
                  onClick={handleCopy}
                >
                  <CopyIcon className="text-sky-500 hover:text-sky-600" />
                  <span className="text-sky-500 hover:text-sky-600">Copy</span>
                </Button>
              </div>
              <div className="w-full flex items-center justify-start gap-x-2">
                <Button
                  variant={"outline"}
                  className="border-sky-500 hover:border-sky-600 text-sky-500 hover:text-sky-600 cursor-pointer"
                  onClick={() => setStep(1)}
                >
                  Go Back
                </Button>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 cursor-pointer w-full"
                  onClick={() => setStep(4)}
                >
                  DONE
                </Button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="w-full flex items-center justify-center gap-x-2">
              <Button
                className="mt-4 text-sky-500 hover:text-sky-600 border-sky-500 hover:border-sky-600 "
                size={"lg"}
                onClick={() => setStep(3)}
                variant={"outline"}
              >
                Go Back
              </Button>
              <Button
                className="mt-4 bg-sky-500 hover:bg-sky-600 w-full"
                size={"lg"}
                onClick={resetState}
              >
                Done
              </Button>
            </div>
          )}
        </div>
        <div
          className={cn(
            "w-full h-full min-w-[100vw] min-h-[100vh] z-40 top-0 left-0 bg-black bg-opacity-70",
            step === 2 ? "fixed" : "hidden"
          )}
        ></div>
        <div
          className={cn(
            "px-2 py-4 bg-white flex flex-col gap-y-4 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md z-50",
            step === 2 ? "fixed" : "hidden"
          )}
        >
          <div className="w-[300px] h-[300px] flex items-center justify-center">
            {loading ? (
              <ClipLoader
                size={120}
                cssOverride={{
                  borderWidth: "10px",
                }}
              />
            ) : (
              <p className="w-[70%] text-center text-xl">
                You are Photo is Ready Download Now
              </p>
            )}
          </div>
          <div
            className={cn(
              "relative w-full my-1 h-[80px] overflow-hidden",
              loading ? "block" : "hidden"
            )}
          >
            <div className="w-full my-1 h-[80px] bg-sky-100  absolute top-0 left-0"></div>
            <div className="w-full my-1 h-[80px] bg-sky-500 z-10 absolute top-0 left-[-100%] download-animation"></div>
            <span
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-xl text-white w-full text-center",
                poppins.className
              )}
            >
              Processing Photo...
            </span>
            <span
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-xl text-clip w-full text-center",
                poppins.className
              )}
            >
              Processing Photo...
            </span>
          </div>
          {!loading && (
            <div className="w-full flex items-center justify-center gap-x-2">
              <Button
                className="mt-4 bg-sky-500 hover:bg-sky-600"
                size={"lg"}
                onClick={() => setStep(1)}
              >
                Go Back
              </Button>
              <Button
                className="mt-4 bg-sky-500 hover:bg-sky-600"
                size={"lg"}
                onClick={handleDownload}
                disabled={isGetting}
              >
                Download Image
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

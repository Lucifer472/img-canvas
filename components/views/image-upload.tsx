"use client";
import { useEffect, useMemo, useState, useTransition } from "react";

import { Poppins } from "next/font/google";
import { CameraIcon, RotateCw } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import ImageCanvas from "@/components/views/imge-canvas";

import { supportAdded } from "@/actions/frames";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface ImageViewProps {
  img: string;
  id: string;
  userId: string;
  prevSup: number;
  prevSupd: number;
}

export const ImageView = ({
  img,
  id,
  userId,
  prevSup,
  prevSupd,
}: ImageViewProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [userImg, setUserImg] = useState<string | null>(null);
  const [cw, setCw] = useState(0);
  const [finalFile, setFinalFile] = useState<any>(null);

  const [isHd, setIsHd] = useState(false);

  const [size, setSize] = useState(1);

  // scale and posting
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [frameImage, setFrameImage] = useState<HTMLImageElement | null>(null);
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);

  const [isPending, startTransition] = useTransition();

  const formData = useMemo(() => {
    return new FormData();
  }, []);

  useEffect(() => {
    const picture1 = new window.Image();
    picture1.crossOrigin = "anonymous";
    picture1.src = img;
    picture1.onload = () => {
      setFrameImage(picture1);
    };

    const picture2 = new window.Image();
    picture2.crossOrigin = "anonymous";
    picture2.src = userImg as string;
    picture2.onload = () => {
      setUserImage(picture2);
    };
  }, [img, userImg]);

  useEffect(() => {
    if (file) {
      if (formData.get("img")) {
        formData.delete("img");
      }
      formData.append("img", file);
      formData.append("folder", "frames");
    }

    if (formData.get("img")) {
      startTransition(() => {
        fetch("https://img.missiongujarat.in/api/upload", {
          method: "POST",
          body: formData,
        }).then((res) => {
          if (res.status === 200) {
            res.text().then((r) => {
              setUserImg(r);
            });
          }

          if (res.status === 400) {
            res.text().then((r) => {
              if (r === "File Alredy Exist") {
                setUserImg(
                  `https://img.missiongujarat.in/i/frames/${file?.name}`
                );
              }
            });
          }
        });
      });
    }
  }, [file, formData]);

  useEffect(() => {
    if (finalFile) {
      if (finalFile.width < 500) {
        if (finalFile.width < 400) {
          setSize(2);
        }

        if (finalFile.width < 400 && isHd) {
          setSize(4);
        }
        if (isHd) {
          setSize(2.5);
        }

        setSize(1.65);
      } else if (isHd) {
        setSize(2);
      } else {
        setSize(1);
      }
    }
  }, [finalFile, isHd]);

  const handleDownload = () => {
    supportAdded(id, userId, prevSup, prevSupd).then(() => {
      if (finalFile) {
        // Create a new canvas with double the width
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = finalFile.width * size;
        tempCanvas.height = finalFile.height * size;

        // Redraw the content on the new canvas
        const ctx = tempCanvas.getContext("2d");

        if (tempCanvas && ctx) {
          ctx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);

          if (userImage) {
            let drawWidth = userImage.width * scale * size;
            let drawHeight = userImage.height * scale * size;

            // Save the current state of the context
            ctx.save();

            // Translate the context to the center of the image
            ctx.translate(
              position.x * size + drawWidth / 2,
              position.y * size + drawHeight / 2
            );

            // Rotate the context by 15 degrees
            ctx.rotate((cw * Math.PI) / 180);

            // Draw the rotated user image with calculated dimensions and position
            ctx.drawImage(
              userImage,
              -drawWidth / 2,
              -drawHeight / 2,
              drawWidth,
              drawHeight
            );

            // Restore the context to its original state
            ctx.restore();
          }
          // Draw the frame image
          if (frameImage) {
            ctx.drawImage(
              frameImage,
              0,
              0,
              tempCanvas.width,
              tempCanvas.height
            );
          }

          const dataURL = tempCanvas.toDataURL("image/png");

          // Create a link element
          const link = document.createElement("a");

          // Set the href attribute to the data URL
          link.href = dataURL;

          // Set the download attribute to the desired filename
          link.download = file?.name || "1.png";

          // Trigger a click event on the link to start the download
          link.click();
        }
      }
    });
  };

  return (
    <div className="flex flex-col gap-y-2 xss:gap-y-6 items-center bg-white min-w-[320px] xss:w-[480px] sm:w-[540px] h-full rounded-md py-4 px-1 xss:py-8 xss:px-4">
      <ImageCanvas
        cw={cw}
        setFile={setFinalFile}
        img1={img}
        img2={userImg}
        scale={scale}
        position={position}
        setPosition={setPosition}
        setScale={setScale}
      />
      <Input
        className="hidden"
        type="file"
        id="upload-img"
        disabled={isPending}
        onChange={(e: any) => setFile(e.target?.files[0])}
      />
      {!file ? (
        <Button disabled={isPending} asChild>
          <Label
            htmlFor="upload-img"
            className="flex items-center justify-center gap-x-2 py-6 px-4 w-[320px] xss:w-[460px] sm:w-[490px] mt-4"
          >
            <CameraIcon />
            <span className={cn("text-xl", poppins.className)}>
              Choose A Photo
            </span>
          </Label>
        </Button>
      ) : (
        <div className="flex flex-col items-start justify-start w-full gap-y-4">
          <div className="w-full flex flex-col xss:flex-row gap-y-2 xss:gap-y-0 items-center justify-evenly">
            <Button
              className="flex items-center gap-1 min-w-[22%] h-[45px] bg-emerald-100 hover:bg-emerald-200 text-emerald-600"
              size={"lg"}
              onClick={() => setCw((prev) => prev + 15)}
            >
              <RotateCw />
              <span>Roate</span>
            </Button>
            <Label
              className="flex items-center justify-center gap-x-2 h-[45px] p-4 rounded-md bg-emerald-100 hover:bg-emerald-200  text-emerald-600"
              htmlFor="hd"
              onClick={() => setIsHd(true)}
            >
              HD Image Qulity
              <Checkbox id="hd" checked={isHd} />
            </Label>
            <Label
              className="flex items-center justify-center gap-x-2 h-[45px] p-4 rounded-md bg-emerald-100 hover:bg-emerald-200  text-emerald-600"
              htmlFor="removeW"
            >
              Remove Watermark
              <Checkbox id="removeW" />
            </Label>
          </div>
          <div className="w-full flex items-center justify-start gap-x-2">
            <Label
              htmlFor="upload-img"
              onClick={() => setIsHd(false)}
              className="bg-white p-4 rounded-md border-2 border-emerald-600 cursor-pointer"
            >
              <CameraIcon className="w-6 h-6 text-emerald-600" />
            </Label>
            <Button
              size={"lg"}
              className={cn(
                "w-full min-h-[60px] text-white bg-emerald-600 hover:bg-emerald-800 text-xl",
                poppins.className
              )}
              onClick={() => handleDownload()}
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import textSlice from "@/lib/text";
import { convertDateFormat } from "@/lib/date";

interface BlogCardProps {
  link: string;
  img: any;
  title: string;
  authorImg: any;
  authorName: String | null | undefined;
  updatedAt: Date;
}

export const BlogCard = ({
  link,
  img,
  title,
  authorImg,
  authorName,
  updatedAt,
}: BlogCardProps) => {
  return (
    <Link href={link} className="py-2">
      <article className="flex flex-col items-start w-full max-w-[300px] relative p-2 [&>h2]:hover:underline hover:shadow border rounded-md">
        <div className="relative w-full h-[200px]">
          <Image src={img} alt="Fallback" fill style={{ objectFit: "cover" }} />
        </div>
        <h2 className="font-medium h-[60px] mt-2 mb-2">
          {textSlice(title, 60)}
        </h2>
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex gap-1 items-center">
            <div className="relative w-6 h-6 rounded-full">
              <Image
                src={authorImg as string}
                alt="Author"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-xs font-light text-sky-700">{`By ${authorName}`}</span>
          </div>
          <time className="text-xs font-light text-sky-700">
            {convertDateFormat(updatedAt)}
          </time>
        </div>
      </article>
    </Link>
  );
};

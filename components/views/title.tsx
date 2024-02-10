import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface TitleProps {
  title: string;
  link?: string;
  linkText?: string;
  label?: string;
}

export const Title = ({ title, link, linkText, label }: TitleProps) => {
  return (
    <div className="w-full flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-4 my-2 md:my-4">
      <div className="w-full flex items-center justify-between">
        <h1
          className={cn("text-xl sm:text-2xl md:text-3xl", poppins.className)}
        >
          {title}
        </h1>
        {link && linkText && (
          <Link
            href={link}
            className={cn(
              "text-sm sm:text-normal md:text-lg text-sky-600",
              poppins.className
            )}
          >
            {linkText}
          </Link>
        )}
      </div>
      {label && (
        <p className="text-muted-foreground text-xs sm:text-sm md:text-normal">
          {label}
        </p>
      )}
    </div>
  );
};

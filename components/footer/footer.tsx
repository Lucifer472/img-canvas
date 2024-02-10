import { footerLinks } from "@/constant";
import { Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-full max-h-[290px] w-full py-8 bg-sky-50">
      <div className="w-full h-full flex flex-col gap-y-6 items-center">
        <Link
          href={"/"}
          className="flex flex-col items-center gap-y-2 hover:bg-sky-100 p-6 rounded-lg"
        >
          <span className="text-sky-600">Made With</span>
          <Image src={"/logo.png"} alt="Logo" width={140} height={30}></Image>
        </Link>
        <ul className="flex items-center justify-center gap-x-4 flex-wrap">
          <li>
            <Link
              href={"/"}
              className="flex items-center gap-x-1 hover:underline"
            >
              <Flag />
              Report Campaign
            </Link>
          </li>
          {footerLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.link} className="hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

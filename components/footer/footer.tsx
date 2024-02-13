import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constant";

import { ReportCampain } from "@/components/etc/Report-Camp";

const Footer = () => {
  return (
    <footer className="h-full max-h-[290px] w-full py-8 bg-sky-50 mb-[80px] md:mb-0">
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
            <ReportCampain />
          </li>
          {footerLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.link} className="hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <span>Made in Bharat 🇮🇳 with ❤️ Love</span>
      </div>
    </footer>
  );
};

export default Footer;

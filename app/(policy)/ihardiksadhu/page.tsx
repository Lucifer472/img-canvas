import { BlogList } from "@/components/blog/blog-list";
import { fetchBlogs } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

const AuthorPage = async () => {
  const blogs = await fetchBlogs(1, 4);
  return (
    <div className="basic-container w-full bg-white">
      <div className="flex flex-col items-center justify-center gap-6 w-full h-full min-h-[600px]">
        <figure className="relative h-32 w-32 rounded-full">
          <Image
            src="/asd"
            alt="hardik asdhu"
            fill
            className="rounded-full h-full w-full object-cover"
          />
        </figure>
        <span className="text-lg font-medium text-black">Hardik Sadhu</span>
        <div className="flex items-center justify-center gap-1">
          <span className="text-gray-500 text-sm">Male</span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <time className="text-gray-500 text-sm">04/07/2000</time>
        </div>
        <p className="max-w-[600px] text-center text-gray-600">ANy</p>
        <div className="flex items-center justify-center gap-2">
          <Link href="/" target="_blank">
            <Image
              src={"/asset/social/facebook.svg"}
              alt="Facebook"
              width={50}
              height={50}
              className="object-cover"
            />
          </Link>
          <Link href="/" target="_blank">
            <Image
              src={"/asset/social/link.svg"}
              alt="Facebook"
              width={50}
              height={50}
              className="object-cover"
            />
          </Link>
          <Link href={"/"} target="_blank">
            <Image
              src={"/asset/social/inst.svg"}
              alt="Facebook"
              width={50}
              height={50}
              className="object-cover"
            />
          </Link>
          <Link href="/" target="_blank">
            <Image
              src={"/asset/social/x.svg"}
              alt="Facebook"
              width={50}
              height={50}
              className="object-cover"
            />
          </Link>
        </div>
      </div>
      <BlogList data={blogs} title="Related Posts" />
    </div>
  );
};

export default AuthorPage;

import { fetchBlogByUrl, fetchBlogs, fetchBlogsByCategory } from "@/lib/blog";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Category } from "@/constant";
import { redirect } from "next/navigation";

const BlogPage = async ({ params }: { params: { data: string[] } }) => {
  const slug = params.data[0];
  const page = parseInt(params.data[1]) | 1;

  const mainBlog = await fetchBlogByUrl(slug);

  if (mainBlog) {
    return <h2>Blog Exists</h2>;
  }

  const isCategory = Category.findIndex((c) => c.value === slug);

  if (isCategory === -1) {
    return redirect("/");
  }

  const blogs = await fetchBlogsByCategory(page, slug);

  // if (!blog) return <NoBlog />;

  return (
    <section className="sm:px-2 px-4 py-4 sm:basic-container max-w-[599px] w-full">
      {/* <BlogMain blog={blog} link="/" />
      <Separator className="my-2" />
      <BlogList data={blogs} title="Related Posts" /> */}
      <div className="flex flex-col justify-center pl-4 py-4 ">
        <h1 className="text-3xl font-bold tracking-tight">Whats New</h1>
        <span className="text-3xl text-[#717275] tracking-normal font-light mb-3">
          Latest updates on Twibbonize, fresh from our product team.
        </span>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col  gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col  gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col  gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        <div className="flex col-span-1 flex-col mb-3  gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col  gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3  justify-center gap-x-28 pl-4 py-4">
        <div className="flex col-span-1 flex-col mb-3 gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>

        <div className="flex col-span-1 flex-col mb-3  gap-y-3 gap-x-5 ">
          <Image
            src="/Twibbonize.jpg"
            width={283}
            height={159}
            className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[432px] sm:h-[243px]"
            style={{
              objectFit: "cover",
            }}
            alt="twibbnosi"
          />

          <div>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHATS NEW
            </a>
          </div>
          <span className="block  mt-4 sm:my-4 text-black  hover:underline hover:decoration-[#a3a3a3] cursor-pointer">
            <h2 className=" text-3xl  tracking-tight font-bold  ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-3xl text-[#717275] font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
          </span>
          <div className="flex gap-2 ">
            <h1 className="text-xs  font-medium text-black mr-1">
              September 25, 2023 --
            </h1>
            <span className="flex items-center gap-x-1 text-xs text-black">
              <Clock className="h-3 w-3 " />2 minute read
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

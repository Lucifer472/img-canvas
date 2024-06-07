import { BlogList } from "@/components/blog/blog-list";
import NoBlog from "@/components/blog/no-blog";
import { Pagination } from "@/components/etc/pagination";
import { fetchBlogs } from "@/lib/blog";
import { Clock } from "lucide-react";
import Image from "next/image";

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = parseInt(searchParams.page) || 1;
  const blogs = await fetchBlogs(page, 15);

  // if (!blogs) return <NoBlog />;

  return (
    <>
      <section className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] w-full">
        <div className="grid sm:grid-cols-2 justify-center sm:gap-x-7  gap-y-7 px-4 py-4">
          {" "}
          <div className="flex flex-col w-full row-span-1 sm:gap-x-9 gap-y-3 sm:col-span-1">
            <Image
              src="/Twibbonize.jpg"
              width={680}
              height={1160}
              className="rounded-xl cursor-pointer "
              style={{
                objectFit: "cover",
              }}
              alt="twibbnosi"
            />
            <div className="mt-2 relative  flex items-start flex-col gap-4 py-1">
              <a
                href="#"
                className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-black"
              >
                ANNOUNCEMENT
              </a>
              <a href="#" className=" ">
                <span className="font-bold  capitalize leading-6 tracking-tight text-3xl sm:text-2xl text-[#292929]  hover:underline">
                  Subscriptions Conversion for Twibbonize Silver and Twibbonize{" "}
                  <br /> Gold Users
                </span>
                <p className="sm:text-2xl text-3xl leading-6 font-light tracking-tight inline text-[#717275]  hover:underline ml-1">
                  In response to the changes and merging of our subscription
                  services to
                </p>
              </a>
              <div className="flex justify-between items-center">
                <h1 className="text-xs font-medium text-[#292929] mr-1">
                  August 4, 2023 --
                </h1>
                <span className="flex items-center gap-x-1 text-xs">
                  <Clock className="h-3 w-3" />1 minute read
                </span>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 row-span-1  flex sm:gap-x-9 gap-y-3  flex-col">
            <div className="flex sm:flex-row flex-col w-full gap-y-3 gap-x-5 ">
              <Image
                src="/MentalHealth.jpg"
                width={283}
                height={159}
                className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[283px] sm:h-[159px]"
                style={{
                  objectFit: "cover",
                }}
                alt="twibbnosi"
              />

              <div>
                <a
                  href="#"
                  className="rounded-xl bg-[#e9e9eb] text-black py-1 px-2 hover:text-white hover:bg-black text-xs font-semibold"
                >
                  USE CASE
                </a>
                <h2 className=" mt-4 text-xl font-bold">
                  World Mental Health Day: The Importance of Awareness
                </h2>
                <div className="flex mt-4 items-center">
                  <h1 className="text-xs font-medium text-[#292929] mr-1">
                    August 4, 2023 --
                  </h1>
                  <span className="flex items-center gap-x-1 text-xs">
                    <Clock className="h-3 w-3" />1 minute read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full gap-y-3 gap-x-5">
              <Image
                src="/Twibbonize.jpg"
                width={283}
                height={159}
                className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[283px] sm:h-[159px]"
                style={{
                  objectFit: "cover",
                }}
                alt="twibbnosi"
              />

              <div>
                <a
                  href="#"
                  className="rounded-xl bg-[#e9e9eb] text-black py-1 px-2 hover:text-white hover:bg-black text-xs font-semibold"
                >
                  USE CASE
                </a>
                <h2 className=" mt-4 text-xl font-bold">
                  World Mental Health Day: The Importance of Awareness
                </h2>
                <div className="flex mt-4 items-center">
                  <h1 className="text-xs font-medium text-[#292929] mr-1">
                    August 4, 2023 --
                  </h1>
                  <span className="flex items-center gap-y-3 gap-x-1 text-xs">
                    <Clock className="h-3 w-3" />1 minute read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full gap-y-3 gap-x-5">
              <Image
                src="/Twibbonize.jpg"
                width={283}
                height={159}
                className="rounded-xl w-full cursor-pointer  max-w-[599px] sm:w-[283px] sm:h-[159px]"
                style={{
                  objectFit: "cover",
                }}
                alt="twibbnosi"
              />

              <div>
                <a
                  href="#"
                  className="rounded-xl bg-[#e9e9eb] text-black py-1 px-2 hover:text-white hover:bg-black text-xs font-semibold"
                >
                  USE CASE
                </a>
                <h2 className=" mt-4 text-xl font-bold">
                  World Mental Health Day: The Importance of Awareness
                </h2>
                <div className="flex mt-4 items-center">
                  <h1 className="text-xs font-medium text-[#292929] mr-1">
                    August 4, 2023 --
                  </h1>
                  <span className="flex items-center gap-x-1 text-xs">
                    <Clock className="h-3 w-3" />1 minute read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <BlogList data={blogs} title="All Blogs" isCat />
      <Pagination
        baseLink="/blog?page="
        isBack={page < 2}
        isNext={blogs.length > 14}
        page={page}
      /> */}
      </section>
      <section className="bg-black flex flex-col gap-7 justify-between">
        <div className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] px-4 py-4 w-full grid sm:grid-cols-2   gap-x-6">
          <div className="sm:col-span-1 row-span-1 flex gap-3 sm:items-start items-center justify-center flex-col ">
            <h3 className=" text-3xl my-7 text-white tracking-tight font-semibold">
              Latest from Twibbonize
            </h3>
            <div className=" col-span-1 flex flex-col relative rounded-xl w-[352px] sm:w-full  h-[206px] sm:hidden sm:h-[490px] ">
              <Image
                src="/Twibbonize.jpg"
                fill
                className="rounded-xl cursor-pointer hover:opacity-85 z-1"
                style={{
                  objectFit: "contain",
                }}
                alt="twibbnosi"
              />
            </div>
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
                WHAT'S NEW
              </a>
            </div>
            <span className="sm:block  flex flex-col mt-4 sm:my-4 text-white  hover:underline cursor-pointer">
              <h2 className=" text-xl  tracking-tight font-semibold  ">
                Just Launched: Add-Ons for Creators to Enhance Campaign
                Experiences!
              </h2>
              <p className="text-xl  font-light">
                Hello, Twibbonize creators, we come bearing some fantastic news!
              </p>
            </span>
            <div className="flex gap-2 ">
              <h1 className="text-xs  font-medium text-white mr-1">
                September 25, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs text-white">
                <Clock className="h-3 w-3 " />2 minute read
              </span>
            </div>
          </div>
          <div className=" col-span-1 hidden  sm:flex flex-col relative rounded-xl w-[352px] sm:w-full  h-[206px] sm:h-[490px] ">
            <Image
              src="/Twibbonize.jpg"
              fill
              className="rounded-xl cursor-pointer hover:opacity-85 z-1"
              style={{
                objectFit: "contain",
              }}
              alt="twibbnosi"
            />
          </div>
        </div>
        <div className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] px-4 py-4 flex flex-col gap-5 w-full">
          <div className="mb-5 flex flex-row gap-5">
            <div className="  relative w-full sm:w-[80px] h-[60px] ">
              <Image
                src="/Twibbonize.jpg"
                width={80}
                height={60}
                className="rounded-2xl cursor-pointer  hover:opacity-90 z-1"
                style={{
                  objectFit: "contain",
                }}
                alt="twibbnosi"
              />
            </div>
            <div className="  text-white ">
              <a
                href="#"
                className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
              >
                ANNOUNCEMENT
              </a>
              <h2 className=" mt-4 text-xl font-bold hover:underline cursor-pointer tracking-tight">
                Important Announcement: Module Store and Campaign Creation
                Process Adjustments
              </h2>
              <div className="flex mt-4 items-center">
                <h1 className="text-xs font-medium  mr-1 ">
                  August 4, 2023 --
                </h1>
                <span className="flex items-center gap-x-1 text-xs">
                  <Clock className="h-3 w-3" />1 minute read
                </span>
              </div>
            </div>
          </div>
          <div className="text-white border border-solid border-[#e9ecef] w-full "></div>

          <div className="mb-5 flex flex-row gap-5">
            <div className=" relative w-full sm:w-[80px] h-[60px] ">
              <Image
                src="/Twibbonize.jpg"
                width={80}
                height={60}
                className="rounded-2xl cursor-pointer hover:opacity-90 z-1"
                style={{
                  objectFit: "contain",
                }}
                alt="twibbnosi"
              />
            </div>
            <div className="  text-white ">
              <a
                href="#"
                className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
              >
                ANNOUNCEMENT
              </a>
              <h2 className=" mt-4 text-xl font-bold hover:underline cursor-pointer tracking-tight">
                Important Announcement: Module Store and Campaign Creation
                Process Adjustments
              </h2>
              <div className="flex mt-4 items-center">
                <h1 className="text-xs font-medium  mr-1 ">
                  August 4, 2023 --
                </h1>
                <span className="flex items-center gap-x-1 text-xs">
                  <Clock className="h-3 w-3" />1 minute read
                </span>
              </div>
            </div>
          </div>
          <div className="text-white border border-solid border-[#e9ecef] w-full"></div>

          <div className="mb-5 flex flex-row gap-5">
            <div className=" relative w-full sm:w-[80px] h-[60px] ">
              <Image
                src="/Twibbonize.jpg"
                width={80}
                height={60}
                className="rounded-2xl cursor-pointer hover:opacity-90 z-1"
                style={{
                  objectFit: "contain",
                }}
                alt="twibbnosi"
              />
            </div>
            <div className="  text-white ">
              <a
                href="#"
                className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
              >
                ANNOUNCEMENT
              </a>
              <h2 className=" mt-4 text-xl font-bold hover:underline cursor-pointer tracking-tight">
                Important Announcement: Module Store and Campaign Creation
                Process Adjustments
              </h2>
              <div className="flex mt-4 items-center">
                <h1 className="text-xs font-medium  mr-1 ">
                  August 4, 2023 --
                </h1>
                <span className="flex items-center gap-x-1 text-xs">
                  <Clock className="h-3 w-3" />1 minute read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:px-2 sm:pb-4  sm:basic-container max-w-[599px] px-4 py-4  flex flex-col gap-5 w-full ">
        <h3 className="text-2xl font-bold tracking-tight">Recent Articles</h3>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full  gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col w-full   gap-y-3 gap-x-5 ">
          <Image
            src="/girl.jpg"
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
              className="py-1 px-2 mr-2 rounded-2xl bg-[#e9e9eb] tracking-wider text-black text-xs hover:text-white hover:bg-[#a3a3a3]"
            >
              ANNOUNCEMENT
            </a>
            <a
              href="#"
              className="py-1 px-2 rounded-2xl bg-[#e9e9eb] tracking-tight text-black text-xs"
            >
              WHAT'S NEW
            </a>
            <h2 className=" text-xl text-black tracking-tight font-semibold  mt-3 ">
              Just Launched: Add-Ons for Creators to Enhance Campaign
              Experiences!
            </h2>
            <p className="text-xl text-[#717275]  font-light">
              Hello, Twibbonize creators, we come bearing some fantastic news!
            </p>
            <div className="flex mt-4 items-center">
              <h1 className="text-xs font-medium text-[#292929] mr-1">
                August 4, 2023 --
              </h1>
              <span className="flex items-center gap-x-1 text-xs">
                <Clock className="h-3 w-3" />1 minute read
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="px-8 py-5 hover:bg-[#d7cfb8] sm:w-[561px] h-[51px] items-center justify-center flex rounded-xl bg-black text-white hover:text-black">
            LOAD MORE
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

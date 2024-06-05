import { FrameCard } from "@/components/views/frame-card";
import { Title } from "@/components/views/title";

import { getPopularFrames } from "@/lib/frames";
import Link from "next/link";

export const revalidate = 360;

const HomePage = async () => {
  const frameData = await getPopularFrames(0, 4);
  const frameData2 = await getPopularFrames(4, 4);

  if (!frameData || !frameData2) return null;

  const jsonLd = `
  {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home Page",
        "item": "https://photosframemaker.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Explore Page",
        "item": "https://photosframemaker.com/explore"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "Popular Page",
        "item": "https://photosframemaker.com/popular"
      },{
        "@type": "ListItem",
        "position": 4,
        "name": "Help Page",
        "item": "https://photosframemaker.com/help"
      },{
        "@type": "ListItem",
        "position": 5,
        "name": "Login Page",
        "item": "https://photosframemaker.com/login"
      },{
        "@type": "ListItem",
        "position": 6,
        "name": "Terms & Condition Page",
        "item": "https://photosframemaker.com/terms"
      }]
    }
  `;

  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      ></script>
      <div className="w-full bg-no-repeat h-[800px] 2xl:h-[1000px] md:grid md:grid-cols-2 bg-cover bg-[url('/asset/home-2.webp')] md:bg-[url('/asset/home-1.webp')]">
        <div className="flex flex-col items-end justify-center col-span-1 px-4">
          <h1 className="text-5xl text-center md:text-left sm:text-6xl md:text-7xl font-[900] text-color-gradient 2xl:w-1/2">
            Where Campaign Meets You
          </h1>
          <h2 className="text-color-gradient text-center md:text-left text-base sm:text-lg mt-2 sm:mt-6  2xl:w-1/2">
            Photosframemaker helps you bring every idea, aspiration, and
            creativity to life.
          </h2>
          <div className="flex items-center justify-start gap-x-4 mt-2 sm:mt-6 w-full 2xl:w-1/2">
            <Link
              href={"/explore"}
              className="py-4 w-full flex items-center justify-center bg-sky-600 hover:bg-sky-700 rounded-md font-bold text-white"
            >
              Explore Campaign
            </Link>
            <Link
              href={"/create"}
              className="py-4 w-full flex items-center justify-center bg-white rounded-md text-sky-600 border font-bold border-sky-600"
            >
              Create Campaign
            </Link>
          </div>
        </div>
        <div className="col-span-1 hidden md:flex"></div>
      </div>
      <div className="px-2 w-full basic-container">
        <Title
          label=" Campaigns that gained the most supports in the last 24 hours."
          link="/popular"
          linkText="View All"
          title=" Trending in India "
        />
        <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
          {frameData.map((f) => (
            <FrameCard
              key={f.id}
              id={f.id}
              createdAt={f.createdAt}
              img={f.img}
              name={f.name}
              supporter={f.supporter}
              nameUser={f.user.name as string}
              profilePic={f.user.image}
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-[#EAF7F6] py-6 flex items-center justify-center basic-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-4 mt-6">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="home-create__video pe-none"
          >
            <source src="/asset/home-vid.mp4" type="video/mp4" />
          </video>
          <div className="flex flex-col md:items-start items-center justify-center md:justify-start gap-y-2 mb-6">
            <h2 className="text-5xl text-center md:text-left sm:text-6xl md:text-7xl font-[900] text-color-gradient">
              {" "}
              Make It for Everything{" "}
            </h2>
            <h2 className="text-color-gradient text-center md:text-left text-base sm:text-lg mt-6">
              No matter what you want to do, from movements tackling huge,
              serious causes—to anything just for fun. We can help you turn it
              into something big.
            </h2>
            <Link
              href={"/create"}
              className="py-4 px-16 flex items-center justify-center font-bold bg-sky-600 hover:bg-sky-700 rounded-md text-white mt-6"
            >
              Create Your Campaign
            </Link>
          </div>
        </div>
      </div>
      <div className="px-2 w-full basic-container">
        <Title
          label="The most popular and viral campaigns on Photosframemaker"
          link="/popular"
          linkText="View All"
          title=" Most Popular"
        />
        <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
          {frameData2.map((f) => (
            <FrameCard
              key={f.id}
              id={f.id}
              createdAt={f.createdAt}
              img={f.img}
              name={f.name}
              supporter={f.supporter}
              nameUser={f.user.name as string}
              profilePic={f.user.image}
            />
          ))}
        </div>
      </div>
      {/* <Title
        label=" Campaigns that gained the most supports in the last 24 hours."
        link="/popular"
        linkText="View All"
        title=" Trending in India "
      />
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
        {frameData.map((f) => (
          <FrameCard
            key={f.id}
            id={f.id}
            createdAt={f.createdAt}
            img={f.img}
            name={f.name}
            supporter={f.supporter}
            nameUser={f.user.name as string}
            profilePic={f.user.image}
          />
        ))}
      </div> */}
    </section>
  );
};

export default HomePage;
import { findAllFrameUrl } from "@/lib/frames";
import { MetadataRoute } from "next";

export const revalidate = 300000;

// @ts-ignore
export default async function sitemap(): MetadataRoute.Sitemap {
  const url = "https://photosframemaker.com/";

  const frames = await findAllFrameUrl();

  const data: any = [];

  if (frames) {
    frames.forEach((f) => {
      data.push({
        url: url + encodeURIComponent(f.id),
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.9,
      });
    });
  }

  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url + "terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: url + "privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url + "help",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url + "explore",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url + "popular",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url + "create",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: url + "login",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...data,
  ];
}

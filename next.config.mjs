/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.missiongujarat.in",
        pathname: "/i/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;

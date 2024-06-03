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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        pathname: "/platform/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.drivingexamexpert.com",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.missiongujarat.in",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;

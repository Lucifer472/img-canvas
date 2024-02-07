import { getFrame } from "@/lib/frames";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { frameId: string };
}): Promise<Metadata> {
  const frame = await getFrame(params.frameId);

  const newTitle = frame?.name + " | Photos Frame Maker";

  return {
    title: newTitle,
  };
}

export default function FrameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

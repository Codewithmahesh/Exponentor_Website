import type { Metadata } from "next";
import XsitePage from "@/components/xsite/XsitePage";

export const metadata: Metadata = {
  title: "XSITE — Real Estate Cost Intelligence | Exponentor",
  description:
    "Track every rupee against every milestone in real time. Never discover a budget overrun too late again.",
};

export default function Page() {
  return <XsitePage />;
}

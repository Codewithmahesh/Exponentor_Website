import type { Metadata } from "next";
import JemsPage from "@/components/jems/JemsPage";

export const metadata: Metadata = {
  title: "JEMS — Student × Industry Trust Platform | Exponentor",
  description:
    "JEMS means trust. Bridging students and industry with readiness scoring, verified profiles, and smarter hiring.",
};

export default function Page() {
  return <JemsPage />;
}

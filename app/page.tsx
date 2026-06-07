import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Roadmap from "@/components/Roadmap";
import Manifesto from "@/components/Manifesto";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Products />
      <Roadmap />
      <Manifesto />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

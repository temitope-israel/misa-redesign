import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import FeaturedDevelopment from "@/sections/FeaturedDevelopment";
import Developments from "@/sections/Developments";
import Services from "@/sections/Services";
import OfficeMove from "@/sections/OfficeMove";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedDevelopment />
        <Developments />
        <Services />
        <OfficeMove />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

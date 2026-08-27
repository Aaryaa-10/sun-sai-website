import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Fleet from "@/components/sections/Fleet";
import Enquiry from "@/components/sections/Enquiry";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />

      <Hero />

      <About />

      <Services />

      <Fleet />

      <Enquiry />

      <Contact />

       <Footer />
    </main>
  );
}
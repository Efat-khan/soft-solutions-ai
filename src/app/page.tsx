import Hero from "@/components/Hero";
import SDLC from "@/components/SDLC";
import ServiceCards from "@/components/ServiceCards";
import ServicesDetail from "@/components/ServicesDetail";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SDLC />
      <ServiceCards />
      <ServicesDetail />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

import Projects from "@/components/project/Project";
import Hero from "../components/hero/Hero";
import Work from "@/components/work/Work";
import ClientPage from "@/components/client/Client";
import EquipmentSection from "@/components/equipment/Equipment";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";
import Director from "@/components/director/Director";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Director/>
        <About />
        <Work />
        <Projects />
        <EquipmentSection />
        <ClientPage />
        <Contact />
      </main>
    </div>
  );
}

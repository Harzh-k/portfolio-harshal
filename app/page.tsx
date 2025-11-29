import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Inventory from "@/components/Inventory";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-purple-500/50 scroll-smooth">
      
      {/* Floating Navigation Dock */}
      <Navbar />
      
      {/* Section 1: Base (Hero) */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Section 2: Loadout (Skills) */}
      <section id="inventory">
        <Inventory />
      </section>
      
      {/* Section 3: History (Experience) */}
      <section id="experience">
        <Experience />
      </section>
      
      {/* Section 4: Missions (Projects) */}
      <section id="projects">
        <Projects />
      </section>

      {/* Section 5: Uplink (Contact) */}
      <section id="contact">
        <Contact />
      </section>

    </main>
  )
}
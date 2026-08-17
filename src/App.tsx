import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Formation from "./components/Formation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StackMarquee } from "./components/ui";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 font-body text-fog antialiased">
      {/* -------- décor ambiant -------- */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-blueprint" />
        <div className="glow-ember absolute -top-48 left-[-12%] h-[620px] w-[620px] rounded-full" />
        <div className="glow-signal absolute right-[-18%] top-1/4 h-[680px] w-[680px] rounded-full" />
        <div className="glow-mint absolute bottom-[-22%] left-[22%] h-[560px] w-[560px] rounded-full" />
      </div>
      <div className="noise-overlay" aria-hidden="true" />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <StackMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <StackMarquee reverse />
        <Formation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

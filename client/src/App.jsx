import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PixelBG from './components/PixelBG'
import projects from './data/projects';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-space-black min-h-screen text-white selection:bg-cyan-accent selection:text-space-black">
      <Navbar />
      <main className="scroll-smooth animate-fade-in flex flex-col w-full overflow-x-hidden pb-0">

        <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-space-black">
          <PixelBG />
          <div className="relative z-10"><Hero /></div>
        </section>

        <section id="projects" className="min-h-screen w-full bg-[#0d0d0d] py-16 border-y border-white/5">
          <ProjectGrid projects={projects} />
        </section>

        <section id="contact" className="min-h-screen w-full bg-space-black py-0">
          <div className="bg-space-black">
            <Contact />
            <PixelBG />
          </div>
        </section>

      </main>
    </div>
  );
}
export default App;
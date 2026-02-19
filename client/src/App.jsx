import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import Hero from './components/Hero';
import projects from './data/projects';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-space-black min-h-screen">
      <Navbar />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth animate-fade-in">

        {/* Hero */}
        <section id="home" className="h-screen snap-start">
          <Hero />
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen snap-start bg-space-black">
          <ProjectGrid projects={projects} />
        </section>

        {/* Contact */}
        <section id="contact" className="h-screen snap-start">
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App;
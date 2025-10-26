import { useRef } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mt-4 md:mt-6 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur px-4 py-3 ring-1 ring-slate-200 shadow-sm">
            <a href="#" className="font-semibold tracking-tight">Solace Builders</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <a href="#projects" className="hover:text-slate-950">Projects</a>
              <a href="#about" className="hover:text-slate-950">About</a>
              <a href="#contact" className="hover:text-slate-950">Contact</a>
            </nav>
            <button onClick={() => scrollTo(contactRef)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">Schedule Visit</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onViewProjects={() => scrollTo(projectsRef)} onSchedule={() => scrollTo(contactRef)} />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <About />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-600">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Solace Builders. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

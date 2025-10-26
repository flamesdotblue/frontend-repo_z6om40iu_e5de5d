import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Building2, Phone, MessageCircle } from 'lucide-react';

function App() {
  // Smooth scroll for in-page anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id && id.startsWith('#')) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="inline-flex items-center gap-2 text-white">
            <Building2 className="h-6 w-6 text-amber-400" />
            <span className="text-sm font-semibold tracking-wide">FLAMES REALTY</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="rounded-full bg-amber-500 px-4 py-2 text-slate-900 font-medium hover:bg-amber-400">Enquire</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xl font-semibold">FLAMES REALTY</div>
            <p className="mt-2 text-sm text-slate-600">Premium residences and commercial spaces crafted with precision.</p>
          </div>
          <div>
            <div className="font-semibold">Sitemap</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><a href="#" aria-label="Instagram" className="hover:text-slate-900">Instagram</a></li>
              <li><a href="#" aria-label="LinkedIn" className="hover:text-slate-900">LinkedIn</a></li>
              <li><a href="#" aria-label="YouTube" className="hover:text-slate-900">YouTube</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Newsletter</div>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
              <button className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-amber-400">Join</button>
            </form>
            <p className="mt-2 text-xs text-slate-500">RERA: PRM/KA/RERA/XXXXX/XXXX</p>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Flames Realty. All rights reserved.</div>
      </footer>

      {/* Desktop quick contact bubble */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-20 flex-col gap-3">
        <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white shadow ring-1 ring-white/10 hover:bg-slate-800"><Phone className="h-4 w-4" /> Call</a>
        <a href="https://wa.me/911234567890" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-400"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
      </div>
    </div>
  );
}

export default App;

import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef(null);

  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-[92vh] overflow-hidden bg-slate-950 text-white">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-90"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-modern-city-9081/1080p.mp4" type="video/mp4" />
        </video>
        {/* subtle gradient for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36">
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white"
        >
          Thoughtfully crafted residences and spaces built to last
        </motion.h1>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-lg md:text-xl text-slate-200"
        >
          Two decades of delivering premium homes, sustainable design, and precise execution across the city.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-slate-900 font-medium shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
            <Calendar className="h-4 w-4" />
            Schedule Visit
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid grid-cols-3 max-w-xl gap-6 text-center md:text-left md:max-w-3xl">
          {[{label:'Years', value:'20+'},{label:'Units Delivered', value:'2,500+'},{label:'Awards', value:'15'}].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md ring-1 ring-white/15"
            >
              <div className="text-2xl md:text-3xl font-semibold">{item.value}</div>
              <div className="text-sm text-slate-200/80">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile sticky quick actions */}
      <div className="fixed inset-x-0 bottom-4 z-10 mx-auto block w-full max-w-md px-4 md:hidden">
        <div className="flex items-center gap-3 rounded-full bg-slate-900/90 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur">
          <a href="tel:+911234567890" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-slate-900 font-medium">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white">Enquire</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

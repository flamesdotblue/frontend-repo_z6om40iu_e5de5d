import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, MapPin } from 'lucide-react';

const bgVideo =
  'https://videos.pexels.com/video-files/854082/854082-uhd_2560_1440_25fps.mp4';

export default function Hero({ onViewProjects, onSchedule }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-40 pb-16 text-white">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur ring-1 ring-white/20 mb-6">
            <Play size={14} className="opacity-80" />
            <span className="text-xs tracking-wide uppercase">Flagship: Bayview Residences</span>
          </div>
          <h1 className="font-semibold tracking-tight text-4xl md:text-6xl leading-[1.1]">
            Thoughtfully crafted homes and landmark spaces built to last
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-2xl">
            Two decades of delivering quality developments with integrity and precision.
            Explore our portfolio and schedule a private site visit.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onViewProjects}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow/50 shadow-black/10 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={onSchedule}
              className="group inline-flex items-center gap-2 rounded-full bg-transparent text-white/90 ring-1 ring-white/30 hover:ring-white/60 px-5 py-3 text-sm font-semibold backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
            >
              Schedule Visit
              <MapPin className="size-4 opacity-80 group-hover:opacity-100" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-6 text-sm text-white/90">
            {[
              { label: 'Years Active', value: '20+' },
              { label: 'Units Delivered', value: '3,500+' },
              { label: 'Awards', value: '12' },
            ].map((item) => (
              <div key={item.label} className="">
                <div className="text-2xl font-semibold">{item.value}</div>
                <div className="text-white/70 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

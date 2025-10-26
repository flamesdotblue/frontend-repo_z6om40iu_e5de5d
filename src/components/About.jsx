import { motion, useReducedMotion } from 'framer-motion';
import { Award, Building2, Leaf, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="md:flex items-end justify-between gap-8 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              About & Credentials
            </h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              A heritage of craftsmanship, a commitment to quality, and a vision for sustainable urban living.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Building2,
              title: 'Heritage',
              body:
                'Founded in 2004, we have delivered landmark addresses across residential and commercial categories.',
            },
            {
              icon: Users,
              title: 'Leadership',
              body:
                'Led by a cross-disciplinary team of architects, engineers and planners focused on human-centered design.',
            },
            {
              icon: ShieldCheck,
              title: 'Quality',
              body:
                'Robust QA/QC processes and third‑party audits ensure every handover meets our exacting standards.',
            },
          ].map((b) => (
            <motion.div
              key={b.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <b.icon className="size-6 text-slate-900" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
            <div className="flex items-center gap-2 text-slate-900 font-semibold"><Award className="size-5 text-amber-600"/>Awards</div>
            <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>CREDAI Excellence — Residential Project of the Year</li>
              <li>IGBC Platinum Pre‑Certification — Aurora One</li>
              <li>Design Futures — Best Mixed‑Use Concept</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
            <div className="flex items-center gap-2 text-slate-900 font-semibold"><Leaf className="size-5 text-emerald-600"/>Sustainability</div>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              Passive design, rainwater harvesting, low‑VOC materials, and on‑site waste management reduce
              lifecycle impact while keeping operating costs efficient.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
            <div className="flex items-center gap-2 text-slate-900 font-semibold"><ShieldCheck className="size-5 text-sky-600"/>Certifications</div>
            <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>ISO 9001: Quality Management</li>
              <li>ISO 14001: Environmental Management</li>
              <li>ISO 45001: Occupational Health & Safety</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

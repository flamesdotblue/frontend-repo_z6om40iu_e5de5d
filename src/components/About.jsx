import { motion, useReducedMotion } from 'framer-motion';
import { Award, Leaf, ShieldCheck, Users } from 'lucide-react';

const Feature = ({ icon: Icon, title, children, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-slate-600">{children}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">About Us</h2>
          <p className="mt-3 text-slate-600">We are a design-first real estate developer with a focus on enduring quality, sustainable practices, and transparent delivery. Our team partners with leading architects and engineers to create future-ready spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature icon={Users} title="Heritage & Vision" delay={0.05}>
            Two decades of craftsmanship with a clear vision for resilient, timeless communities.
          </Feature>
          <Feature icon={ShieldCheck} title="Quality & Transparency" delay={0.12}>
            Strict quality control, stage-wise checks, and milestone-based communication.
          </Feature>
          <Feature icon={Leaf} title="Sustainability" delay={0.18}>
            Green materials, energy-efficient design, and water-positive landscapes.
          </Feature>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Awards & Certifications</h3>
            <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
              <li>Best Residential Project (South) – 2023</li>
              <li>IGBC Gold Certified Developments</li>
              <li>Safety Excellence Award – 2022</li>
              <li>ISO 9001:2015 Quality Management</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Trusted By</h3>
            <p className="mt-4 text-slate-600">We collaborate with renowned architects, consultants, and lenders. Our customers include homebuyers and institutional investors seeking long-term value.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200"><Award className="h-4 w-4" />RERA Registered</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200"><Award className="h-4 w-4" />IGBC Gold</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200"><Award className="h-4 w-4" />ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

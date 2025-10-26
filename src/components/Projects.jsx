import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Building2, Home, Layers, Filter } from 'lucide-react';

const PROJECTS = [
  {
    id: 'aurum-heights',
    name: 'Aurum Heights',
    type: 'Residential',
    status: 'Completed',
    location: 'Indiranagar',
    price: '2-3 Cr',
    year: 2022,
    metric: '120 Units',
    badge: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'nova-plaza',
    name: 'Nova Plaza',
    type: 'Commercial',
    status: 'Completed',
    location: 'MG Road',
    price: '4-6 Cr',
    year: 2021,
    metric: '240k sq.ft',
    badge: 'Leased',
    image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'solace-meadows',
    name: 'Solace Meadows',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Whitefield',
    price: '1-2 Cr',
    year: 2025,
    metric: '90 Units',
    badge: 'New Launch',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'vertex-mix',
    name: 'Vertex District',
    type: 'Mixed',
    status: 'Ongoing',
    location: 'Hebbal',
    price: '2-5 Cr',
    year: 2026,
    metric: 'Residences + Retail',
    badge: 'Now Booking',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop',
  },
];

const TYPES = ['All', 'Residential', 'Commercial', 'Mixed'];
const STATUS = ['All', 'Completed', 'Ongoing'];
const LOCATIONS = ['All', 'Indiranagar', 'MG Road', 'Whitefield', 'Hebbal'];
const PRICE = ['All', '1-2 Cr', '2-3 Cr', '4-6 Cr'];

const Projects = () => {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [location, setLocation] = useState('All');
  const [price, setPrice] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    return PROJECTS.filter(p =>
      (type === 'All' || p.type === type) &&
      (status === 'All' || p.status === status) &&
      (location === 'All' || p.location === location) &&
      (price === 'All' || p.price === price)
    );
  }, [type, status, location, price]);

  return (
    <section id="projects" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Featured Projects</h2>
            <p className="mt-2 text-slate-600">Explore by type, status, location, and price band.</p>
          </div>
          <div className="flex items-center gap-2 text-slate-600"><Filter className="h-4 w-4" /> Filters</div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <select aria-label="Filter by type" value={type} onChange={e => setType(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400">
            {TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
          <select aria-label="Filter by status" value={status} onChange={e => setStatus(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400">
            {STATUS.map(s => <option key={s}>{s}</option>)}
          </select>
          <select aria-label="Filter by location" value={location} onChange={e => setLocation(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400">
            {LOCATIONS.map(l => <option key={l}>{l}</option>)}
          </select>
          <select aria-label="Filter by price" value={price} onChange={e => setPrice(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400">
            {PRICE.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <motion.a
              key={p.id}
              href="#contact"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`${p.image}&ixlib=rb-4.0.3`}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500/95 px-3 py-1 text-xs font-medium text-white shadow">{p.badge}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-xs rounded bg-slate-100 px-2 py-1 text-slate-600">{p.type}</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {p.location}</span>
                  <span className="inline-flex items-center gap-1"><Layers className="h-4 w-4" /> {p.metric}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
                  <span>{p.status} · {p.year}</span>
                  <span>{p.price}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Looking for something specific?</h3>
              <p className="text-slate-300">Tell us your requirements and we’ll share tailored options.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 font-medium text-slate-900 shadow hover:bg-amber-400">
              <Building2 className="h-4 w-4" /> Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, BadgeCheck } from 'lucide-react';

const PROJECTS = [
  {
    id: 'bayview',
    name: 'Bayview Residences',
    type: 'Residential',
    status: 'Completed',
    location: 'Waterfront, Mumbai',
    priceBand: 'Premium',
    year: 2022,
    metric: '240 Units',
    badge: 'Ready to Move',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'arcade',
    name: 'Arcade Square',
    type: 'Commercial',
    status: 'Ongoing',
    location: 'Business Bay, Pune',
    priceBand: 'Mid',
    year: 2025,
    metric: '320k sq.ft',
    badge: 'Phase 2 Sales',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'aurora',
    name: 'Aurora One',
    type: 'Mixed',
    status: 'Completed',
    location: 'Gachibowli, Hyderabad',
    priceBand: 'Luxury',
    year: 2021,
    metric: '180 Units',
    badge: 'RERA Certified',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'grove',
    name: 'The Grove',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Whitefield, Bengaluru',
    priceBand: 'Upper Mid',
    year: 2026,
    metric: '110 Villas',
    badge: 'Launching',
    image:
      'https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1600&auto=format&fit=crop',
  },
];

const FILTERS = {
  type: ['All', 'Residential', 'Commercial', 'Mixed'],
  status: ['All', 'Completed', 'Ongoing'],
  location: ['All', 'Mumbai', 'Pune', 'Hyderabad', 'Bengaluru'],
  priceBand: ['All', 'Mid', 'Upper Mid', 'Premium', 'Luxury'],
};

export default function Projects() {
  const [filters, setFilters] = useState({
    type: 'All',
    status: 'All',
    location: 'All',
    priceBand: 'All',
  });
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchType = filters.type === 'All' || p.type === filters.type;
      const matchStatus = filters.status === 'All' || p.status === filters.status;
      const matchLocation =
        filters.location === 'All' || p.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchPrice = filters.priceBand === 'All' || p.priceBand === filters.priceBand;
      return matchType && matchStatus && matchLocation && matchPrice;
    });
  }, [filters]);

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="md:flex items-end justify-between gap-8 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Projects
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Explore our residential, commercial and mixed-use developments. Filter by type,
              status, location and price band.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {Object.entries(FILTERS).map(([key, values]) => (
            <select
              key={key}
              value={filters[key]}
              onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
              className="appearance-none rounded-lg border border-slate-200 bg-white/90 px-3 py-2.5 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300/60"
            >
              {values.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((p, idx) => (
            <motion.article
              key={p.id}
              layout
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-600 text-white text-xs font-medium px-2.5 py-1 shadow">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-xs rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                    {p.type}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-slate-600 text-sm">
                  <MapPin className="size-4" />
                  <span>{p.location}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-700">
                  <span>{p.year}</span>
                  <span className="inline-flex items-center gap-1"><BadgeCheck className="size-4 text-amber-600" />{p.metric}</span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-slate-900 text-white py-2.5 text-sm font-semibold hover:bg-slate-800 transition">
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="md:flex items-end justify-between gap-8 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Get in touch
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Tell us a bit about your interest and our advisors will reach out to you shortly.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <form className="grid md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/80"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/80"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/80"
                  placeholder="+91 98xxxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Project of interest</label>
                <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300/80">
                  <option>Bayview Residences</option>
                  <option>Arcade Square</option>
                  <option>Aurora One</option>
                  <option>The Grove</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Preferred time</label>
                <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300/80">
                  <option>Morning (9–12)</option>
                  <option>Afternoon (12–4)</option>
                  <option>Evening (4–7)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300/80"
                  placeholder="Tell us how we can help"
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition">
                  <Send className="size-4" /> Submit enquiry
                </button>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-slate-900" />
                <div>
                  <div className="font-medium text-slate-900">Call us</div>
                  <div>+91 22 4000 1234</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-5 text-slate-900" />
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <div>sales@builder.example</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-slate-900" />
                <div>
                  <div className="font-medium text-slate-900">Timings</div>
                  <div>Mon–Sat, 9:30 AM – 6:30 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-slate-900" />
                <div>
                  <div className="font-medium text-slate-900">Office</div>
                  <div>HQ: Nariman Point, Mumbai</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/19999999999"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 w-full justify-center rounded-lg bg-emerald-600 text-white px-5 py-3 text-sm font-semibold hover:bg-emerald-700 transition"
            >
              <MessageCircle className="size-4" /> WhatsApp us
            </a>

            <div className="mt-6 h-40 w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
              <iframe
                title="map"
                className="h-full w-full"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.212674788414!2d72.818!3d18.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1e3d5c5a8d%3A0x4f2d3f6d9a8e7d!2sNariman%20Point!5e0!3m2!1sen!2sin!4v1610000000000"
                allowFullScreen
              />
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="fixed bottom-4 inset-x-4 md:hidden">
        <div className="mx-auto max-w-md rounded-full bg-white/95 backdrop-blur shadow-lg ring-1 ring-slate-200 flex items-center justify-between px-4 py-2">
          <a href="#contact" className="text-slate-900 font-medium">Enquire</a>
          <a href="tel:+912240001234" className="text-slate-600">Call</a>
          <a href="https://wa.me/19999999999" className="text-emerald-600 font-medium">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

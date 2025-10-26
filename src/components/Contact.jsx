import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', time: '' });
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Get in touch</h2>
          <p className="mt-3 text-slate-300">Share a few details and our advisors will reach out to you to understand your requirements and schedule a site visit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200">
            {submitted ? (
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Thank you!</h3>
                <p className="text-slate-600">We have received your enquiry. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600">Name</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">Email</label>
                  <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">Phone</label>
                  <input required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">Project of interest</label>
                  <input value={form.project} onChange={(e)=>setForm({...form, project: e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-600">Preferred time</label>
                  <select value={form.time} onChange={(e)=>setForm({...form, time: e.target.value})} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="">Select a slot</option>
                    <option>10:00–12:00</option>
                    <option>12:00–14:00</option>
                    <option>14:00–16:00</option>
                    <option>16:00–18:00</option>
                  </select>
                </div>
                <div className="md:col-span-2 mt-2">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-medium text-slate-900 shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300">
                    <Mail className="h-4 w-4" /> Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="rounded-2xl bg-slate-800 p-6 ring-1 ring-white/10">
            <div className="space-y-3 text-slate-200">
              <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-amber-400" /><div>
                <div className="font-medium text-white">+91 12345 67890</div>
                <div className="text-sm text-slate-400">Mon–Sat, 10am–6pm</div></div></div>
              <div className="flex items-start gap-3"><Mail className="h-5 w-5 text-amber-400" /><div>
                <div className="font-medium text-white">sales@builder.com</div>
                <div className="text-sm text-slate-400">We reply within 24 hours</div></div></div>
              <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-amber-400" /><div>
                <div className="font-medium text-white">Head Office</div>
                <div className="text-sm text-slate-400">12 Business Park, MG Road, Bengaluru</div></div></div>
            </div>
            <a href="https://wa.me/911234567890" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-400">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <div className="mt-5 overflow-hidden rounded-xl">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.035026227177!2d77.610116!3d12.969819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9a1b4fb%3A0x6a0b1c7b4c2d0b1d!2sMG%20Road!5e0!3m2!1sen!2sin!4v1699999999999"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

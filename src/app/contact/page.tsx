"use client";

import { useState } from "react";
import HeroBand from "@/components/shared/HeroBand";
import CtaBand from "@/components/shared/CtaBand";

const trustItems = [
  { label: "Fast Response", sub: "same day callback", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Free Consultation", sub: "no obligation", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Serving NJ & NY", sub: "on-site service", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "5.0 Rating", sub: "80+ reviews", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
];

const infoItems: { label: string; value: string; icon: string; href: string | null }[] = [
  { label: "Address", value: "35 Donaldson Ave\nRutherford, NJ", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", href: null },
  { label: "Phone", value: "(646) 938-1436", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", href: "tel:+16469381436" },
  { label: "Email", value: "info@asm-si.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", href: "mailto:info@asm-si.com" },
  { label: "Business Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 3:00 PM\nSunday: Closed", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <HeroBand
        eyebrow="Get In Touch"
        title="Let's Secure "
        accentWord="Your Property"
        subtitle="Get in touch for a free security consultation. Our team is ready to assess your needs and design the right solution."
      />

      <div className="bg-[#0f172a] border-b border-white/[0.06] px-8 sm:px-12 py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-8 sm:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 shrink-0">
              <div className="w-7 h-7 bg-[rgba(27,63,160,0.4)] rounded-md flex items-center justify-center">
                <svg className="w-3.5 h-3.5 stroke-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-slate-400 text-xs font-semibold">
                <strong className="text-white">{item.label}</strong> — {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0f172a] px-8 sm:px-12 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <p className="text-[#93c5fd] text-[10px] font-extrabold tracking-[3px] uppercase mb-2">Send Us a Message</p>
            <h2 className="text-white text-2xl font-black mb-1">Get a Free Quote</h2>
            <p className="text-slate-500 text-sm mb-8">Fill out the form and one of our security specialists will get back to you shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold tracking-[1px] uppercase mb-1.5">Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-[#1e293b] border border-white/[0.08] rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#1B3FA0]" />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold tracking-[1px] uppercase mb-1.5">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-[#1e293b] border border-white/[0.08] rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#1B3FA0]" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold tracking-[1px] uppercase mb-1.5">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-[#1e293b] border border-white/[0.08] rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#1B3FA0]" />
                </div>
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold tracking-[1px] uppercase mb-1.5">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full bg-[#1e293b] border border-white/[0.08] rounded-md px-3.5 py-2.5 text-slate-500 text-sm focus:outline-none focus:border-[#1B3FA0]">
                    <option value="">Select a service</option>
                    <option value="installation">Installation</option>
                    <option value="service">Service / Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="access-control">Access Control</option>
                    <option value="cctv">CCTV Surveillance</option>
                    <option value="intercom">Intercom Systems</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-[10px] font-bold tracking-[1px] uppercase mb-1.5">Message</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                  className="w-full bg-[#1e293b] border border-white/[0.08] rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#1B3FA0] resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-[#1B3FA0] text-white text-sm font-extrabold py-3 rounded-md hover:bg-[#2550c8] transition-colors">
                Send Message →
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-b from-[#1B3FA0] to-[#0f2260] rounded-xl p-8">
            <p className="text-[#93c5fd] text-[10px] font-extrabold tracking-[3px] uppercase mb-2">Contact Information</p>
            <h2 className="text-white text-xl font-black mb-7">We&apos;re Here to Help</h2>
            <div className="space-y-6">
              {infoItems.map((item) => (
                <div key={item.label} className="flex gap-4 pb-6 border-b border-white/[0.08] last:border-0 last:pb-0">
                  <div className="w-10 h-10 bg-white/[0.12] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/50 text-[10px] font-bold tracking-[1.5px] uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm font-semibold leading-relaxed hover:text-[#93c5fd] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-white text-sm font-semibold leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-black/25 border border-white/[0.12] rounded-lg p-5">
              <p className="text-white text-sm font-extrabold mb-1.5">Need Emergency Support?</p>
              <p className="text-white/55 text-xs leading-relaxed mb-4">For urgent security issues outside business hours, call us directly and we&apos;ll do our best to assist.</p>
              <a href="tel:+16469381436" className="flex items-center gap-2 text-[#93c5fd] text-sm font-bold hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (646) 938-1436
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e293b] border-t-2 border-[#1B3FA0] h-40 flex items-center justify-center relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 29px,rgba(27,63,160,0.08) 30px),repeating-linear-gradient(90deg,transparent,transparent 29px,rgba(27,63,160,0.08) 30px)" }} />
        <div className="relative z-10 text-center">
          <div aria-hidden="true" className="w-4 h-4 bg-[#1B3FA0] rounded-full mx-auto mb-2 shadow-[0_0_0_6px_rgba(27,63,160,0.2),0_0_0_12px_rgba(27,63,160,0.1)]" />
          <p className="text-white text-sm font-bold">ASM Security Integrators</p>
          <p className="text-slate-500 text-xs mt-1">35 Donaldson Ave, Rutherford, NJ</p>
        </div>
      </div>

      <CtaBand
        title="Ready to Get Started?"
        subtitle="Join hundreds of satisfied clients across NJ and NY who trust ASM Security Integrators."
        buttonText="Call (646) 938-1436 →"
        buttonHref="tel:+16469381436"
      />
    </div>
  );
}

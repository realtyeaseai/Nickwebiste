import HeroBand from "@/components/shared/HeroBand";
import CtaBand from "@/components/shared/CtaBand";

const serviceTiles = [
  {
    name: "Access Control Systems",
    desc: "Keycard, biometric, remote access for any property size",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  },
  {
    name: "Video Surveillance (CCTV)",
    desc: "HD cameras, indoor/outdoor, cloud and local storage",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    name: "Intercom & Entry Systems",
    desc: "Audio/video intercoms, multi-tenant, IP-based systems",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    name: "System Integration & Upgrades",
    desc: "Seamless integration of existing and new systems",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    name: "Troubleshooting & Repairs",
    desc: "Diagnostics, emergency response, hardware fixes",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    name: "Ongoing Support & Maintenance",
    desc: "Annual plans, preventive inspections, software updates",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const whyCards = [
  { num: "01", title: "Experience & Expertise", desc: "10+ years of industry knowledge. High-level technical professionalism on every project." },
  { num: "02", title: "End-to-End Solutions", desc: "From consultation and design to installation and ongoing support — complete turnkey security." },
  { num: "03", title: "Customized Approach", desc: "No two properties are the same. Solutions tailored to your specific operational needs and budget." },
  { num: "04", title: "Quality & Reliability", desc: "We partner with leading manufacturers for durable, scalable, high-performance installations." },
  { num: "05", title: "Client-Focused Service", desc: "Responsive support at every stage — from project execution to post-installation peace of mind." },
];

export default function About() {
  return (
    <div className="bg-white">
      <HeroBand
        eyebrow="About ASM Security Integrators"
        title="Trusted Security Solutions for "
        accentWord="Businesses & Homes"
        subtitle="Your trusted partner for access control, CCTV surveillance, intercom systems, and integrated building security — serving NJ & NY for over a decade."
      />

      <div className="bg-white px-8 sm:px-12 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
          <div>
            <p className="text-[#1B3FA0] text-[10px] font-extrabold tracking-[3px] uppercase mb-2">About Our Company</p>
            <h2 className="text-[#0f172a] text-3xl font-black mb-5">We Create Secure Environments</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              ASM Security Integrators is a trusted provider of advanced security solutions, specializing in access control systems, CCTV surveillance, intercom systems, and integrated building security services. We are committed to protecting businesses, residential properties, and assets through reliable, technology-driven solutions tailored to each client&apos;s needs.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Our mission is to design and deliver secure, efficient, and scalable security systems that enhance safety and provide peace of mind. By leveraging industry-leading technology and best practices, we help our clients maintain full control and visibility over their properties.
            </p>
            <div className="flex items-center gap-4 bg-[#f0f4ff] border-l-4 border-[#1B3FA0] rounded-r-lg px-5 py-4">
              <div className="w-10 h-10 bg-[#1B3FA0] rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Call us anytime</p>
                <a href="tel:+16469381436" className="text-[#0f172a] text-xl font-black hover:text-[#1B3FA0] transition-colors">(646) 938-1436</a>
              </div>
            </div>
          </div>
          <div className="bg-[#1B3FA0] rounded-2xl flex flex-col items-center justify-center text-center px-8 py-14">
            <p className="text-white text-8xl font-black leading-none mb-2">10+</p>
            <p className="text-white text-lg font-bold mb-3">Years of Experience</p>
            <p className="text-white/60 text-sm max-w-[200px] leading-relaxed">Over a decade securing businesses and homes across New Jersey and New York</p>
            <span className="mt-5 inline-block bg-white/15 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full">✓ Trusted by 300+ Clients</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0f172a] px-8 sm:px-12 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between border-b border-white/[0.06] pb-5 mb-7">
            <div>
              <p className="text-white text-xl font-black">Our Services</p>
              <p className="text-slate-500 text-xs mt-1">Design · Installation · Configuration · Maintenance</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceTiles.map((tile) => (
              <div key={tile.name} className="bg-[#1e293b] border border-[rgba(27,63,160,0.3)] rounded-lg p-5 relative overflow-hidden">
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-0.5 bg-[#1B3FA0]" />
                <div className="w-8 h-8 bg-[rgba(27,63,160,0.3)] rounded-md flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 stroke-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tile.icon} />
                  </svg>
                </div>
                <h3 className="text-white text-sm font-bold mb-1">{tile.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{tile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-8 sm:px-12 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#1B3FA0] text-[10px] font-extrabold tracking-[3px] uppercase mb-2">Why Choose Us</p>
            <h2 className="text-[#0f172a] text-3xl font-black">Built on Expertise. Driven by Results.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map((card) => (
              <div key={card.num} className="border border-slate-200 rounded-lg p-6 relative overflow-hidden">
                <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B3FA0] to-[#4a90e2]" />
                <p className="text-slate-200 text-4xl font-black leading-none mb-3" aria-hidden="true">{card.num}</p>
                <h3 className="text-[#0f172a] text-sm font-extrabold mb-2">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
            <div className="border border-[#1B3FA0] rounded-lg p-6 bg-[#f0f4ff] relative overflow-hidden">
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B3FA0] to-[#4a90e2]" />
              <p className="text-[#1B3FA0] text-4xl font-black leading-none mb-3">500+</p>
              <h3 className="text-[#0f172a] text-sm font-extrabold mb-2">Projects Completed</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Across NJ and NY — businesses, residential properties, and mixed-use facilities.</p>
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        title="Secure Your Property Today"
        subtitle="Let us show you why businesses and homeowners across NJ and NY trust ASM Security Integrators"
        buttonText="Get Your Free Quote →"
        buttonHref="/contact"
      />
    </div>
  );
}

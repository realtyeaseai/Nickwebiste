import Link from "next/link";
import HeroBand from "@/components/shared/HeroBand";
import CtaBand from "@/components/shared/CtaBand";

const services = [
  {
    tag: "Installation",
    title: "Installation",
    desc: "Full system design and installation tailored to your property — minimal disruption, maximum security.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    features: ["Site survey and system design", "Access control installation", "CCTV camera placement", "Intercom system setup"],
  },
  {
    tag: "Service",
    title: "Service & Repair",
    desc: "Top-notch quality service for all your security system needs. Book today and experience the difference.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    features: ["System diagnostics and repair", "Camera and sensor servicing", "Software updates and upgrades", "Emergency response calls"],
  },
  {
    tag: "Maintenance",
    title: "Maintenance",
    desc: "Keep your systems healthy with annual maintenance plans that prevent costly repairs down the road.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    features: ["Scheduled preventive inspections", "Equipment cleaning and testing", "Battery and hardware checks", "Maintenance reports and records"],
  },
  {
    tag: "Access Control",
    title: "Access Control",
    desc: "State-of-the-art systems restricting entry to authorized personnel only — protecting your assets 24/7.",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    features: ["Keycard and fob systems", "Biometric access solutions", "Multi-door management", "Remote access control"],
  },
  {
    tag: "CCTV",
    title: "CCTV Surveillance",
    desc: "High-definition systems with remote monitoring to keep a watchful eye on your property around the clock.",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    features: ["HD and 4K camera options", "Indoor and outdoor cameras", "Remote viewing via mobile", "Cloud and local storage"],
  },
  {
    tag: "Intercom",
    title: "Intercom Systems",
    desc: "Seamless intercom integration connecting entry points with your team — secure visitor management made easy.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    features: ["Audio and video intercoms", "Multi-tenant configurations", "IP-based intercom systems", "Integration with access control"],
  },
];

const tabs = ["All Services", "Access Control", "Surveillance", "Intercom", "Maintenance"];

const steps = [
  { num: 1, title: "Free Consultation", desc: "We assess your property and recommend the best solution for your needs and budget." },
  { num: 2, title: "Custom Design & Install", desc: "We design and install your tailored system with minimal disruption to your operations." },
  { num: 3, title: "Ongoing Support", desc: "Rest easy with our maintenance plans and responsive support team year-round." },
];

export default function Services() {
  return (
    <div className="bg-white">
      <HeroBand
        eyebrow="What We Do"
        title="Security Solutions "
        accentWord="Built for Every Need"
        subtitle="Comprehensive design, installation, configuration, and maintenance — from access control to full system integration."
      />

      {/* <div className="bg-[#0f172a] border-b border-white/[0.06] px-8 sm:px-12 overflow-x-auto">
        <div className="flex max-w-7xl mx-auto">
          {tabs.map((tab, i) => (
            <div
              key={tab}
              className={`px-5 py-4 text-xs font-semibold whitespace-nowrap cursor-default ${
                i === 0
                  ? "text-white border-b-[3px] border-[#1B3FA0]"
                  : "text-slate-500 border-b-[3px] border-transparent"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div> */}

      <div className="bg-[#0f172a] px-8 sm:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="bg-[#1e293b] border border-[rgba(27,63,160,0.25)] rounded-xl overflow-hidden flex flex-col">
              <div className="h-36 bg-[#0f2260] flex items-center justify-center relative">
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[rgba(15,34,96,0.9)] to-transparent" />
                <div className="relative z-10 w-14 h-14 bg-[rgba(27,63,160,0.5)] border border-[rgba(27,63,160,0.8)] rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 stroke-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                  </svg>
                </div>
                <span className="absolute bottom-2.5 left-3 z-10 bg-[#1B3FA0] text-white text-[9px] font-bold tracking-[1.5px] uppercase px-2.5 py-1 rounded-sm">
                  {s.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white text-base font-extrabold mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1 mb-5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-400 text-xs border-b border-white/[0.04] pb-1 last:border-0">
                      <span aria-hidden="true" className="w-3.5 h-3.5 rounded-full bg-[rgba(27,63,160,0.4)] flex items-center justify-center shrink-0 text-[#93c5fd] text-[8px]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center border border-[rgba(27,63,160,0.6)] text-[#93c5fd] text-xs font-bold py-2.5 rounded-md hover:bg-[#1B3FA0] hover:text-white hover:border-[#1B3FA0] transition-colors"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white px-8 sm:px-12 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#1B3FA0] text-[10px] font-extrabold tracking-[3px] uppercase mb-2">Our Process</p>
            <h2 className="text-[#0f172a] text-3xl font-black">How We Deliver Your Security System</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div aria-hidden="true" className="hidden md:block absolute top-5 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-slate-200" />
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#1B3FA0] text-white font-black text-base flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-[#0f172a] text-sm font-extrabold mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        title="Need a Custom Security Plan?"
        subtitle="Every property is different. Contact us and we'll design a solution tailored to your specific requirements and budget."
        buttonText="Request a Free Quote →"
        buttonHref="/contact"
      />
    </div>
  );
}

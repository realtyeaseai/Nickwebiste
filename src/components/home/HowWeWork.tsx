const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Free Consultation",
    description: "Contact us to discuss your security needs. Our experts assess your property and recommend the best solution for your budget.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Custom Design & Install",
    description: "We design and install your tailored security system — access control, CCTV, or intercom — with minimal disruption to your operations.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Ongoing Support",
    description: "Rest easy with our maintenance plans and responsive support team. We keep your systems running flawlessly year-round.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#0f172a] py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#93c5fd] text-[10px] font-extrabold tracking-[3px] uppercase mb-3">Our Process</p>
          <h2 className="text-white text-4xl font-black">How We Work</h2>
          <p className="text-slate-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            From initial consultation to long-term support, we make securing your property simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div aria-hidden="true" className="hidden md:block absolute top-7 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px bg-white/6" />
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1e293b] border border-[rgba(27,63,160,0.25)] rounded-xl p-8 text-center relative overflow-hidden group hover:border-[rgba(27,63,160,0.6)] transition-colors duration-300">
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-0.5 bg-[#1B3FA0]" />
              <div className="w-14 h-14 bg-[rgba(27,63,160,0.3)] rounded-xl flex items-center justify-center mx-auto mb-5">
                {step.icon}
              </div>
              <div className="w-7 h-7 bg-[#1B3FA0] rounded-full flex items-center justify-center text-white font-black text-xs mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-white text-lg font-extrabold mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Free Consultation",
    description: "Contact us to discuss your security needs. Our experts assess your property and recommend the best solution for your budget.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Ongoing Support",
    description: "Rest easy with our maintenance plans and responsive support team. We keep your systems running flawlessly year-round.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#1B3FA0] uppercase tracking-wider text-sm font-semibold animate-fade-in">
            Our Process
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 animate-slide-up">
            How We Work
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From initial consultation to long-term support, we make securing your property simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#1B3FA0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2550c8] transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1B3FA0] font-bold text-sm shadow-md -mt-2">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

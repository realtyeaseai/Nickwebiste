import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-[#1B3FA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About ASM Security Integrators</h1>
          <p className="text-xl text-center mt-4 text-blue-200">
            Your trusted partner for access control, CCTV, and intercom solutions
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1B3FA0] uppercase tracking-wider text-sm font-semibold">About Our Company</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">
                We Create Secure Environments
              </h2>
              <p className="text-gray-600 mb-4">
                ASM Security Integrators is your trusted partner for comprehensive access control, CCTV, and intercom solutions. We are a leading provider of cutting-edge security and surveillance systems, dedicated to safeguarding your business, property, and assets.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to empower businesses and homeowners with advanced technologies, allowing them to protect what matters most. With over 10 years of industry experience, we bring unmatched expertise to every project.
              </p>
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg">
                <div className="text-[#1B3FA0]">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call us anytime</p>
                  <a href="tel:+16469381436" className="text-3xl font-bold text-gray-900 hover:text-[#1B3FA0] transition-colors">
                    (646) 938-1436
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#1B3FA0] rounded-2xl p-12 text-white text-center shadow-2xl">
                <div className="text-8xl font-bold mb-4">10+</div>
                <p className="text-2xl font-semibold">Years of Experience</p>
                <p className="text-blue-200 mt-4">
                  Over a decade of securing businesses and homes across New Jersey and New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver exceptional security solutions every time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise & Experience",
                desc: "Our skilled team brings over 10 years of industry experience and unmatched expertise to every project.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Comprehensive Solutions",
                desc: "Access control, CCTV, and intercom — we cover all your security requirements efficiently and effectively.",
                icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0h10m-10 0H5m10 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6",
              },
              {
                title: "Customization",
                desc: "We take a personalized approach to every project, tailoring solutions to suit your specific requirements and budget.",
                icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
              },
              {
                title: "Excellent Customer Service",
                desc: "Attentive and responsive service throughout the installation process and beyond. We&apos;re always here when you need us.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#1B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B3FA0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Secure Your Property Today</h2>
          <p className="text-xl mb-8 text-blue-200">
            Let us show you why businesses and homeowners across NJ and NY trust ASM Security Integrators
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1B3FA0] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}

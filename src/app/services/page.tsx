import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Installation",
      description: "We help you design and install the security system that you need — from access control to CCTV and intercom, tailored to your property.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
      features: [
        "Site survey and system design",
        "Access control installation",
        "CCTV camera placement",
        "Intercom system setup",
      ],
    },
    {
      title: "Service",
      description: "Book today and experience top-notch quality of service firsthand for all of your security system needs.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      features: [
        "System diagnostics and repair",
        "Camera and sensor servicing",
        "Software updates and upgrades",
        "Emergency response calls",
      ],
    },
    {
      title: "Maintenance",
      description: "Keep your systems healthy and avoid costly repairs. We offer annual maintenance of your security systems to keep them in the best shape.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      features: [
        "Scheduled preventive inspections",
        "Equipment cleaning and testing",
        "Battery and hardware checks",
        "Maintenance reports and records",
      ],
    },
    {
      title: "Access Control",
      description: "State-of-the-art access control systems that restrict entry to authorized personnel only, protecting your assets around the clock.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
      features: [
        "Keycard and fob systems",
        "Biometric access solutions",
        "Multi-door management",
        "Remote access control",
      ],
    },
    {
      title: "CCTV Surveillance",
      description: "High-definition CCTV systems with remote monitoring capabilities to keep a watchful eye on your property 24/7.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop",
      features: [
        "HD and 4K camera options",
        "Indoor and outdoor cameras",
        "Remote viewing via mobile",
        "Cloud and local storage",
      ],
    },
    {
      title: "Intercom Systems",
      description: "Seamless intercom integration that connects your entry points with your team, enabling secure visitor management.",
      image: "https://images.unsplash.com/photo-1461695008884-244cb4543d74?w=600&h=400&fit=crop",
      features: [
        "Audio and video intercoms",
        "Multi-tenant configurations",
        "IP-based intercom systems",
        "Integration with access control",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#1B3FA0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl text-center text-blue-200">
            Comprehensive security solutions for every need
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#1B3FA0] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-[#1B3FA0] mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#1B3FA0] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2550c8] transition-colors duration-300"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Need a Custom Security Plan?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Every property is different. Contact us and we&apos;ll design a solution tailored to your specific requirements and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B3FA0] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2550c8] transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

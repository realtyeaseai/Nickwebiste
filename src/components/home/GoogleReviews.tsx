import Link from "next/link";

const reviews = [
  {
    initials: "MR",
    name: "Marcus Reynolds",
    text: "ASM installed our entire access control system across 3 buildings. Professional, on time, and the system has been flawless for over a year. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    initials: "TK",
    name: "Theresa Kim",
    text: "Outstanding CCTV installation. The team was knowledgeable, clean, and explained everything clearly. Our office has never felt more secure.",
    date: "1 month ago",
  },
  {
    initials: "DJ",
    name: "David Johnson",
    text: "Fast response, competitive pricing, and top-quality equipment. ASM handled our intercom integration seamlessly. Great company to work with.",
    date: "3 weeks ago",
  },
  {
    initials: "AP",
    name: "Angela Perez",
    text: "We had a complex project requiring both CCTV and access control. ASM delivered on every front. The system is intuitive and the support team is always responsive.",
    date: "1 week ago",
  },
  {
    initials: "NW",
    name: "Nathan Wright",
    text: "Excellent service from start to finish. The technicians were professional and thorough. Our facility feels much more secure now. 5 stars without hesitation.",
    date: "4 days ago",
  },
  {
    initials: "SL",
    name: "Sandra Lee",
    text: "ASM replaced our outdated security system with a modern solution. The difference is night and day. Responsive, reliable, and reasonably priced.",
    date: "2 months ago",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#1B3FA0] uppercase tracking-wider text-sm font-semibold">
            Customer Reviews
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">5.0</span>
              <p className="text-sm text-gray-600">Based on 80+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#1B3FA0] to-[#2550c8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">{review.text}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Property?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients in New Jersey and New York who trust ASM Security Integrators.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1B3FA0] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2550c8] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

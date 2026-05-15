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
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1B3FA0] text-[10px] font-extrabold tracking-[3px] uppercase mb-3">Customer Reviews</p>
          <h2 className="text-[#0f172a] text-4xl font-black mb-5">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-black text-[#0f172a]">5.0</span>
            <span className="text-slate-500 text-sm">Based on 80+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#1B3FA0] to-[#4a90e2]" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-linear-to-br from-[#1B3FA0] to-[#2550c8] rounded-lg flex items-center justify-center text-white font-black text-sm shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-extrabold text-[#0f172a] text-sm">{review.name}</p>
                  <div className="flex text-yellow-400 mt-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-slate-400 text-xs">{review.date}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-linear-to-r from-[#1B3FA0] to-[#0f2260] rounded-xl px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-black">Ready to Secure Your Property?</h3>
            <p className="text-white/60 text-sm mt-1.5">Join hundreds of satisfied clients in New Jersey and New York who trust ASM Security Integrators.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-[#1B3FA0] px-7 py-3 rounded-md font-extrabold text-sm hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}

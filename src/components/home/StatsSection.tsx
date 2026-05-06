"use client";

import { useState, useEffect } from "react";

export default function StatsSection() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, response: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );
    const el = document.getElementById("stats-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { projects: 500, clients: 300, years: 10, response: 24 };
    const steps = 60;
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        response: Math.floor(targets.response * progress),
      });
      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, 2000 / steps);
  };

  return (
    <section className="py-20 bg-white" id="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Card */}
          <div className="md:col-span-1">
            <div className="bg-linear-to-br from-[#1B3FA0] to-[#0f2260] rounded-lg p-8 text-white h-full flex flex-col justify-center">
              <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Let&apos;s Talk</h3>
              <p className="text-blue-200 mb-4">Have a security question? Contact us anytime!</p>
              <a href="tel:+16469381436" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
                (646) 938-1436
              </a>
            </div>
          </div>

          {/* Guarantee */}
          <div className="relative">
            <div className="relative h-full rounded-lg overflow-hidden shadow-xl group bg-linear-to-br from-[#1B3FA0] to-[#2550c8] flex items-center justify-center min-h-[300px]">
              <div className="p-8 text-white text-center">
                <div className="text-6xl font-bold mb-3">100%</div>
                <p className="text-xl font-semibold mb-2">Quality Guaranteed</p>
                <p className="text-blue-200 text-sm">
                  We partner with top manufacturers and stand behind every installation we complete.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1B3FA0] mb-2">{counters.projects}+</div>
              <p className="text-gray-600 font-medium">Projects Done</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1B3FA0] mb-2">{counters.clients}+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1B3FA0] mb-2">{counters.years}+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#1B3FA0] mb-2">{counters.response}/7</div>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

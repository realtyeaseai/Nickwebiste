"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Advanced Security Solutions for Your Business",
    subtitle: "ASM Security Integrators",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80",
    badge: "✓ 10+ Years Experience",
    description: "Comprehensive access control, CCTV, and intercom systems tailored to protect what matters most.",
  },
  {
    title: "State-of-the-Art Access Control Systems",
    subtitle: "Protect Every Entry Point",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    badge: "✓ Trusted by Businesses",
    description: "From keycard systems to biometric entry, we design and install access control solutions for any scale.",
  },
  {
    title: "HD CCTV Surveillance You Can Count On",
    subtitle: "24/7 Monitoring & Recording",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&auto=format&fit=crop&q=80",
    badge: "✓ High-Definition Cameras",
    description: "Keep a watchful eye on your property with cutting-edge CCTV systems designed for maximum coverage.",
  },
  {
    title: "Seamless Intercom Integration",
    subtitle: "Connect & Communicate Securely",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80",
    badge: "✓ Custom Solutions",
    description: "Modern intercom systems that integrate seamlessly with your access control and surveillance infrastructure.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(newIndex);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const handleNextSlide = useCallback(() => {
    handleSlideChange((currentSlide + 1) % slides.length);
  }, [currentSlide, handleSlideChange]);

  const handlePrevSlide = useCallback(() => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, handleSlideChange]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index !== currentSlide) handleSlideChange(index);
    },
    [currentSlide, handleSlideChange]
  );

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, handleNextSlide]);

  return (
    <section className="bg-linear-to-br from-[#1B3FA0] via-[#152f7a] to-[#0f2260] text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl relative min-h-[400px] md:min-h-[450px]">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive ? "opacity-100 translate-x-0 z-10"
                    : index < currentSlide ? "opacity-0 -translate-x-full z-0"
                    : "opacity-0 translate-x-full z-0"
                  }`}
                >
                  <span
                    className={`text-sm uppercase tracking-wider mb-4 block font-semibold text-blue-200 ${isActive ? "animate-slide-down opacity-100" : "opacity-0"}`}
                    style={{ animationDelay: isActive ? "0.1s" : "0s", animationFillMode: "both" }}
                  >
                    {slide.subtitle}
                  </span>
                  <h1
                    className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isActive ? "animate-slide-up opacity-100" : "opacity-0"}`}
                    style={{ animationDelay: isActive ? "0.2s" : "0s", animationFillMode: "both" }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-lg md:text-xl mb-8 text-blue-100 leading-relaxed ${isActive ? "animate-fade-in opacity-100" : "opacity-0"}`}
                    style={{ animationDelay: isActive ? "0.4s" : "0s", animationFillMode: "both" }}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`flex flex-col sm:flex-row gap-4 ${isActive ? "animate-scale-in opacity-100" : "opacity-0"}`}
                    style={{ animationDelay: isActive ? "0.6s" : "0s", animationFillMode: "both" }}
                  >
                    <Link
                      href="/services"
                      className="bg-white text-[#1B3FA0] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center shadow-lg transform active:scale-95"
                    >
                      Our Services
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 border-2 border-white text-center shadow-lg hover:shadow-2xl transform active:scale-95"
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative lg:block">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}`}
                  >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-white/20 transform hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    </div>
                    <div
                      className={`absolute -bottom-4 -right-4 bg-white text-[#1B3FA0] px-6 py-3 rounded-lg shadow-xl font-bold text-sm transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                      {slide.badge}
                    </div>
                  </div>
                );
              })}

              <button
                onClick={handlePrevSlide}
                disabled={isAnimating}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={isAnimating}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`h-2 rounded-full transition-all duration-500 ease-out disabled:cursor-not-allowed ${
              index === currentSlide ? "bg-white w-12 shadow-lg" : "bg-white/40 hover:bg-white/60 w-2 hover:w-8"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}

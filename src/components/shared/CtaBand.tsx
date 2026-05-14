// src/components/shared/CtaBand.tsx
import Link from "next/link";

interface CtaBandProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export default function CtaBand({ title, subtitle, buttonText, buttonHref }: CtaBandProps) {
  return (
    <section className="bg-gradient-to-r from-[#1B3FA0] to-[#0f2260] px-4 sm:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-white text-xl font-black">{title}</p>
          <p className="text-white/60 text-sm mt-1.5">{subtitle}</p>
        </div>
        <Link
          href={buttonHref}
          className="shrink-0 bg-white text-[#1B3FA0] px-7 py-3 rounded-md font-extrabold text-sm hover:bg-blue-50 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

interface HeroBandProps {
  eyebrow: string;
  title: string;
  accentWord?: string;
  subtitle: string;
}

export default function HeroBand({ eyebrow, title, accentWord, subtitle }: HeroBandProps) {
  return (
    <section className="bg-gradient-to-br from-[#1B3FA0] to-[#0f2260] py-14 px-4 sm:px-10 relative overflow-hidden">
      <div aria-hidden="true" className="absolute right-0 top-0 w-64 h-64 border-2 border-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div aria-hidden="true" className="absolute right-16 top-1/2 w-40 h-40 border border-white/3 rounded-full -translate-y-1/2" />
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[#93c5fd] text-[11px] font-extrabold tracking-[3px] uppercase mb-3">{eyebrow}</p>
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
          {title}
          {accentWord && <span className="text-[#93c5fd]">{accentWord}</span>}
        </h1>
        <div aria-hidden="true" className="w-14 h-1 bg-[#93c5fd] rounded mb-4" />
        <p className="text-white/65 text-sm max-w-lg leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}

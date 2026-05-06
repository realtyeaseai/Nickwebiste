import HeroSection from "@/components/home/HeroSection";
import HowWeWork from "@/components/home/HowWeWork";
import StatsSection from "@/components/home/StatsSection";
import GoogleReviews from "@/components/home/GoogleReviews";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <HowWeWork />
      <StatsSection />
      <GoogleReviews />
    </div>
  );
}

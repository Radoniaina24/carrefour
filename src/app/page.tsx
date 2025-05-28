import CountdownTimer from "@/components/Date/CountDown";
import HeroSection from "@/components/Hero/Hero";
import HeroSectionTest from "@/components/Hero/HeroTest";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HeroSectionTest />
      {/* <ProgramSection /> */}
      <CountdownTimer />
    </div>
  );
}

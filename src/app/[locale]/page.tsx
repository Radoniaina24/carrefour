import CarrefourEmploi from "@/components/Carrefour";
import CountdownTimer from "@/components/Date/CountDown";
import HeroSection from "@/components/Hero/Hero";

import TargetCountries from "@/components/Section/SectionCountries";
import UniqueFeatures from "@/components/Section/SectionOne";
import GateOfAfricaDesign from "@/features/Blog";

export default async function Home() {
  return (
    <div className="">
      <HeroSection />

      {/* <HeroSectionTest /> */}
      <CarrefourEmploi />
      <UniqueFeatures />
      <TargetCountries />
      {/* <TicketPurchaseSection /> */}
      <CountdownTimer />
      <GateOfAfricaDesign />
    </div>
  );
}

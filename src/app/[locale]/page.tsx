import GateAfricaGroupSection from "@/components/AfricaGroup/GateAfricaGroup";
import GaleriePhotoAlbum from "@/components/Album";
import CarrefourEmploi from "@/components/Carrefour";
import MadagascarTalentsLanding from "@/components/Carrefour/Why";
import VideoSection from "@/components/CloudinaryVideo";
import CountdownTimer from "@/components/Date/CountDown";
import EventsSection from "@/components/Event";
import HeroSection from "@/components/Hero/Hero";
import HeroSectionTest from "@/components/Hero/HeroTest";
import PopUp from "@/components/Popup/Popup";
import TargetCountries from "@/components/Section/SectionCountries";
import UniqueFeatures from "@/components/Section/SectionOne";

import GateOfAfricaDesign from "@/features/Blog";

export default async function Home() {
  return (
    <div className="">
      {/* <Tarif /> */}
      <HeroSection />

      <CarrefourEmploi />
      <HeroSectionTest />
      <MadagascarTalentsLanding />
      <UniqueFeatures />
      <GaleriePhotoAlbum />
      <VideoSection />
      <TargetCountries />

      {/* <TicketPurchaseSection /> */}
      <CountdownTimer />
      <GateAfricaGroupSection />
      <EventsSection />
      <GateOfAfricaDesign />
      <PopUp />
    </div>
  );
}

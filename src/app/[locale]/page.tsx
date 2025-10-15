import GaleriePhotoAlbum from "@/components/Album";

import VideoSection from "@/components/CloudinaryVideo";
import CountdownTimer from "@/components/Date/CountDown";

import EventPage from "@/components/Event/NewPageEvent";
import EventAnnouncement from "@/components/Event/OtheEvent";
import HeroSection from "@/components/Hero/Hero";
import HeroSectionTest from "@/components/Hero/HeroTest";
import PopUp from "@/components/Popup/Popup";
import TargetCountries from "@/components/Section/SectionCountries";
import UniqueFeatures from "@/components/Section/SectionOne";

export default async function Home() {
  return (
    <div className="">
      {/* <Tarif /> */}

      <HeroSection />
      <EventPage />
      {/* <CarrefourEmploi /> */}
      <HeroSectionTest />
      <EventAnnouncement />
      {/* <MadagascarTalentsLanding /> */}
      <UniqueFeatures />
      <GaleriePhotoAlbum />
      <VideoSection />
      <TargetCountries />

      {/* <TicketPurchaseSection /> */}
      <CountdownTimer />
      {/* <GateAfricaGroupSection /> */}
      {/* <EventsSection /> */}
      {/* <GateOfAfricaDesign /> */}
      <PopUp />
    </div>
  );
}

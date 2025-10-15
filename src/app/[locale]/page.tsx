import CountdownTimer from "@/components/Date/CountDown";
import CarrefourEvent from "@/components/Event/CarrefourEvent";

import HeroSection from "@/components/Hero/Hero";

import PopUp from "@/components/Popup/Popup";

export default async function Home() {
  return (
    <div className="">
      {/* <Tarif /> */}
      <HeroSection />
      <CarrefourEvent />

      {/* <EventPage /> */}
      {/* <CarrefourEmploi /> */}
      {/* <HeroSectionTest />
      <EventAnnouncement /> */}
      {/* <MadagascarTalentsLanding /> */}
      {/* <UniqueFeatures />
      <GaleriePhotoAlbum />
      <VideoSection />
      <TargetCountries /> */}

      {/* <TicketPurchaseSection /> */}
      <CountdownTimer />
      {/* <GateAfricaGroupSection /> */}
      {/* <EventsSection /> */}
      {/* <GateOfAfricaDesign /> */}
      <PopUp />
    </div>
  );
}

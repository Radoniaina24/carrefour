import AboutSection from "@/components/About/About";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "À propos - Carrefour d'emploie",
};
const About = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};
export default About;

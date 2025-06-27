import ProgramSection from "@/components/Program/ProgramSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Programme - Carrefour d'emploi",
};
const ProgramPage = () => {
  return (
    <>
      <ProgramSection />
    </>
  );
};
export default ProgramPage;

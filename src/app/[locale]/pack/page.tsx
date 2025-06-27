import CandidateRecruiterTabs from "@/components/Packs/Tabs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Packs & tarifs - Carrefour d'emploi",
};
const PackPage = () => {
  return (
    <div className="mt-24">
      <CandidateRecruiterTabs />
    </div>
  );
};
export default PackPage;

import InscriptionFormCandidate from "@/components/signup/candidate/signupCandidate";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Candidat - Carrefour d'emploie",
};
const SignupPageCandidate = () => {
  return (
    <>
      <InscriptionFormCandidate />
    </>
  );
};
export default SignupPageCandidate;

import { InscriptionFormRecruiter } from "@/components/signup/recruiter/SignupRecruteur";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Recruteur - Carrefour d'emploi",
};
const SignupPageRecruiter = () => {
  return (
    <>
      <InscriptionFormRecruiter />
    </>
  );
};
export default SignupPageRecruiter;

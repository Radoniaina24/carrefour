import Signup from "@/features/register/candidate/Signup";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Candidat - Carrefour d'emploi",
};
const SignupPageCandidate = () => {
  return (
    <>
      <Signup />
    </>
  );
};
export default SignupPageCandidate;

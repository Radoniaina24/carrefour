import Signin from "@/components/signin/Signin";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Connexion - Carrefour d'emploi",
};
const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};
export default SigninPage;

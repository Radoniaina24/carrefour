import Contact from "@/components/Contact/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact - Carrefour d'emploie",
};
const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};
export default ContactPage;

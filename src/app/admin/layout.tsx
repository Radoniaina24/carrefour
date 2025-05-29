import "@/app/globals.css";

import Admin from "@/components/Espace/admin";

export const metadata = {
  title: "Espace Admin - AELI Institute",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Admin>{children}</Admin>;
}

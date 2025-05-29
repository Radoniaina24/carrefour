import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Carrefour de l'Emploi",
};

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        {" "}
        <ReduxProvider>
          <Header /> {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

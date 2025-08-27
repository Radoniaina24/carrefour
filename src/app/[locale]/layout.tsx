import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { ReduxProvider } from "@/redux/provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Carrefour de l'Emploi",
};

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={` ${inter.className}`}>
        {" "}
        <ReduxProvider>
          <NextIntlClientProvider>
            {" "}
            <LanguageProvider>
              {" "}
              <Header /> {children} <Footer />
            </LanguageProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
        {/* Script Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}

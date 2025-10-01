"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const f = useTranslations("footer");

  // Routes admin où le footer est caché
  const adminLocales = ["/fr/admin", "/en/admin", "/de/admin"];

  // Routes publiques spécifiques sans footer
  const hiddenRoutes = ["/inscription", "/connexion"];

  // Vérification si on est sur une page admin
  const isAdminPage = adminLocales.some((path) => pathname.startsWith(path));

  // Vérification si on est sur une route à cacher
  const shouldHideFooter = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Logique d'affichage
  if (isAdminPage || shouldHideFooter) {
    return null;
  }

  return (
    <footer
      className={`bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white ${className}`}
    >
      {/* Ligne de séparation */}
      <div className="border-t border-blue-700/50"></div>

      {/* Copyright */}
      <div className="px-4 py-6">
        <div className="flex justify-center items-center">
          <p className="text-blue-200 text-sm text-center">
            © {currentYear} {f("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

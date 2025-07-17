"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // Assure-toi que ce composant existe

export const Header = () => {
  const pathname = usePathname();

  const adminLocales = ["/fr/admin", "/en/admin", "/de/admin"];

  const isAdminPage = adminLocales.some((path) => pathname.startsWith(path));
  const hiddenRoutes = ["/inscription", "/connexion"];
  const shouldHideHeader = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const renderHeader = () => {
    if (shouldHideHeader) return null;
    if (isAdminPage) {
      return;
    }
    return <Navbar />;
  };

  return <>{renderHeader()}</>;
};

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; // Assure-toi que ce composant existe

export const Header = () => {
  const pathname = usePathname();

  // Liste des chemins à exclure
  const hiddenRoutes = ["/inscription", "/connexion"];

  // Vérifie si le pathname commence par l’un des chemins exclus
  const shouldHideHeader = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (shouldHideHeader) return null;

  return <Navbar />;
};

export type NavItem = {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: {
    name: string;
    href: string;
  }[];
};

export const navItemsByLanguage: Record<"fr" | "en" | "de", NavItem[]> = {
  fr: [
    { name: "Accueil", href: "/", hasDropdown: false },
    { name: "À propos", href: "/about", hasDropdown: false },
    { name: "Programme", href: "/program", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
    { name: "Pack & Tarifs", href: "/pack", hasDropdown: false },
  ],
  en: [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Program", href: "/program", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
    { name: "Packages & Pricing", href: "/pack", hasDropdown: false },
  ],
  de: [
    { name: "Startseite", href: "/", hasDropdown: false },
    { name: "Über uns", href: "/about", hasDropdown: false },
    { name: "Programm", href: "/program", hasDropdown: false },
    { name: "Kontakt", href: "/contact", hasDropdown: false },
    { name: "Pakete & Preise", href: "/pack", hasDropdown: false },
  ],
};

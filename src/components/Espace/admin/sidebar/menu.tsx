import { Users, Ticket, Package } from "lucide-react";
import React, { JSX } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";

export interface MenuItem {
  icon?: JSX.Element;
  label: string;
  href?: string;
  children?: MenuItem[]; // récursif
}

export enum UserRole {
  ADMIN = "super_admin",
  CANDIDATE = "candidate",
  RECRUITER = "recruiter",
}

/**
 * Génère dynamiquement les éléments de menu en fonction du rôle utilisateur.
 * @param userRole Rôle actuel de l'utilisateur
 * @returns Tableau des éléments de menu autorisés pour ce rôle
 */
export const getMenuItems = (userRole: UserRole | string): MenuItem[] => {
  const role = userRole.toLowerCase();

  // Menu commun à tous les rôles
  const commonItems: MenuItem[] = [
    {
      icon: <IoHomeOutline className="text-xl text-blue-500" />,
      label: "Dashboard",
      href: "/admin",
    },
  ];

  // Menus spécifiques selon le rôle
  switch (role) {
    case UserRole.ADMIN:
      return [
        ...commonItems,
        // {
        //   icon: <Ticket className="text-xl text-green-500" />,
        //   label: "Tickets",
        //   href: "/admin/tickets",
        // },
        {
          icon: <Users className="text-xl text-orange-400" />,
          label: "Utilisateurs",
          href: "/admin/staff",
        },
        {
          icon: <PiUsersThree className="text-xl text-pink-500" />,
          label: "Candidats",
          href: "/admin/candidate",
        },
        {
          icon: <PiUsersThree className="text-xl text-blue-500" />,
          label: "Recruteurs",
          href: "/admin/recruiter",
        },
        // {
        //   icon: <Package className="text-xl text-purple-500" />,
        //   label: "Packs",
        //   href: "/admin/packs",
        // },
        // {
        //   icon: <DollarSign className="text-xl text-emerald-500" />,
        //   label: "Tarifs",
        //   href: "/admin/pricing",
        // },
      ];

    case UserRole.CANDIDATE:
      return [
        ...commonItems,
        {
          icon: <Ticket className="text-xl text-green-500" />,
          label: "Tickets",
          href: "/candidate/tickets",
        },
      ];

    case UserRole.RECRUITER:
      return [
        ...commonItems,
        {
          icon: <Ticket className="text-xl text-green-500" />,
          label: "Tickets",
          href: "/recruiter/tickets",
        },
        {
          icon: <Package className="text-xl text-purple-500" />,
          label: "Packs & Tarifs",
          href: "/recruiter/packs",
        },
      ];

    default:
      // Fallback pour les rôles non reconnus
      return commonItems;
  }
};

/**
 * Vérifie si un utilisateur a accès à un menu spécifique
 * @param userRole Rôle de l'utilisateur
 * @param menuHref Lien du menu à vérifier
 * @returns true si l'utilisateur a accès, false sinon
 */
export const hasMenuAccess = (
  userRole: UserRole | string,
  menuHref: string
): boolean => {
  const userMenus = getMenuItems(userRole);
  return userMenus.some((item) => item.href === menuHref);
};

/**
 * Récupère les permissions d'un rôle sous forme de tableau
 * @param userRole Rôle de l'utilisateur
 * @returns Tableau des permissions (labels des menus)
 */
export const getUserPermissions = (userRole: UserRole | string): string[] => {
  const userMenus = getMenuItems(userRole);
  return userMenus.map((item) => item.label);
};

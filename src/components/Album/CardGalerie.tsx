"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CardProps {
  imageSrc: string; // Source de l'image
  altText: string; // Texte alternatif pour l'image
  title: string; // Titre de la carte
  description?: string; // Description de la carte
  animationEffect?: string; // Effet d'animation AOS (optionnel)
  onButtonClick?: (title: string) => void; // Fonction appelée au clic du bouton
}

const CardGalerie: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  animationEffect = "fade-left", // Effet par défaut
  onButtonClick, // Fonction appelée au clic du bouton
}) => {
  const t = useTranslations("album");
  const texteBtn = t("view");

  return (
    <div
      className="group rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:cursor-pointer dark:bg-dark dark:shadow-gray-800 border border-gray-100 dark:border-gray-700"
      data-aos={animationEffect}
    >
      {/* Container image avec overlay */}
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={imageSrc}
          alt={altText}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 space-y-4">
        {/* Titre */}
        <h3 className="text-lg text-center font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Séparateur */}
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
          {/* Bouton d'action */}
          <button
            className="w-full rounded-lg 
               bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600
               px-4 py-2.5 text-sm font-medium text-white
               transition-all duration-300 ease-in-out
               hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700
               hover:shadow-lg hover:scale-[1.02]
               focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
               active:scale-[0.98]
               disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onButtonClick && onButtonClick(title)}
          >
            {texteBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGalerie;

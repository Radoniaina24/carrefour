"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CardProps {
  imageSrc: string; // Source de l'image
  altText: string; // Texte alternatif pour l'image
  title: string; // Titre de la carte
  animationEffect?: string; // Effet d'animation AOS (optionnel)
  onButtonClick?: (title: string) => void; // Fonction appelée au clic du bouton
}

const CardGalerie: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  animationEffect = "fade-left", // Effet par défaut
  onButtonClick, // Fonction appelée au clic du bouton
}) => {
  const t = useTranslations("album");
  const texteBtn = t("view");
  return (
    <div
      className="rounded-lg bg-white p-6 shadow-lg hover:cursor-pointer dark:bg-dark"
      data-aos={animationEffect}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="h-48 w-full rounded-t-lg object-cover"
        width={500}
        height={500}
      />
      <h3 className="text-md my-6 text-center  font-semibold text-gray-800">
        {title}
      </h3>
      <div className="text-center">
        <button
          className="rounded-full 
             bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-500
             px-5 py-2 text-sm font-semibold text-white shadow-lg
             transition-all duration-300 ease-in-out
             hover:from-blue-600 hover:via-indigo-600 hover:to-orange-600
             hover:shadow-xl hover:scale-105
             focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          onClick={() => onButtonClick && onButtonClick(title)}
        >
          {texteBtn}
        </button>
      </div>
    </div>
  );
};

export default CardGalerie;

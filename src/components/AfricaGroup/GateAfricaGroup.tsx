import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ModernClientSection = () => {
  const t = useTranslations("countdown");

  return (
    <div className="relative overflow-hidden">
      {/* Arrière-plan avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {/* Éléments décoratifs animés - adaptés au responsive */}
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 h-8 sm:w-16 sm:h-16 bg-orange-300/10 rounded-full blur-lg animate-bounce"></div>
      </div>

      {/* Votre code original avec design modernisé */}
      <div className="relative z-10 text-center py-12 px-4 sm:py-16 md:py-20">
        <div className="relative">
          {/* Effet de glow derrière le texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20 blur-3xl rounded-full"></div>

          <p className="relative text-sm sm:text-base md:text-lg lg:text-xl text-white bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto border border-white/10 shadow-2xl">
            {t.rich("intro", {
              link: (chunks) => (
                <Link
                  href="https://gateafricagroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 font-semibold hover:text-orange-300 transition-all duration-300 hover:underline decoration-2 underline-offset-4 drop-shadow-lg"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 mt-8 sm:mt-10 md:mt-12 py-4 sm:py-6 md:py-8">
          {/* Logo avec effet moderne */}
          <Link
            href="https://gateafricagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative order-1"
          >
            {/* Effet de glow animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749549435/logo_gate_group_pktaw2.jpg"
                alt="Gate Africa Group Logo"
                width={180}
                height={180}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto rounded-lg shadow-lg"
              />
            </div>
          </Link>

          {/* Séparateur décoratif animé - horizontal sur mobile, vertical sur desktop */}
          <div className="flex sm:flex-col items-center order-2">
            <div className="h-px w-12 sm:w-px sm:h-8 bg-gradient-to-r sm:bg-gradient-to-b from-orange-400 via-blue-400 to-orange-400 animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full mx-2 sm:my-2 sm:mx-0 animate-spin"></div>
            <div className="h-px w-12 sm:w-px sm:h-8 bg-gradient-to-r sm:bg-gradient-to-b from-orange-400 via-blue-400 to-orange-400 animate-pulse"></div>
          </div>

          {/* QR Code avec design modernisé */}
          <div className="group relative order-3">
            {/* Effet de glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 group-hover:bg-white transition-all duration-300 transform group-hover:scale-110 shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dnfdr35vf/image/upload/v1756271429/qrAfricaGroupe_nvodoy.jpg"
                alt="Gate Africa Group Logo"
                width={180}
                height={180}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg shadow-lg"
              />
              {/* Indicateur animé */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Effets décoratifs supplémentaires */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default ModernClientSection;

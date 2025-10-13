"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSectionTest = () => {
  const t = useTranslations("heroTest");

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-12 w-56 h-56 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-60"></div>
        <div className="absolute top-48 right-12 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply blur-2xl opacity-60"></div>
        <div className="absolute bottom-16 left-1/3 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply blur-2xl opacity-50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-12 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Image section */}
            <div className="relative h-80 lg:h-full">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749121383/ibis_kuwrr3.jpg"
                alt="Hôtel Carlton Antananarivo"
                className="absolute inset-0 w-full h-full object-cover"
                height={800}
                width={800}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
              <div className="absolute bottom-5 left-5">
                <div className="bg-red-600 text-white px-3 py-1.5 rounded-md font-semibold text-xs shadow-md uppercase tracking-wide">
                  Ibis
                </div>
              </div>
            </div>

            {/* Text section */}
            <div className="p-6 lg:p-10 flex flex-col justify-center">
              <div className="space-y-5">
                {/* title */}

                <div className="flex items-start sm:items-center space-x-3 mb-4">
                  <div className="w-9 h-9 bg-red-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">I</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {t("hotelTitle")}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{t("hotelAddress")}</span>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-3 text-gray-800">
                  <p className="text-base leading-relaxed font-semibold">
                    {t("highlight")}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t("description1")}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t("description2")}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t("description3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTest;

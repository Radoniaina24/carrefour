"use client";
import React from "react";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center  bg-center bg-cover pt-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748266907/banni%C3%A8re_vivj4x.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100 text-sm text-blue-900">
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <span className="font-medium mr-4">22 & 23 août 2025</span>
              <div className="w-px h-4 bg-blue-200 mx-2"></div>
              <MapPin className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-700 font-medium">
                Hôtel Carlton, Antananarivo
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl md:text-5xl lg:text-2xl font-bold leading-tight text-white">
                Carrefour de l&apos;Emploi
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-2xl lg:text-2xl font-bold text-orange-400">
                  Madagascar
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2 rounded-lg text-xl font-bold">
                  2025
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-300 to-orange-300 text-transparent bg-clip-text">
              <p className="text-2xl lg:text-3xl font-bold leading-relaxed">
                Vous choisissez. Nous préparons.
                <br />
                Vous repartez avec un collaborateur prêt.
              </p>
            </div>
          </div>
          {/* Right Column */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

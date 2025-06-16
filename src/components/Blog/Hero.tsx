import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/* eslint-disable */
export default function Hero() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setIsAnimated(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    "Suivi par des millions de personnes",
    "Couverture panafricaine",
    "Actualités en temps réel",
  ];
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
      <section className="py-16 px-4">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Volet Média — National & International
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 font-medium tracking-wide">
              GATE OF AFRICA MAGAZINE
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <div
              className={`space-y-6 ${
                isAnimated ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                  Suivez en temps réel
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white mt-2">
                    l&apos;évolution de l&apos;Afrique
                  </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Découvrez &apos;actualité économique, politique et sociale du
                  continent africain avec le média en ligne de référence du
                  groupe Gate Africa.
                </p>

                {/* Highlights */}
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300 group"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                      <span className="text-base font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={"https://gateofafrica.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r text-sm from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Visitez GateOfAfrica.com
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Content - Professional Image Section */}
            <div
              className={`relative ${
                isAnimated ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group">
                {/* Image Container with Professional Styling */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10"></div>
                  <Image
                    src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749795681/gateAfricaMagazine_tippo2.jpg"
                    width={600}
                    height={400}
                    alt="Gate of Africa Magazine - Média National & International"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-15 blur-2xl"></div>
              </div>

              {/* Optional Caption */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400 italic">
                  Votre source d&apos;information de référence sur
                  l&apos;Afrique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArticlesSection from "./Post";
import Link from "next/link";
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
        <div className=" mb-20">
          <div className=" max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Suivez en temps réel l&apos;évolution de l&apos;Afrique
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 font-medium tracking-wide">
              GATE OF AFRICA MAGAZINE
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center ">
            {/* Left Content */}
            <div
              className={`space-y-3 ${
                isAnimated ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <div className="">
                <h1 className="text-3xl md:text-3xl font-bold text-white leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white mt-2">
                    L&apos;Afrique en direct, l&apos;info qui vous propulse.
                  </span>
                </h1>
              </div>
              <p className="text-md text-gray-300 leading-relaxed max-w-lg">
                Découvrez &apos;actualité économique, politique et sociale du
                continent africain avec le média en ligne de référence du groupe
                Gate Africa.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-300 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-md font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href={"https://gateofafrica.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r text-sm from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Visitez GateOfAfrica.com
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>{" "}
            <div>
              <ArticlesSection />
              {/* <a
                href="https://gateofafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r text-sm from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 transform  hover:shadow-2xl flex items-center justify-center mx-auto group"
              >
                Voir tous les articles
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a> */}
            </div>
            {/* Right Content - Professional Image Section */}
            <div
              className={`relative ${
                isAnimated ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group flex justify-center px-2 sm:px-4">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-5xl aspect-video">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10 pointer-events-none"></div>

                  {/* Image */}
                  <Link
                    href={"https://gateofafrica.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749795681/gateAfricaMagazine_tippo2.jpg"
                      alt="Gate of Africa Magazine - Média National & International"
                      fill
                      className="object-cover transition-transform duration-700 scale-[1.05] group-hover:scale-110"
                      priority
                    />
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-15 blur-2xl"></div>
              </div>

              {/* Caption */}
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

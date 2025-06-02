"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // Diviser le message en lignes
  const messageLines = [
    "Vous choisissez.",
    "Nous préparons.",
    "Vous repartez avec un collaborateur prêt.",
  ];

  // Effet typing
  useEffect(() => {
    if (currentLineIndex < messageLines.length) {
      const currentLine = messageLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, 80); // Vitesse de frappe (80ms par caractère)

        return () => clearTimeout(timer);
      } else {
        // Ligne terminée, passer à la suivante après une pause
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 1000); // Pause de 1 seconde entre les lignes

        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, currentLineIndex, messageLines]);

  return (
    <section
      className="relative min-h-screen flex items-center bg-center bg-cover pt-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748266907/banni%C3%A8re_vivj4x.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100 text-sm text-blue-900"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <span className="font-medium mr-4">22 & 23 août 2025</span>
              <div className="w-px h-4 bg-blue-200 mx-2"></div>
              <MapPin className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-700 font-medium">
                Hôtel Carlton, Antananarivo
              </span>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.h1
                className="text-2xl md:text-5xl lg:text-2xl font-bold leading-tight text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Carrefour de l&apos;Emploi
              </motion.h1>

              <motion.div
                className="flex items-center space-x-4"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="text-2xl lg:text-2xl font-bold text-orange-400">
                  Madagascar
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2 rounded-lg text-xl font-bold">
                  2025
                </span>
              </motion.div>
            </motion.div>

            {/* Slogan avec effet typing */}
            <motion.div
              className="text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-orange-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed tracking-wide max-w-3xl">
                {displayedText.split("\n").map((line, index) => (
                  <div key={index} className="min-h-[1.5em]">
                    {line}
                    {/* Curseur clignotant à la fin du texte en cours */}
                    {index === displayedText.split("\n").length - 1 &&
                      currentLineIndex < messageLines.length && (
                        <motion.span
                          className="inline-block w-0.5 h-6 bg-orange-400 ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  User,
  Building2,
  ArrowRight,
  Download,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const router = useRouter();

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
        }, 80);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 1000);

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
      {/* Overlay avec dégradé amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 z-0"></div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 bg-orange-500/15 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge d'événement amélioré */}
            <motion.div
              className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-4 shadow-2xl border border-blue-100/50 text-sm"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    12 & 13 Septembre 2025
                  </span>
                </div>
                <div className="w-px h-6 bg-blue-200"></div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-700 font-semibold">
                    Hôtel Ibis Antananarivo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Section Hôtel avec image */}
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749121383/ibis_kuwrr3.jpg"
                    alt="Hôtel Ibis Antananarivo"
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center">
                    Hôtel Ibis Antananarivo
                    <Star className="w-4 h-4 text-yellow-400 ml-2 fill-current" />
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Lieu prestigieux au cœur de la capitale
                  </p>
                </div>
              </div>
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
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
                <span className="text-2xl lg:text-3xl font-bold text-orange-400">
                  Madagascar
                </span>
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  2025
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Slogan avec effet typing amélioré */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="text-xl sm:text-2xl md:text-4xl font-semibold leading-relaxed tracking-wide max-w-3xl">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-orange-400">
                  {displayedText.split("\n").map((line, index) => (
                    <div key={index} className="min-h-[1.5em]">
                      {line}
                      {index === displayedText.split("\n").length - 1 &&
                        currentLineIndex < messageLines.length && (
                          <motion.span
                            className="inline-block w-1 h-8 bg-gradient-to-b from-blue-400 to-orange-400 ml-2 rounded-full"
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
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Buttons améliorés */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {/* Call to Action amélioré */}
            <motion.div
              className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Rejoignez-nous !
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Choisissez votre profil et participez à l&apos;événement de
                référence
              </p>
            </motion.div>

            {/* Buttons avec animations améliorées */}
            <div className="space-y-4">
              {/* Bouton Candidat */}
              <motion.button
                className="group relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-blue-400/30 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/inscription/candidat")}
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <User className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">
                        Inscription Candidat
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Trouvez votre emploi idéal
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.button>

              {/* Bouton Recruteur */}
              <motion.button
                className="group relative w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-red-600 hover:to-red-700 text-white p-6 rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-orange-400/30 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/inscription/recruteur")}
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Building2 className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">
                        Inscription Recruteur
                      </h3>
                      <p className="text-orange-100 text-sm">
                        Recrutez vos talents
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.button>

              {/* Bouton télécharger */}
              <Link
                target="_blank"
                href="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749030606/Brochure-carrefour-de-lemploi-modif_iz0hrn.pdf"
                download
              >
                <motion.button
                  className="group relative w-full bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-600 hover:via-green-700 hover:to-teal-700 text-white p-6 rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-emerald-400/30 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Download className="w-6 h-6 text-white group-hover:animate-bounce" />
                      </motion.div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold">
                          Télécharger la brochure
                        </h3>
                        <p className="text-emerald-100 text-sm">
                          Guide complet de l&apos;événement
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

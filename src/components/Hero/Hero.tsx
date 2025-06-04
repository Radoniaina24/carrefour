"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, Building2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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

          {/* Right Column - Buttons */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {/* Call to Action */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Rejoignez-nous !
              </h2>
              <p className="text-blue-100 text-lg">
                Choisissez votre profil et participez à l&apos;événement
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="space-y-4">
              {/* Bouton Candidat */}
              <motion.button
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-500/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/inscription/candidat")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">
                        Inscription Candidat
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Trouvez votre emploi idéal
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>

              {/* Bouton Recruteur */}
              <motion.button
                className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-6 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-orange-400/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/inscription/recruteur")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">
                        Inscription Recruteur
                      </h3>
                      <p className="text-orange-100 text-sm">
                        Recrutez vos talents
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Particles d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

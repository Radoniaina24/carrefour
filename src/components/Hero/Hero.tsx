"use client";
import { motion } from "framer-motion";
import { User, Building2, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

import SectionPartenariat from "./SectionPartenariat";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Swal from "sweetalert2";
const HeroSection = () => {
  const t = useTranslations("hero");
  const c = useTranslations("program");
  function handleClick() {
    Swal.fire({
      text: c("candidate"),
      icon: "warning",
      showCancelButton: true,
    });
  }

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

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionPartenariat />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <Image
              src="https://res.cloudinary.com/dnfdr35vf/image/upload/v1756274456/1_iakye4.jpg"
              alt="logo-gate-group-africa"
              width={1000}
              height={1000}
              className="rounded-lg"
            />
          </div>
          {/* Right Column - Buttons améliorés */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
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
                onClick={handleClick}
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
                        {t("candidate.title")}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {t("candidate.description")}
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
                onClick={handleClick}
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
                        {t("recruiter.title")}
                      </h3>
                      <p className="text-orange-100 text-sm">
                        {t("recruiter.description")}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.button>

              {/* Bouton télécharger */}
              <Link
                target="_blank"
                href="https://res.cloudinary.com/dikefxjpd/image/upload/v1754569183/Brochure_entreprise_et_universite%CC%81_carrefour_emploi_etudes_dt0uuz.pdf"
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
                          {t("brochure.title")}
                        </h3>
                        <p className="text-emerald-100 text-sm">
                          {t("brochure.description")}
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

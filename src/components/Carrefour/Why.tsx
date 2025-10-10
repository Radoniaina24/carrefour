"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { GraduationCap, Star, Award, Building } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitItem {
  textKey: string;
}

interface PackageFeature {
  titleKey: string;
  descriptionKey: string;
}

const MadagascarTalentsLanding: React.FC = () => {
  const t = useTranslations("why");

  const getBenefits = (type: "companies" | "universities"): BenefitItem[] => {
    return [1, 2, 3, 4].map((num) => ({
      textKey: `why.${type}.benefit${num}`,
    }));
  };

  const packageFeatures: PackageFeature[] = [
    {
      titleKey: "package.accommodation.title",
      descriptionKey: "package.accommodation.description",
    },
    {
      titleKey: "package.transfers.title",
      descriptionKey: "package.transfers.description",
    },
    {
      titleKey: "package.catering.title",
      descriptionKey: "package.catering.description",
    },
    {
      titleKey: "package.access.title",
      descriptionKey: "package.access.description",
    },
    {
      titleKey: "package.support.title",
      descriptionKey: "package.support.description",
    },
    {
      titleKey: "package.experience.title",
      descriptionKey: "package.experience.description",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* WHY SECTION */}
      <section id="pourquoi" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t("why.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("why.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* COMPANIES */}
            <motion.div
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {t("why.companies.title")}
                </h3>
              </div>

              <ul className="space-y-4">
                {getBenefits("companies").map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{t(benefit.textKey)}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl text-center">
                <p className="text-slate-800 font-semibold text-lg">
                  {t("why.companies.quote")}
                </p>
              </div>
            </motion.div>

            {/* UNIVERSITIES */}
            <motion.div
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {t("why.universities.title")}
                </h3>
              </div>

              <ul className="space-y-4">
                {getBenefits("universities").map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{t(benefit.textKey)}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl text-center">
                <p className="text-slate-800 font-semibold text-lg">
                  {t("why.universities.quote")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACK ALL-INCLUSIVE SECTION */}
      <section id="pack" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60"></div>

        <div className="relative container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t("package.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("package.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 text-white p-12 rounded-3xl shadow-2xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {packageFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <Award className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {t(feature.titleKey)}
                    </h4>
                    <p className="text-slate-300">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MadagascarTalentsLanding;

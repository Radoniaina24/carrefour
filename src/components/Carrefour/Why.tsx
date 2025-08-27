"use client";
/* eslint-disable */
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Users,
  GraduationCap,
  Star,
  CheckCircle,
  Award,
  Briefcase,
  Building,
} from "lucide-react";

// Types for better type safety
interface TabType {
  id: "companies" | "universities";
  icon: React.ComponentType<any>;
  labelKey: string;
}

interface Feature {
  titleKey: string;
  descriptionKey: string;
}

interface BenefitItem {
  textKey: string;
}

const MadagascarTalentsLanding: React.FC = () => {
  const t = useTranslations("why");

  const [activeTab, setActiveTab] = useState<"companies" | "universities">(
    "companies"
  );

  // Language switcher handler

  // Tab configuration
  const tabs: TabType[] = [
    { id: "companies", icon: Users, labelKey: "services.companies" },
    {
      id: "universities",
      icon: GraduationCap,
      labelKey: "services.universities",
    },
  ];

  // Features for each tab
  const getTabFeatures = (tabId: "companies" | "universities"): Feature[] => {
    const prefix = tabId === "companies" ? "companies" : "universities";
    return [
      {
        titleKey: `${prefix}.feature1.title`,
        descriptionKey: `${prefix}.feature1.description`,
      },
      {
        titleKey: `${prefix}.feature2.title`,
        descriptionKey: `${prefix}.feature2.description`,
      },
      {
        titleKey: `${prefix}.feature3.title`,
        descriptionKey: `${prefix}.feature3.description`,
      },
    ];
  };

  // Benefits for why section
  const getBenefits = (type: "companies" | "universities"): BenefitItem[] => {
    return [1, 2, 3, 4].map((num) => ({
      textKey: `why.${type}.benefit${num}`,
    }));
  };

  // Package features
  const packageFeatures = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Services Section */}

      {/* Why Section */}
      <section
        id="pourquoi"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t("why.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Companies */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {t("why.companies.title")}
                </h3>
              </div>

              <div className="space-y-4">
                {getBenefits("companies").map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{t(benefit.textKey)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl">
                <p className="text-center text-slate-800 font-semibold text-lg">
                  {t("why.companies.quote")}
                </p>
              </div>
            </div>

            {/* For Universities */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {t("why.universities.title")}
                </h3>
              </div>

              <div className="space-y-4">
                {getBenefits("universities").map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">{t(benefit.textKey)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl">
                <p className="text-center text-slate-800 font-semibold text-lg">
                  {t("why.universities.quote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pack All-Inclusive Section */}
      <section id="pack" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {t("package.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("package.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-12 rounded-3xl shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {t(feature.titleKey)}
                      </h4>
                      <p className="text-slate-300">
                        {t(feature.descriptionKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MadagascarTalentsLanding;

"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Users,
  GraduationCap,
  Briefcase,
  Building,
  Award,
  CheckCircle,
} from "lucide-react";

// Types
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

interface StepItemProps {
  step: number;
  text: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Components
const FeatureCard: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
  textColor,
}) => (
  <div
    className={`${bgColor} rounded-2xl p-8 border border-opacity-20 hover:shadow-lg transition-all duration-300`}
  >
    <div className={`${iconColor} mb-4`}>{icon}</div>
    <h3 className={`text-2xl font-bold ${textColor} mb-3`}>{title}</h3>
    <p className={`${textColor} leading-relaxed`}>{description}</p>
  </div>
);

const ChecklistItem: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => (
  <div className="flex items-start">
    <CheckCircle className={`w-5 h-5 ${color} mt-1 mr-3 flex-shrink-0`} />
    <p className="text-gray-700 leading-relaxed">{text}</p>
  </div>
);

const StepCard: React.FC<StepItemProps> = ({ step, text }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
      <span className="text-white font-bold text-lg">{step}</span>
    </div>
    <p className="text-white font-medium leading-relaxed">{text}</p>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 transform hover:scale-105">
    <div className="text-orange-200 mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-orange-100 leading-relaxed">{description}</p>
  </div>
);

// Main Component
const CarrefourEmploi: React.FC = () => {
  const t = useTranslations("carrefourEmploi");

  const features = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: t("features.employment.title"),
      description: t("features.employment.description"),
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: t("features.education.title"),
      description: t("features.education.description"),
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
      textColor: "text-orange-900",
    },
  ];

  const studentChecklistItems = [
    t("audiences.students.checklist.item1"),
    t("audiences.students.checklist.item2"),
  ];

  const jobSeekerChecklistItems = [
    t("audiences.jobSeekers.checklist.item1"),
    t("audiences.jobSeekers.checklist.item2"),
  ];

  const companySteps = [
    t("companies.steps.step1"),
    t("companies.steps.step2"),
    t("companies.steps.step3"),
    t("companies.steps.step4"),
  ];

  const universityServices = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: t("universities.services.programs.title"),
      description: t("universities.services.programs.description"),
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t("universities.services.meetings.title"),
      description: t("universities.services.meetings.description"),
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: t("universities.services.recruitment.title"),
      description: t("universities.services.recruitment.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Event Description */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-orange-50/30"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("audiences.title")}
            </h2>
            <p className="text-lg text-gray-600">{t("audiences.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Students */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  {t("audiences.students.title")}
                </h3>
              </div>

              <div className="space-y-4">
                {studentChecklistItems.map((item, index) => (
                  <ChecklistItem
                    key={index}
                    text={item}
                    color="text-blue-500"
                  />
                ))}
                <div className="bg-blue-50 rounded-xl p-6 mt-6">
                  <p className="text-blue-800 font-medium leading-relaxed">
                    {t("audiences.students.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Job Seekers */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Briefcase className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">
                  {t("audiences.jobSeekers.title")}
                </h3>
              </div>

              <div className="space-y-4">
                {jobSeekerChecklistItems.map((item, index) => (
                  <ChecklistItem
                    key={index}
                    text={item}
                    color="text-orange-500"
                  />
                ))}
                <div className="bg-orange-50 rounded-xl p-6 mt-6">
                  <p className="text-orange-800 font-medium leading-relaxed">
                    {t("audiences.jobSeekers.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Building className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {t("companies.title")}
            </h2>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-bold py-4 px-8 rounded-full inline-block shadow-lg">
              {t("companies.guarantee")}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companySteps.map((step, index) => (
              <StepCard key={index} step={index + 1} text={step} />
            ))}
          </div>
        </div>
      </section>

      {/* For Universities */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-orange-200 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {t("universities.title")}
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              {t("universities.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {universityServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarrefourEmploi;

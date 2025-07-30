"use client";
import React from "react";
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
  <div className={`${bgColor} rounded-2xl p-8 border border-opacity-20`}>
    <div className={`${iconColor} mb-4`}>{icon}</div>
    <h3 className={`text-2xl font-bold ${textColor} mb-3`}>{title}</h3>
    <p className={textColor}>{description}</p>
  </div>
);

const ChecklistItem: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => (
  <div className="flex items-start">
    <CheckCircle className={`w-5 h-5 ${color} mt-1 mr-3 flex-shrink-0`} />
    <p className="text-gray-700">{text}</p>
  </div>
);

const StepCard: React.FC<StepItemProps> = ({ step, text }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
    <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <span className="text-white font-bold text-lg">{step}</span>
    </div>
    <p className="text-white font-medium">{text}</p>
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/25 transition-colors duration-300">
    <div className="text-orange-200 mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-orange-100">{description}</p>
  </div>
);

const features = [
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Emploi & Stage International",
    description:
      "Opportunités d'emploi durable et de stages à l'international pour booster votre carrière.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    textColor: "text-blue-900",
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Formation Supérieure",
    description:
      "Programmes de licence, master, MBA dans des universités étrangères prestigieuses.",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    textColor: "text-orange-900",
  },
];

const studentChecklistItems = [
  "Vous rêvez d'étudier à l'étranger ?",
  "Vous cherchez un stage international ?",
];

const jobSeekerChecklistItems = [
  "Vous êtes prêt(e) à travailler à l'international ?",
  "Participez à notre recrutement express !",
];

const companySteps = [
  "Choisissez les profils qui vous intéressent",
  "Nous les formons, les évaluons et les préparons",
  "Vous repartez avec des collaborateurs prêts à travailler",
  "Satisfaction 100% garantie",
];

const universityServices = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Présentez vos Filières",
    description:
      "Filières d'avenir, programmes de bourses et conditions d'admission",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Rencontres Directes",
    description: "Milliers de candidats prêts à partir rencontrés en direct",
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Recrutez les Talents",
    description:
      "Les talents malgaches les plus motivés pour vos cursus internationaux",
  },
];

// Main Component
const CarrefourEmploi: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Event Description */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Un événement unique
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Réunissant entreprises internationales, universités étrangères et
              des milliers de talents malgaches à la recherche d&apos;un emploi
              durable, d&apos;un stage à l&apos;international ou d&apos;une
              formation supérieure à l&apos;étranger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Deux objectifs, deux publics clés
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Étudiants */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">
                  Étudiants & Jeunes Diplômés
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
                <div className="bg-blue-50 rounded-xl p-4 mt-6">
                  <p className="text-blue-800 font-medium">
                    Rencontrez des universités partenaires du monde entier,
                    découvrez leurs programmes de bourses et les filières
                    porteuses d&apos;avenir.
                  </p>
                </div>
              </div>
            </div>

            {/* Chercheurs d'emploi */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-orange-500 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <Briefcase className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">
                  Chercheurs d&apos;Emploi
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
                <div className="bg-orange-50 rounded-xl p-4 mt-6">
                  <p className="text-orange-800 font-medium">
                    Déposez votre CV, passez les entretiens et repartez avec des
                    opportunités concrètes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Building className="w-16 h-16 text-blue-300 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pour les Entreprises Internationales
            </h2>
            <div className="bg-orange-500 text-white text-xl font-bold py-3 px-8 rounded-full inline-block">
              RECRUTEZ AVEC UN CV GARANTI
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-orange-200 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Pour les Universités Internationales
            </h2>
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

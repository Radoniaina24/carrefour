"use client";
import React from "react";
import {
  Calendar,
  MapPin,
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

const Button: React.FC<{
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ variant, children, onClick }) => {
  const baseClasses =
    "font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300";
  const variantClasses =
    variant === "primary"
      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

// Data
const heroData = {
  date: "1er & 2 Novembre 2025",
  title: "Carrefour International de",
  subtitle: "l'Emploi et des Études",
  edition: "Édition Madagascar",
  location: "Carlton Madagascar",
  tagline:
    "Deux jours pour transformer des rencontres en opportunités concrètes",
};

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
  const handleRegistration = () => {
    // Registration logic here
    console.log("Registration clicked");
  };

  const handleLearnMore = () => {
    // Learn more logic here
    console.log("Learn more clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              {heroData.date}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heroData.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
                {heroData.subtitle}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-4 font-medium">
              {heroData.edition}
            </p>

            <div className="flex items-center justify-center text-white/90 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{heroData.location}</span>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-xl text-white font-semibold">
                {heroData.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre avenir ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez-nous les 1er & 2 Novembre 2025 au Carlton Madagascar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={handleRegistration}>
              S&apos;inscrire Maintenant
            </Button>
            <Button variant="secondary" onClick={handleLearnMore}>
              En Savoir Plus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Carrefour International de l&apos;Emploi et des Études -
            Madagascar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CarrefourEmploi;

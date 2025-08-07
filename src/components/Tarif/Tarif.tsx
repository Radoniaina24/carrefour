import React from "react";
import {
  Check,
  Star,
  Plane,
  Users,
  Award,
  Camera,
  Globe,
  Briefcase,
} from "lucide-react";

interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

interface Package {
  name: string;
  originalPrice: number;
  earlyBirdPrice: number;
  discount: string;
  features: PackageFeature[];
  icon: React.ReactNode;
  popular?: boolean;
  premium?: boolean;
}

const packages: Package[] = [
  {
    name: "Pack Standard",
    originalPrice: 1200,
    earlyBirdPrice: 1080,
    discount: "10%",
    icon: <Users className="w-6 h-6" />,
    features: [
      { text: "2 représentants inclus" },
      {
        text: "2 nuits au Carlton Madagascar, hôtel 5 étoiles (chambre double)",
      },
      { text: "Option chambre individuelle possible" },
      { text: "Transferts aéroport inclus" },
      { text: "Restauration complète" },
      { text: "Stand recruteur équipé" },
      { text: "Soirée de gala VIP (23 août) – dîner, spectacle, réseautage" },
      { text: "Remise des CVs présélectionnés selon vos critères" },
      { text: "NB : ce pack n'inclut pas les démarches administratives" },
    ],
  },
  {
    name: "Pack Premium",
    originalPrice: 2200,
    earlyBirdPrice: 1980,
    discount: "10%",
    icon: <Star className="w-6 h-6" />,
    popular: true,
    features: [
      { text: "Tous les services du Pack Standard" },
      { text: "Assistant personnel dédié", highlighted: true },
      { text: "Interprète professionnel (FR/EN)", highlighted: true },
      {
        text: "Couverture média : interview vidéo, reportage photo",
        highlighted: true,
      },
      { text: "Publication digitale" },
      { text: "Visibilité renforcée sur nos plateformes officielles" },
      { text: "Appui administratif complet pour les candidats recrutés" },
      { text: "Suivi RH prolongé post-événement" },
      {
        text: "Programme de renforcement approfondi (langues, techniques, soft skills)",
      },
    ],
  },
  {
    name: "Partenaire Officiel",
    originalPrice: 3600,
    earlyBirdPrice: 3240,
    discount: "10%",
    icon: <Award className="w-6 h-6" />,
    features: [
      { text: "Tous les services du Pack Premium" },
      {
        text: "Visibilité renforcée avant, pendant et après l'événement",
        highlighted: true,
      },
      { text: "Mise en avant dans nos campagnes de communication" },
      { text: "Possibilité d'intervention lors des panels et conférences" },
      { text: "Accompagnement prioritaire des candidats sélectionnés" },
      {
        text: "BILLETS D'AVION ALLER-RETOUR classe économique pour 2 personnes",
        highlighted: true,
      },
      { text: "Mention « Partenaire Officiel » sur tous les supports" },
      { text: "Accès à une base de données exclusive de CVs présélectionnés" },
    ],
  },
  {
    name: "Sponsor Officiel",
    originalPrice: 5000,
    earlyBirdPrice: 4500,
    discount: "10%",
    icon: <Briefcase className="w-6 h-6" />,
    premium: true,
    features: [
      { text: "Tous les services du Pack Partenaire Officiel" },
      {
        text: "Mention prioritaire « Sponsor Officiel » sur tous les supports",
        highlighted: true,
      },
      { text: "STAND PRESTIGE à l'entrée", highlighted: true },
      { text: "Couverture média renforcée personnalisée" },
      { text: "Visibilité prolongée post-événement" },
      { text: "Suivi spécifique des candidats recrutés" },
      {
        text: "Présentation lors de la cérémonie d'ouverture",
        highlighted: true,
      },
      {
        text: "BILLETS D'AVION ALLER-RETOUR classe BUSINESS pour 2 personnes",
        highlighted: true,
      },
    ],
  },
];

const PackageCard: React.FC<{ package: Package }> = ({ package: pkg }) => {
  const cardClasses = `
    relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
    ${pkg.popular ? "ring-2 ring-orange-400 scale-105" : ""}
    ${
      pkg.premium
        ? "bg-gradient-to-br from-blue-50 to-orange-50 ring-2 ring-blue-400"
        : ""
    }
  `;

  return (
    <div className={cardClasses}>
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Populaire
          </span>
        </div>
      )}

      {pkg.premium && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Premium
          </span>
        </div>
      )}

      <div className="p-8">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl text-white shadow-lg">
          {pkg.icon}
        </div>

        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {pkg.name}
        </h3>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold text-blue-600">
              {pkg.earlyBirdPrice.toLocaleString()} €
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="line-through">
              {pkg.originalPrice.toLocaleString()} €
            </span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
              -{pkg.discount}
            </span>
          </div>
          <p className="text-sm text-orange-600 font-medium mt-1">
            Tarif Early Bird
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <span
                className={`text-sm leading-relaxed ${
                  feature.highlighted
                    ? "text-orange-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`
          w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105
          ${
            pkg.premium
              ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              : pkg.popular
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              : "bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600"
          }
        `}
        >
          Choisir ce pack
        </button>
      </div>
    </div>
  );
};

const Tarif: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 mt-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Packs de Recrutement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos offres complètes pour votre événement de recrutement
              à Madagascar. Profitez des tarifs Early Bird avec 10% de
              réduction.
            </p>
          </div>
        </div>
      </header>

      {/* Features Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 mb-3" />
              <span className="font-semibold">Événement International</span>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="w-8 h-8 mb-3" />
              <span className="font-semibold">Couverture Média</span>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="w-8 h-8 mb-3" />
              <span className="font-semibold">Transferts Inclus</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-3" />
              <span className="font-semibold">Service Premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Profitez de nos tarifs Early Bird et bénéficiez d&paos;une réduction
            de 10% sur tous nos packs. Offre limitée dans le temps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Réserver maintenant
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarif;

import React from "react";
import { Calendar, Users, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";

const HeroSectionTest = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hotel Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Hotel Image */}
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749121383/ibis_kuwrr3.jpg"
                alt="Hôtel Ibis Antananarivo"
                className="absolute inset-0 w-full h-full object-cover"
                height={1000}
                width={1000}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

              {/* Ibis Logo Overlay */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                  ibis
                </div>
              </div>
            </div>

            {/* Right Column - Hotel Description */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Hotel Header */}
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ibis</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Hôtel Ibis Antananarivo
                      </h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          Centre-ville, Antananarivo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    L&apos;hôtel Ibis Antananarivo Ankorondrano vous accueille
                    dans le quartier des affaires, où confort et commodité se
                    rencontrent. Nos 174 chambres modernes disposent d&apos;un
                    coin bureau, de la climatisation et d&apos;un accès wifi
                    haut débit gratuit.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Profitez de notre salle de fitness, de notre spa avec sauna,
                    hammam et piscine extérieure. Détendez-vous au bar ouvert
                    24h/24 et savourez les plats de notre restaurant, avec une
                    terrasse ensoleillée surplombant un jardin magnifique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Event Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-blue-800 text-lg leading-relaxed">
              <p>
                <strong className="text-blue-900 text-xl">
                  Carrefour de l&apos;Emploi – Madagascar 2025
                </strong>{" "}
                est un dispositif de recrutement direct, à portée nationale et
                internationale, conçu pour connecter des entreprises, malgaches
                et étrangères, en quête de main-d&apos;œuvre fiable avec des
                talents malgaches qualifiés. Ces talents sont identifiés,
                renforcés et accompagnés jusqu&apos;à leur intégration durable
                au sein des organisations partenaires.
              </p>
              <p>
                Organisé par{" "}
                <strong className="text-orange-600 hover:text-orange-700 transition-colors">
                  GATE AFRICA GROUP
                </strong>
                , ce rendez-vous se distingue par son approche clé-en-main,
                structurée et orientée résultats.
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-blue-900 font-medium">
                    Jours d&apos;événement
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    100%
                  </div>
                  <div className="text-orange-900 font-medium">Clé en main</div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-blue-900 font-semibold">
                    Connexion Directe
                  </p>
                  <p className="text-blue-700 text-sm">Talents × Recruteurs</p>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-5 h-5 mr-2" />
                  Événement International
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTest;

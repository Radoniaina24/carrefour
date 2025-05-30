"use client";
import React, { useState } from "react";
import {
  Briefcase,
  Globe,
  Star,
  CheckCircle,
  Users,
  Zap,
  ChevronDown,
  ChevronUp,
  Building,
  Utensils,
  Truck,
  Heart,
  Calculator,
  Headphones,
  Code,
  Camera,
  UserCheck,
} from "lucide-react";

export default function AboutSection() {
  const [expandedSector, setExpandedSector] = useState<boolean | string | null>(
    null
  );

  const sectors = [
    {
      id: "btp",
      title: "BTP, Construction & Maintenance",
      icon: Building,
      color: "from-orange-500 to-red-600",
      description:
        "Maçons, électriciens, plombiers, techniciens climatisation, soudeurs, menuisiers, conducteurs d'engins, superviseurs de chantier etc.",
    },
    {
      id: "tourism",
      title: "Tourisme, Hôtellerie, Restauration & Loisirs",
      icon: Utensils,
      color: "from-blue-500 to-cyan-600",
      description:
        "Réceptionnistes, serveurs, cuisiniers, pizzaiolos, pâtissiers, barmen, housekeeping, animateurs touristiques, spa therapists etc.",
    },
    {
      id: "transport",
      title: "Transport & Logistique",
      icon: Truck,
      color: "from-green-500 to-emerald-600",
      description:
        "Chauffeurs PL/SPL, livreurs, caristes, magasiniers, agents de planification logistique, transit et douane etc.",
    },
    {
      id: "health",
      title: "Santé, Médico-social & Services à la personne",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      description:
        "Médecins, Infirmiers, aides-soignants, sage-femmes, ambulanciers, brancardiers, secrétaires médicales, agents de nettoyage hospitalier etc.",
    },
    {
      id: "admin",
      title: "Administratif, Comptabilité & Gestion",
      icon: Calculator,
      color: "from-purple-500 to-violet-600",
      description:
        "Directeurs, Financiers, Auditeurs, Assistants administratifs, comptables, agents RH, gestionnaires de stock, secrétaires, opérateurs de saisie, invoicing clerks etc.",
    },
    {
      id: "support",
      title: "Service Client, Support & Call Centers",
      icon: Headphones,
      color: "from-indigo-500 to-blue-600",
      description:
        "Agents relation client FR/EN, téléconseillers back-office, support technique IT, médiateurs interculturels, formateurs en communication client etc.",
    },
    {
      id: "it",
      title: "Informatique, Numérique & Technologique",
      icon: Code,
      color: "from-cyan-500 to-teal-600",
      description:
        "Développeurs web et mobile, techniciens réseaux & systèmes, data analysts, cybersécurité, administrateurs cloud, ingénieurs IA etc.",
    },
    {
      id: "events",
      title: "Événementiel, Audiovisuel & Artistique",
      icon: Camera,
      color: "from-yellow-500 to-orange-600",
      description:
        "Techniciens lumière, son et vidéo, régisseurs plateau, décorateurs événementiels, DJs, musiciens, animateurs, photographes, vidéastes etc.",
    },
  ];

  const specialPrograms = [
    {
      title: "Programmes de mobilité jeunes et au pair",
      items: [
        "Jeunes filles et jeunes hommes au pair pour l'Allemagne",
        "Accompagnement linguistique (Allemand niveau B1/B2 requis)",
        "Sélection rigoureuse et accompagnement administratif complet",
        "Intégration culturelle et suivi en collaboration avec les agences partenaires",
      ],
    },
    {
      title: "Profils divers et spécialisés selon demande du marché",
      items: [
        "Agents immobiliers",
        "Agents de sécurité & agents cynophiles",
        "Agents de nettoyage industriel",
        "Agents de désinsectisation et hygiène",
        "Agents d'entretien d'espaces verts",
        "Vétérinaires assistés et auxiliaires animaux",
        "Techniciens en environnement et gestion de déchets",
        "Agents administratifs collectivités et services publics",
        "Professeurs de langues et formateurs linguistiques",
        "Interprètes professionnels (FR, EN, DE, AR, etc.)",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-900 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-orange-300/20 rounded-full px-6 py-3 mb-8">
            <Globe className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-200 font-medium">
              Événement International
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="block text-white mb-2">À propos de</span>
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 bg-clip-text text-transparent">
              l&apos;événement
            </span>
          </h1>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
            <Star className="w-8 h-8 text-orange-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column - Main Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Carrefour de l&apos;Emploi 2025
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Une{" "}
                <span className="text-orange-400 font-semibold">
                  plateforme de recrutement direct
                </span>
                , conçue pour permettre aux entreprises étrangères de
                sélectionner, former et recruter efficacement des{" "}
                <span className="text-blue-400 font-semibold">
                  talents malgaches qualifiés
                </span>
                .
              </p>

              <div className="flex items-center text-gray-400">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                <span>Solution complète et innovante</span>
              </div>
            </div>

            {/* Process Description */}
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-600/10 backdrop-blur-xl border border-orange-300/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                Notre accompagnement complet
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Nos équipes accompagnent l&apos;ensemble du processus :
                sélection, formation accélérée, appui administratif et suivi
                jusqu&apos;à l&apos;intégration finale.
              </p>
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Processus en 4 étapes
              </h3>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Sélection
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Identification et évaluation des meilleurs talents
                      malgaches
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Formation
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Programme de formation accélérée et personnalisée
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Support administratif
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Gestion complète des démarches administratives
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-4 rounded-2xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Intégration finale
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Suivi personnalisé jusqu&apos;à l&apos;intégration réussie
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Talent Pool Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Notre vivier de{" "}
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                talents
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500"></div>
              <Users className="w-8 h-8 text-orange-400" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sectors.map((sector) => {
              const IconComponent = sector.icon;
              const isExpanded: boolean | string | null =
                expandedSector === sector.id;

              return (
                <div
                  key={sector.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                  onClick={() =>
                    setExpandedSector(isExpanded ? null : sector.id)
                  }
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${sector.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {sector.title}
                      </h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 mt-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 mt-1" />
                    )}
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-gray-300 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Special Programs */}
          <div className="space-y-8">
            {specialPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-500/10 to-blue-600/10 backdrop-blur-xl border border-orange-300/20 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <UserCheck className="w-6 h-6 text-orange-400 mr-3" />
                  {program.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 bg-white/5 rounded-xl p-4"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-300/20 rounded-2xl p-6">
            <div className="flex items-start space-x-4">
              <Camera className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Casting en live - Soirée de gala du 23 août
                </h4>
                <p className="text-gray-300">
                  Un casting en live sera organisé pendant la soirée de gala du
                  23 août, pour les recruteurs intéressés par des artistes ou
                  animateurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              International
            </h3>
            <p className="text-gray-400">
              Connexion directe avec les entreprises étrangères
            </p>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Talents</h3>
            <p className="text-gray-400">
              Sélection des meilleurs profils malgaches
            </p>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Efficace</h3>
            <p className="text-gray-400">
              Processus optimisé et accompagnement complet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

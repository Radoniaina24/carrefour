"use client";

import React, { useState, useCallback } from "react";
import {
  Briefcase,
  Globe,
  Users,
  Zap,
  Building,
  Utensils,
  Truck,
  Heart,
  Calculator,
  Headphones,
  Code,
  Camera,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SectorCard } from "./SectorCard";
import { SpecialProgramCard } from "./SpecialProgramCard";
import { ProcessStepCard } from "./ProcessStepCard";
import { FeatureCardComponent } from "./FeatureCardComponent";
import LiveSection from "./LiveSection";

// Type pour les icônes Lucide
type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
// Types et interfaces
export interface Sector {
  readonly id: string;
  readonly title: string;
  readonly icon: LucideIcon;
  readonly color: string;
  readonly description: string;
}
export interface SpecialProgram {
  readonly title: string;
  readonly items: readonly string[];
}
export interface ProcessStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
  readonly gradient: string;
}

export interface FeatureCard {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
  readonly gradient: string;
}

// Constantes de données
const SECTORS: readonly Sector[] = [
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
] as const;

const SPECIAL_PROGRAMS: readonly SpecialProgram[] = [
  {
    title: "Mobilité professionnelle – Allemagne",
    items: [
      "Au Pair (séjour linguistique en famille)",
      "Volontariat FSJ / BFD (secteurs social, santé, éducation, etc.)",
      "Ausbildung (formation professionnelle alternée : santé, BTP, IT, hôtellerie, logistique, etc.)",
      "Stages & Études supérieures (Praktikum, Studium)",
      "Recrutement direct & reconnaissance de diplômes (infirmiers, IT, métiers techniques, etc.)",
      "Métiers en tension (soins, numérique, maintenance, logistique, restauration, etc.)",
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
] as const;

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: 1,
    title: "Sélection",
    description: "Identification et évaluation des meilleurs talents malgaches",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    step: 2,
    title: "Formation",
    description: "Programme de formation accélérée et personnalisée",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    step: 3,
    title: "Support administratif",
    description: "Gestion complète des démarches administratives",
    gradient: "from-orange-500 to-blue-500",
  },
  {
    step: 4,
    title: "Intégration finale",
    description: "Suivi personnalisé jusqu'à l'intégration réussie",
    gradient: "from-blue-500 to-orange-500",
  },
] as const;

const FEATURE_CARDS: readonly FeatureCard[] = [
  {
    title: "International",
    description: "Connexion directe avec les entreprises étrangères",
    icon: Globe,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Talents",
    description: "Sélection des meilleurs profils malgaches",
    icon: Users,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Efficace",
    description: "Processus optimisé et accompagnement complet",
    icon: Zap,
    gradient: "from-orange-500 to-blue-500",
  },
] as const;

export const CSS_CLASSES = {
  container: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
  card: "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500",
  gradientCard:
    "bg-gradient-to-r from-orange-500/10 to-blue-600/10 backdrop-blur-xl border border-orange-300/20 rounded-3xl p-8",
  primaryText: "text-white",
  secondaryText: "text-gray-300",
  accentText: "text-gray-400",
  gradientText:
    "bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent",
} as const;

// Composant principal
const AboutSection: React.FC = () => {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const handleSectorToggle = useCallback((sectorId: string) => {
    setExpandedSector((current) => (current === sectorId ? null : sectorId));
  }, []);

  return (
    <section className="relative min-h-screen py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-900 overflow-hidden">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-full blur-2xl" />
      </div>

      <div className={CSS_CLASSES.container}>
        {/* En-tête principal */}
        <SectionHeader />

        {/* Grille de contenu principal */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Colonne gauche - Description principale */}
          <div className="lg:col-span-7 space-y-8">
            <div className={CSS_CLASSES.card}>
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2
                    className={`text-3xl sm:text-4xl font-bold ${CSS_CLASSES.primaryText} mb-4`}
                  >
                    Carrefour de l&apos;Emploi 2025
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full" />
                </div>
              </div>

              <p
                className={`text-xl ${CSS_CLASSES.secondaryText} leading-relaxed mb-6`}
              >
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

              <div className={`flex items-center ${CSS_CLASSES.accentText}`}>
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                <span>Solution complète et innovante</span>
              </div>
            </div>

            {/* Description du processus */}
            <div className={CSS_CLASSES.gradientCard}>
              <h3
                className={`text-2xl font-bold ${CSS_CLASSES.primaryText} mb-6 flex items-center`}
              >
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                Notre accompagnement complet
              </h3>
              <p
                className={`text-lg ${CSS_CLASSES.secondaryText} leading-relaxed mb-6`}
              >
                Nos équipes accompagnent l&apos;ensemble du processus :
                sélection, formation accélérée, appui administratif et suivi
                jusqu&apos;à l&apos;intégration finale.
              </p>
            </div>
          </div>

          {/* Colonne droite - Étapes du processus */}
          <div className="lg:col-span-5">
            <div className={`${CSS_CLASSES.card} h-full`}>
              <h3
                className={`text-2xl font-bold ${CSS_CLASSES.primaryText} mb-8 text-center`}
              >
                Processus en 4 étapes
              </h3>

              <div className="space-y-6">
                {PROCESS_STEPS.map((step) => (
                  <ProcessStepCard key={step.step} step={step} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Vivier de talents */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl sm:text-5xl font-bold ${CSS_CLASSES.primaryText} mb-6`}
            >
              Notre vivier de{" "}
              <span className={CSS_CLASSES.gradientText}>talents</span>
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500" />
              <Users className="w-8 h-8 text-orange-400" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-500" />
            </div>
          </div>

          {/* Grille des secteurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {SECTORS.map((sector) => (
              <SectorCard
                key={sector.id}
                sector={sector}
                isExpanded={expandedSector === sector.id}
                onToggle={handleSectorToggle}
              />
            ))}
          </div>

          {/* Programmes spéciaux */}
          <div className="space-y-8">
            {SPECIAL_PROGRAMS.map((program, index) => (
              <SpecialProgramCard key={index} program={program} index={index} />
            ))}
          </div>

          {/* Note additionnelle */}
          {/* <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-300/20 rounded-2xl p-6">
            <div className="flex items-start space-x-4">
              <Camera className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4
                  className={`text-lg font-semibold ${CSS_CLASSES.primaryText} mb-2`}
                >
                  Casting en live - Soirée de gala du 23 août
                </h4>
                <p className={CSS_CLASSES.secondaryText}>
                  Un casting en live sera organisé pendant la soirée de gala du
                  23 août, pour les recruteurs intéressés par des artistes ou
                  animateurs.
                </p>
              </div>
            </div>
          </div> */}

          <LiveSection />
        </div>

        {/* Statistiques/Fonctionnalités en bas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((feature, index) => (
            <FeatureCardComponent key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

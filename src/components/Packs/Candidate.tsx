import React from "react";
import { User, Users, Star } from "lucide-react";
import Link from "next/link";

// Composant Candidat
const CandidateComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section - Carrefour de l'Emploi */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Carrefour de l&apos;Emploi
          </h2>
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Madagascar 2025
          </h3>
        </div>

        {/* Description principale */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            <strong>
              Vous êtes candidat à la recherche d&apos;opportunités en local ou
              à l&apos;international ?
            </strong>
            Participez au Carrefour de l&apos;Emploi – Madagascar 2025 et
            accédez à des entretiens directs avec des recruteurs venus de
            plusieurs pays et secteurs !
          </p>

          {/* Profils recherchés */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              Profils recherchés
            </h4>
            <p className="text-gray-700 mb-3">
              <strong>Tous niveaux de formation</strong>, débutants ou
              expérimentés, dans des domaines variés :
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Technologie",
                "Santé",
                "Hôtellerie",
                "BTP",
                "Sécurité",
                "Communication",
                "Événementiel",
              ].map((domain, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {domain}
                </span>
              ))}
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                et plus...
              </span>
            </div>
          </div>

          {/* Avantages */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-orange-500" />
              Avantages
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">
                  Accès à des offres d&apos;emploi exclusives
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">
                  Possibilité d&apos;être présélectionné avant l&apos;événement
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">
                  Coaching et accompagnement avant les entretiens
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">
                  Participation à la soirée de gala pour les talents artistiques
                  (castings en live)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/inscription/candidat"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Participer au Carrefour de l&apos;Emploi 2025
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateComponent;

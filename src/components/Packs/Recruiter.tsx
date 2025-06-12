import React from "react";
import { Briefcase, Users, BarChart3, Mail, MapPin, Award } from "lucide-react";
import Link from "next/link";

// Composant Recruteur
const RecruiterComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section Recruteur */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Espace Recruteur
          </h2>
          <h3 className="text-2xl font-semibold text-blue-600 mb-8">
            Carrefour de l&apos;Emploi - Madagascar 2025
          </h3>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              <strong className="text-blue-600">Vous êtes recruteur ?</strong>{" "}
              Contactez-nous dès maintenant pour découvrir les
              <span className="font-semibold text-blue-700">
                {" "}
                tarifs personnalisés
              </span>{" "}
              et les
              <span className="font-semibold text-blue-700">
                {" "}
                packs spécialement conçus
              </span>{" "}
              pour répondre à vos besoins de
              <strong>recrutement local ou international</strong>.
            </p>

            {/* Icônes des avantages */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Talents Qualifiés
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Local & International
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Packs Personnalisés
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-purple-500" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Service Premium
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl text-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl mb-4">
              Contactez-nous pour vos tarifs
            </button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section informative */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Pourquoi participer au Carrefour de l&apos;Emploi ?
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Accès Direct aux Talents
            </h4>
            <p className="text-gray-600">
              Rencontrez directement les candidats qualifiés dans un
              environnement professionnel
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Solutions Sur Mesure
            </h4>
            <p className="text-gray-600">
              Packs personnalisés adaptés à vos besoins spécifiques de
              recrutement
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Accompagnement Expert
            </h4>
            <p className="text-gray-600">
              Bénéficiez de notre expertise pour optimiser vos processus de
              recrutement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal avec les onglets

export default RecruiterComponent;

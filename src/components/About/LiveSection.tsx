import { Camera, Headphones, Music, Users } from "lucide-react";
import React from "react";
import { CSS_CLASSES } from "./About";

export default function LiveSection() {
  return (
    <div>
      {/* Section Live Professionnel avec Musique */}
      <div className="mt-8 space-y-6">
        {/* Casting Live Principal */}
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-xl border border-purple-300/20 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <Camera className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h4
                className={`text-lg font-semibold ${CSS_CLASSES.primaryText} mb-2`}
              >
                Casting Live - Soirée de Gala du 23 août
              </h4>
              <p className={CSS_CLASSES.secondaryText}>
                Un casting en live sera organisé pendant la soirée de gala du 23
                août, pour les recruteurs intéressés par des artistes,
                animateurs et musiciens professionnels.
              </p>
            </div>
          </div>
        </div>

        {/* Section Musiciens Live */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-emerald-300/20 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <Music className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
            <div>
              <h4
                className={`text-lg font-semibold ${CSS_CLASSES.primaryText} mb-2`}
              >
                Performances Musicales Live
              </h4>
              <p className={CSS_CLASSES.secondaryText}>
                Démonstrations en direct de musiciens professionnels : jazz,
                classique, pop et musique du monde. Opportunité unique pour les
                recruteurs de découvrir des talents musicaux authentiques dans
                un cadre intimiste.
              </p>
            </div>
          </div>
        </div>

        {/* DJ & Production Musicale */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-300/20 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <Headphones className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h4
                className={`text-lg font-semibold ${CSS_CLASSES.primaryText} mb-2`}
              >
                Showcase DJ & Production
              </h4>
              <p className={CSS_CLASSES.secondaryText}>
                Présentation live de DJ professionnels et producteurs musicaux.
                Mixage en temps réel, création beats et ambiances sonores pour
                événements, mariages et soirées corporatives.
              </p>
            </div>
          </div>
        </div>

        {/* Groupes & Formations */}
        <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-xl border border-rose-300/20 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <Users className="w-6 h-6 text-rose-400 mt-1 flex-shrink-0" />
            <div>
              <h4
                className={`text-lg font-semibent ${CSS_CLASSES.primaryText} mb-2`}
              >
                Groupes & Formations Musicales
              </h4>
              <p className={CSS_CLASSES.secondaryText}>
                Présentation de groupes complets : orchestres, bands, duos
                acoustiques et formations spécialisées. Démonstrations live
                adaptées aux besoins spécifiques des recruteurs présents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

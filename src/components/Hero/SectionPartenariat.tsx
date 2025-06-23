import Image from "next/image";
import React from "react";

export default function SectionPartenariat() {
  return (
    <section className="w-full pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Logo gauche */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750673205/metefop_ndsapq.jpg"
                alt="Logo Ministère"
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Contenu texte centré */}
          <div className="flex-1 max-w-2xl text-center">
            <div className="space-y-4">
              {/* Premier paragraphe */}
              <p className="text-xl   font-semibold text-white leading-relaxed">
                Sous le haut parrainage du Ministère du Travail, de
                l&apos;Emploi et de la Fonction Publique Madagascar.
              </p>

              {/* Séparateur (tiret) */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              </div>

              {/* Deuxième paragraphe */}
              <p className="text-xl  font-semibold text-white leading-relaxed">
                En partenariat avec la Direction de la Migration Professionnelle
                Madagascar
              </p>
            </div>
          </div>

          {/* Logo droit */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750673205/dmr_r4csmq.jpg"
                alt="Logo Direction Migration"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

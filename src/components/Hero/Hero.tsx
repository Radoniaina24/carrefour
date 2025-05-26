"use client";
import React from "react";
import { Calendar, MapPin, Download, Users, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Date and Location Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100">
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-blue-900 font-medium mr-4">
                22 & 23 août 2025
              </span>
              <div className="w-px h-4 bg-blue-200 mx-2"></div>
              <MapPin className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-700 font-medium">
                Hôtel Carlton, Antananarivo
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Carrefour de l&apos;Emploi
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-3xl lg:text-4xl font-bold text-orange-600">
                  Madagascar
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2 rounded-lg text-xl font-bold">
                  2025
                </span>
              </div>
            </div>

            {/* Slogan */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
              <p className="text-2xl lg:text-3xl font-bold leading-relaxed">
                Vous choisissez. Nous préparons.
                <br />
                Vous repartez avec un collaborateur prêt.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-blue-800 text-lg leading-relaxed">
              <p>
                <strong className="text-blue-900">
                  Carrefour de l&apos;Emploi – Madagascar 2025
                </strong>{" "}
                est un événement international de recrutement professionnel.
                Pendant deux jours, des recruteurs étrangers rencontreront des
                talents malgaches présélectionnés, renforcés et accompagnés
                jusqu&apos;à leur départ.
              </p>
              <p>
                Organisé par{" "}
                <strong className="text-orange-600">GATE AFRICA GROUP</strong>,
                ce rendez-vous se distingue par son approche clé-en-main,
                structurée et orientée résultats.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <div>
                  <Briefcase className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                </div>
                Je suis recruteur
              </button>
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Je suis candidat
              </button>
              <button className="group bg-white text-blue-900 border-2 border-blue-200 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Télécharger la brochure
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main visual container */}
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-blue-900 font-medium">
                    Jours d&apos;événement
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    100%
                  </div>
                  <div className="text-orange-900 font-medium">Clé en main</div>
                </div>
              </div>

              {/* Central illustration */}
              <div className="relative bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
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

              {/* Event badge */}
              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  <div>
                    <Calendar className="w-5 h-5 mr-2" />
                  </div>
                  Événement International
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

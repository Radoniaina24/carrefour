import React from "react";
import { Calendar, Globe, Ticket } from "lucide-react";
import { useTranslations } from "next-intl";

const EventPage = () => {
  const t = useTranslations("event");

  const countries = [
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇳🇿", name: "Nouvelle-Zélande" },
    { flag: "🇬🇧", name: "Royaume-Uni" },
    { flag: "🇺🇸", name: "États-Unis" },
    { flag: "🇩🇪", name: "Allemagne" },
    { flag: "🇲🇾", name: "Malaisie" },
    { flag: "🇲🇺", name: "Île Maurice" },
    { flag: "🇦🇪", name: "Émirats Arabes Unis" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Compact Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold tracking-wide uppercase">
              {t("tagline")}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white text-center mb-4 leading-tight">
            {t("title")}
          </h1>

          <p className="text-base sm:text-lg text-blue-100 text-center mb-6 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-2 rounded-lg hover:bg-white/20 transition-all"
              >
                <span className="text-2xl text-orange-400">{country.flag}</span>
                <span className="text-white text-sm font-medium">
                  {country.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium"> {t("dates")}</span>
            </div>
            {/* <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{t("location")}</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Compact Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Description Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {t("sectionTitle")}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {t("description")}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">
                {" "}
                {t("meetTitle")}
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{t("meetPoints.universities")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>{t("meetPoints.companies")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{t("meetPoints.agencies")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl shadow-xl p-6 sm:p-8 text-center">
          <p className="text-xl sm:text-2xl font-bold text-white mb-3">
            {t("closing")}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg mb-3">
            <Ticket className="w-5 h-5" />
            {t("cta")}
          </button>
          <p className="text-sm text-white/90 font-medium">{t("comingSoon")}</p>
        </div>

        {/* Footer Info */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {t("sponsorLabel")}
            </p>
            <p className="text-sm font-bold text-gray-900"> {t("sponsor")}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {t("organizerLabel")}
            </p>
            <p className="text-sm font-bold text-gray-900">{t("organizer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

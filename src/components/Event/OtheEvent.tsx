import React from "react";
import {
  MapPin,
  Shield,
  Hotel,
  Plane,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

const EventAnnouncement: React.FC = () => {
  const t = useTranslations("event_update");
  const points = t.raw("location_points") as string[];
  const safetyFacts = t.raw("safety_facts") as string[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-2xl animate-pulse">
            <Sparkles className="w-3 h-3 mr-2" />
            {t("highlight")}
          </div>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl">
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              {t("announcement")}
            </p>
          </div>
        </div>

        {/* Why Change Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 mb-6 border-4 border-orange-500">
          <div className="flex flex-col sm:flex-row items-start">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl mb-3 sm:mb-0 sm:mr-4 shadow-xl">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3 text-orange-600">
                {t("why_change_title")}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {t("why_change_content")}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {/* Location Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 sm:p-6 text-white shadow-2xl lg:col-span-2">
            <h3 className="text-base sm:text-lg font-black mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-400" />
              {t("location_title")}
            </h3>

            <div className="space-y-3">
              {[
                { icon: Plane, text: points[0] },
                { icon: Hotel, text: points[1] },
                { icon: CheckCircle, text: points[2] },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="bg-orange-500 p-2 rounded-lg mr-3 shadow-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 sm:p-6 text-white shadow-2xl">
            <div className="flex items-center mb-3">
              <Clock className="w-5 h-5 mr-2" />
            </div>

            <p className="text-sm sm:text-base leading-relaxed">
              {t("duration")}
            </p>
          </div>
        </div>

        {/* Safety Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 mb-6 border-4 border-blue-600">
          <div className="flex flex-col sm:flex-row items-start mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl mb-3 sm:mb-0 sm:mr-4 shadow-xl">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg font-black text-blue-900 mb-2">
                {t("safety_title")}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-semibold">
                {t("safety_description")}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-4 mb-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {safetyFacts.map((fact, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-800 text-xs sm:text-sm font-medium">
                    {fact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4 text-center shadow-xl">
            <p className="text-sm sm:text-base font-black">
              {t("reassurance")}
            </p>
          </div>
        </div>

        {/* Special Offers */}
        <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <div className="text-center">
              <p className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed max-w-3xl mx-auto">
                {t("offers")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAnnouncement;

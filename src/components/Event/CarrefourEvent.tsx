"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function CarrefourEvent() {
  const t = useTranslations("carrefourEvent");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-4 leading-tight">
                  {t("title")}
                </h1>
                <p className="text-base sm:text-lg text-blue-100 font-light">
                  {t("description")}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                  <MapPin className="w-6 h-6 mb-2 text-orange-300" />
                  <div className="font-semibold text-sm"> {t("location")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                  <Calendar className="w-6 h-6 mb-2 text-orange-300" />
                  <div className="font-semibold text-sm">{t("dates")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors">
                  <Clock className="w-6 h-6 mb-2 text-orange-300" />
                  <div className="font-semibold text-sm"> {t("time")}</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-black/75 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1760531409/WhatsApp_Image_2025-10-15_%C3%A0_15.25.31_c85f3f91_lwcmb2.jpg"
                alt="International career fair"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Illustration */}
        <div className="mb-12 relative h-64 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=800&fit=crop"
            alt="International event illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-orange-600/70 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Globe className="w-12 h-12 mx-auto mb-3" />
              <h2 className="text-2xl font-bold">
                {t("additional_info.closing_message")}
              </h2>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            {t("sections.program")}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {t.raw("highlights").map((highlight: string, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow"
              >
                <div className="text-gray-700 text-sm leading-relaxed">
                  {highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t("opportunities.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base mb-2">
                {t("opportunities.job.label")}
              </h3>
              <p className="text-blue-100 text-sm">
                {t("opportunities.job.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base mb-2">
                {t("opportunities.learning.label")}
              </h3>
              <p className="text-blue-100 text-sm">
                {t("opportunities.learning.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base mb-2">
                {t("opportunities.immigration.label")}
              </h3>
              <p className="text-blue-100 text-sm">
                {t("opportunities.immigration.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            {t("sections.countries")}
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t
                .raw("represented_countries")
                .map((country: string, idx: number) => (
                  <div
                    key={idx}
                    className="text-center p-3 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-lg font-semibold text-gray-800">
                      {country}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Sponsor */}
        <div className="mb-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-orange-100">
            {t("official_sponsor.label")}
          </div>
          <h2 className="text-2xl font-bold mb-3">
            {t("official_sponsor.name")}
          </h2>
          <p className="text-sm text-orange-50 max-w-3xl mx-auto">
            {t("official_sponsor.description")}
          </p>
        </div>

        {/* Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            {t("partners.title")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.raw("partners.list").map((partner: string, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-blue-100 hover:border-orange-300 transition-colors"
              >
                <div className="font-bold text-base text-gray-800">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {t("tickets.title")}
          </h2>
          <p className="text-base mb-6 text-blue-100">
            {t("additional_info.cv_notice")}
          </p>
          <a
            href={t("tickets.link")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t("tickets.button_text")} {t("tickets.platform")}
          </a>
          <div className="mt-6 text-xs text-blue-200">
            {t("additional_info.organizer_label")}{" "}
            {t("additional_info.organizer")}
          </div>
        </div>
      </div>
    </div>
  );
}

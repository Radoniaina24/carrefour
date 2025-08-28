"use client";
/* eslint-disable */
import React from "react";
import { Calendar, MapPin, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

const EventsSection = () => {
  const t = useTranslations("events");
  const eventsData = {
    title: t("title"),
    subtitle: t("subtitle"),
    one: {
      logoUrl:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756380428/ai_knohew.jpg",
      eventName: t("one.eventName"),
      date: t("one.date"),
      address: t("one.address"),
      subtitle: t("one.subtitle"),
      description: t("one.description"),
    },
    two: {
      logoUrl:
        "https://res.cloudinary.com/dnfdr35vf/image/upload/v1756380245/vert_jnnkmc.jpg",
      eventName: t("two.eventName"),
      date: t("two.date"),
      address: t("two.address"),
      subtitle: t("two.subtitle"),
      description: t("two.description"),
    },
  };

  const EventCard = ({ event, index }: any) => (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>

      {/* Header with Logo */}
      <div className="relative p-8 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white/50">
              <img
                src={event.logoUrl}
                alt={event.eventName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-4">
              <Globe className="w-4 h-4 mr-2" />
              {t("summit")}
            </div>

            <h3 className="text-2xl  font-bold text-gray-900 mb-2 leading-tight">
              {event.eventName}
            </h3>

            {event.subtitle && (
              <p className="text-lg text-blue-600 font-semibold italic">
                {event.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="px-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-700">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mr-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-md font-bold text-gray-900">{event.date}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-md font-bold text-gray-900">{event.address}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
          <p className="pl-6 text-gray-600 text-base leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 via-purple-600/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-600/10 via-teal-600/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/50 mb-8">
            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">{t("badge")}</span>
          </div>

          <h2 className="text-4xl  font-bold text-gray-900 mb-6 leading-tight">
            {eventsData.title}
          </h2>

          <p className="text-xl  text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {eventsData.subtitle}
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          <EventCard event={eventsData.one} index={0} />
          <EventCard event={eventsData.two} index={1} />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

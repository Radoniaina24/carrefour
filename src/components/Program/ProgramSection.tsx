"use client";
import React from "react";
import { Calendar, Clock, Users, Star, MapPin, Coffee } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProgramSection = () => {
  const programData = [
    {
      day: "Jour 1",
      date: "12 Septembre 2025",
      events: [
        {
          time: "08h00",
          title: "Accueil et installation des recruteurs",
          icon: MapPin,
        },
        {
          time: "08h30",
          title: "Ouverture officielle",
          icon: Star,
        },
        {
          time: "09h00 - 10h30",
          title: "Séances de recrutement & entretiens",
          icon: Users,
        },
        {
          time: "10h30 - 10h45",
          title: "Pause café",
          icon: Coffee,
        },
        {
          time: "10h45 – 12h30",
          title: "Séances de recrutement & entretiens (suite)",
          icon: Users,
        },
        {
          time: "12h30 - 14h00",
          title: "Déjeuner buffet gastronomique au Carlton, hôtel 5 étoiles",
          icon: Star,
        },
        {
          time: "14h00 - 17h00",
          title: "Séances de recrutement & entretiens (suite)",
          icon: Users,
        },
      ],
    },
    {
      day: "Jour 2",
      date: "12 Septembre 2025",
      events: [
        {
          time: "08h30 - 10h00",
          title: "Séances de recrutement & entretiens",
          icon: Users,
        },
        {
          time: "10h00 - 10h15",
          title: "Pause café",
          icon: Coffee,
        },
        {
          time: "10h15 - 12h30",
          title: "Séances de recrutement & entretiens (suite)",
          icon: Users,
        },
        {
          time: "12h30 - 14h00",
          title: "Déjeuner buffet gastronomique au Carlton, hôtel 5 étoiles",
          icon: Star,
        },
        {
          time: "14h00 - 17h00",
          title: "Séances de recrutement & entretiens (suite)",
          icon: Users,
        },
        {
          time: "19h00",
          title:
            "Soirée de gala VIP – networking, démonstrations artistiques, showcase, spectacle",
          icon: Star,
        },
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen py-32 px-4 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Programme de l&apos;événement
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Programme{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Détaillé
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez le programme complet de nos deux journées de recrutement
            intensif
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>

          {programData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              {/* Day Header */}
              <div className="flex justify-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white border-4 border-blue-500 rounded-2xl px-8 py-4 shadow-lg relative z-10"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-600">
                      {day.day}
                    </h3>
                    <p className="text-orange-500 font-semibold">{day.date}</p>
                  </div>
                </motion.div>
              </div>

              {/* Events */}
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      x: eventIndex % 2 === 0 ? -50 : 50,
                    }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                      delay: eventIndex * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      eventIndex % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        eventIndex % 2 === 0 ? "pr-8" : "pl-8"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                          eventIndex % 2 === 0
                            ? "border-blue-500"
                            : "border-orange-500"
                        } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-2 rounded-lg ${
                              eventIndex % 2 === 0
                                ? "bg-blue-100 text-blue-600"
                                : "bg-orange-100 text-orange-600"
                            }`}
                          >
                            <event.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div
                              className={`flex items-center gap-2 mb-2 text-sm font-semibold ${
                                eventIndex % 2 === 0
                                  ? "text-blue-600"
                                  : "text-orange-600"
                              }`}
                            >
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {event.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center mt-24"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Réservez votre place
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Participez à cet événement de recrutement d&apos;exception et donnez
            un nouvel élan à votre carrière
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription/candidat"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Inscription candidat
            </Link>
            <Link
              href="/inscription/recruteur"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Inscription recruteur
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProgramSection;

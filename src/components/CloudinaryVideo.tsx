"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function VideoSection() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-blue-600 py-16 px-6">
      {/* Overlay décoratif */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Découvrez notre{" "}
          <span className="text-yellow-400">vidéo exclusive</span>
        </h2>
        <p className="mb-10 text-lg md:text-xl text-gray-200">
          Une présentation dynamique qui montre comment nous transformons vos
          idées en réalité.
        </p> */}

        {/* Conteneur vidéo avec effet */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 group hover:scale-105 transition-transform duration-500">
          <ReactPlayer
            src="https://www.youtube.com/embed/5kSp4S8zBnA?modestbranding=1&rel=0&controls=1"
            width="100%"
            height="480px"
            controls
          />
        </div>
      </div>
    </section>
  );
}

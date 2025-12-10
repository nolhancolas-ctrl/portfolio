"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Pré-titre */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-slate-600 mb-3"
        >
          votrenom.dev • Développeur créatif
        </motion.p>

        {/* Grand titre */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Je conçois et réalise<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            des expériences numériques.
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Des interfaces modernes, des mouvements fluides et un souci extrême du détail —
          le tout conçu avec une approche esthétique, interactive et orientée haut niveau.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <a className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
            Voir mes projets
          </a>
          <a className="px-6 py-3 rounded-full border border-slate-300 font-medium hover:bg-slate-100 transition">
            Me contacter
          </a>
        </motion.div>

        {/* Logos "Trusted by" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <p className="text-sm text-slate-500 mb-3">Approuvé par</p>
          <div className="flex items-center justify-center gap-6 text-slate-600 text-sm">
            <span>Société A</span>
            <span>Société B</span>
            <span>Société C</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
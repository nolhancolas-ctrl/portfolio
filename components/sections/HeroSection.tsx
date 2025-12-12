"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  // On part de true : au chargement, le hero est en vue, donc le bouton est visible
  const [isHeroInView, setIsHeroInView] = useState(true);

  const t = {
    en: {
      pretitre: "nolhan.dev • Creative developer",
      subtitle:
        "Modern interfaces, smooth micro-interactions and careful details for real products.",
      ctaProjects: "See my projects",
      ctaContact: "Contact me",
      langToggleTitle: "Switch language",
    },
    fr: {
      pretitre: "nolhan.dev • Développeur créatif",
      subtitle:
        "Interfaces modernes, micro-interactions fluides et souci du détail au service de projets concrets.",
      ctaProjects: "Voir mes projets",
      ctaContact: "Me contacter",
      langToggleTitle: "Changer de langue",
    },
  }[lang];

  const toggleLang = () => setLang((prev) => (prev === "en" ? "fr" : "en"));

  // Observer la section #hero comme dans le header
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // "en vue" quand ~30% du hero est visible
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Visible tant que le hero est dans le viewport
  const langButtonVisible = isHeroInView;

  return (
    <section className="relative w-full flex items-center justify-center pb-20 px-6">
      {/* Bouton langue, même logique que le header mais inversée */}
      <button
        type="button"
        onClick={toggleLang}
        aria-label={t.langToggleTitle}
        className={`
          fixed top-4 right-4 z-50
          inline-flex items-center gap-2
          rounded-full border border-slate-300 bg-white/70
          px-3 py-1 text-xs font-medium text-slate-700
          shadow-sm backdrop-blur-md
          hover:bg-white hover:border-slate-400
          transition
          ${
            langButtonVisible
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 -translate-y-4"
          }
        `}
      >
        <span role="img" aria-hidden>
          🌐
        </span>
        <span>{lang === "en" ? "EN · FR" : "FR · EN"}</span>
      </button>

      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Pré-titre */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-slate-600 mb-3"
        >
          {t.pretitre}
        </motion.p>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
        >
          {lang === "en" ? "I design and build" : "Je conçois et réalise"}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            {lang === "en"
              ? "digital experiences."
              : "des expériences numériques."}
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <a href="#project" className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
            {t.ctaProjects}
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-slate-300 font-medium hover:bg-slate-100 transition">
            {t.ctaContact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: "🧭",
    labelEn: "Step 01",
    labelFr: "Étape 01",
    titleEn: "Discover",
    titleFr: "Découvrir",
    bodyEn: "Goals • audience • context",
    bodyFr: "Objectifs • audience • contexte",
  },
  {
    id: 2,
    icon: "🎨",
    labelEn: "Step 02",
    labelFr: "Étape 02",
    titleEn: "Visual direction",
    titleFr: "Direction visuelle",
    bodyEn: "Moodboard • UI • motion",
    bodyFr: "Moodboard • UI • motion",
  },
  {
    id: 3,
    icon: "💻",
    labelEn: "Step 03",
    labelFr: "Étape 03",
    titleEn: "Build",
    titleFr: "Production",
    bodyEn: "Code • animations • quality",
    bodyFr: "Code • animations • qualité",
  },
  {
    id: 4,
    icon: "🚀",
    labelEn: "Step 04",
    labelFr: "Étape 04",
    titleEn: "Launch",
    titleFr: "Lancement",
    bodyEn: "Online • tweaks • support",
    bodyFr: "Mise en ligne • ajustements • support",
  },
];

export default function ProcessSection() {
  // TODO: brancher sur ta logique globale de langue
  const lang: "en" | "fr" = "en";

  const ui = {
    en: {
      kicker: "Process",
      title: "A simple 4-step flow",
    },
    fr: {
      kicker: "Process",
      title: "Un parcours simple en 4 étapes",
    },
  }[lang];

  return (
    <section aria-labelledby="process-title">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center mb-10"
      >
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          {ui.kicker}
        </p>
        <h2
          id="process-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          {ui.title}
        </h2>
      </motion.div>

      {/* Timeline */}
      <ol
        className="
          relative
          max-w-3xl mx-auto pl-5 border-l border-slate-200 space-y-8
          md:max-w-4xl md:grid md:grid-cols-2 md:gap-6 md:space-y-0
        "
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-fuchsia-500/40 to-amber-400/50" />
        {steps.map((step) => (
          <motion.li
            key={step.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative pl-4"
          >
            <span
              className="
                absolute -left-[9px] top-2 flex h-4 w-4 items-center justify-center
                rounded-full border border-white bg-slate-900
                ring-2 ring-violet-400/60
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <div
              className="
                rounded-2xl border border-slate-200/80 bg-white/70
                backdrop-blur-md shadow-sm
                px-4 py-4 md:px-5 md:py-5
                transition-transform duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 mb-1">
                {lang === "en" ? step.labelEn : step.labelFr}
              </p>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <span aria-hidden className="text-lg">
                  {step.icon}
                </span>
                <span>{lang === "en" ? step.titleEn : step.titleFr}</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === "en" ? step.bodyEn : step.bodyFr}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
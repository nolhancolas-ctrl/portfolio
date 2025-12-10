"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Étape 01",
    title: "Découverte & cadrage",
    body: "On clarifie où vous voulez aller : objectifs, audience, contraintes, tonalité. Je pose beaucoup de questions, vous parlez beaucoup.",
  },
  {
    label: "Étape 02",
    title: "Direction visuelle & interactions",
    body: "Je propose une direction : moodboard, maquettes clés, premiers mouvements. On valide ensemble l’intention avant d’écrire la moindre ligne de code.",
  },
  {
    label: "Étape 03",
    title: "Production & micro-détails",
    body: "Intégration sur-mesure (Next.js / React), animations précises, performance et accessibilité. C’est là que le site prend vraiment vie.",
  },
  {
    label: "Étape 04",
    title: "Lancement & suivi",
    body: "Mise en ligne, ajustements, conseils d’évolution. Je ne disparais pas une fois le bouton “Publier” cliqué.",
  },
];

export default function ProcessSection() {
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
          Process
        </p>
        <h2
          id="process-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          Une méthode simple,
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            mais obsédée par le détail.
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <ol className="relative max-w-3xl mx-auto pl-5 border-l border-slate-200 space-y-8">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-fuchsia-500/40 to-amber-400/50" />

        {steps.map((step, index) => (
          <motion.li
            key={step.title}
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
                {step.label}
              </p>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.body}
              </p>
            </div>

            {index === 0 && (
              <p className="mt-2 text-xs text-slate-500">
                Généralement en visio ou autour d’un bon café.
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const services = [
  {
    label: "Service 01",
    title: "Site vitrine premium",
    description:
      "Un site qui donne envie d’explorer, pas juste une carte de visite en ligne. Pensé pour votre image, vos mots et vos clients.",
    points: [
      "Structure claire & storytelling",
      "Design sur-mesure (pas de template)",
      "Responsive, rapide et accessible",
    ],
  },
  {
    label: "Service 02",
    title: "Expériences interactives",
    description:
      "Animations, transitions, micro-interactions : tout ce qui donne la sensation de produit “soigné” et mémorable.",
    points: [
      "Animations fluides (Framer Motion)",
      "Transitions de page et scroll maîtrisé",
      "Comportements adaptés au mobile",
    ],
  },
  {
    label: "Service 03",
    title: "Intégration frontend",
    description:
      "Vous avez déjà un design ? Je m’occupe de le transformer en interface vivante, propre, maintenable et fidèle au pixel près.",
    points: [
      "Intégration Next.js / React",
      "Respect strict des maquettes",
      "Code propre, documenté et extensible",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-title">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center mb-10"
      >
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          Services
        </p>
        <h2
          id="services-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          Ce que je peux faire
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            pour votre produit, votre marque, ou votre studio.
          </span>
        </h2>
      </motion.div>

      {/* Cartes de services */}
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
            className="
              group relative flex flex-col
              rounded-3xl border border-slate-200/80 bg-white/70
              backdrop-blur-md shadow-sm
              px-5 py-6 md:px-6 md:py-7
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            {/* Halo gradient */}
            <div
              className="
                pointer-events-none absolute inset-0 opacity-0
                group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-br from-violet-500/8 via-fuchsia-500/8 to-amber-400/8
              "
            />

            <div className="relative space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                {service.label}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            <ul className="relative mt-4 space-y-1.5 text-sm text-slate-600">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Petite pastille en bas */}
            <div className="relative mt-5 flex items-center justify-between text-xs text-slate-500">
              <span>Projet au forfait ou en régie.</span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-2 py-0.5">
                Sur devis
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
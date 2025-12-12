"use client";

import { motion } from "framer-motion";

type Lang = "en" | "fr";

export default function PricingSection() {
  // TODO: brancher sur ta logique globale de langue
  const lang: Lang = "en";

  const ui = {
    en: {
      kicker: "Pricing",
      title: "How I usually work on budget",
      subtitle:
        "Transparent ranges, then a precise quote once we know your scope.",
      oneOffLabel: "One-off projects",
      oneOffTagline: "Perfect for a clear scope: landing, site or product page.",
      oneOffNote: "Custom quote starting from:",
      monthlyLabel: "Monthly support",
      monthlyTagline:
        "For teams that ship often and need a front-end / motion partner.",
      monthlyNote: "Flexible retainer starting from:",
      currency: "€",
      oneOffServicesTitle: "Typical project types",
      monthlyServicesTitle: "What we do together",
      oneOffServices: [
        {
          name: "Essential site / refresh",
          desc: "Landing page or small site, modernised and clarified.",
          from: 900,
        },
        {
          name: "Premium product experience",
          desc: "Richer layout, bespoke modules and polished interactions.",
          from: 2400,
        },
        {
          name: "Brand-led experience",
          desc: "Custom storytelling, motion and advanced front-end.",
          from: 3900,
        },
      ],
      monthlyPlans: [
        {
          name: "Light",
          desc: "1 day per month for fixes, small modules and polish.",
          from: 600,
        },
        {
          name: "Studio",
          desc: "2–3 days per month for ongoing pages and experiments.",
          from: 1200,
        },
      ],
      disclaimer:
        "All prices are indicative and refined after a short call and a written scope.",
      ctaOneOff: "Book a call",
      ctaMonthly: "Discuss a retainer",
    },
    fr: {
      kicker: "Tarifs",
      title: "Comment je structure mes prix",
      subtitle:
        "Des fourchettes claires, puis un devis précis une fois le périmètre posé.",
      oneOffLabel: "Projet unique",
      oneOffTagline:
        "Parfait pour un besoin défini : landing, site vitrine ou page produit.",
      oneOffNote: "Sur devis à partir de :",
      monthlyLabel: "Accompagnement mensuel",
      monthlyTagline:
        "Pour les équipes qui publient souvent et veulent un partenaire front / motion.",
      monthlyNote: "Sur devis à partir de :",
      currency: "€",
      oneOffServicesTitle: "Types de projets fréquents",
      monthlyServicesTitle: "Ce qu’on fait ensemble",
      oneOffServices: [
        {
          name: "Site essentiel / refonte légère",
          desc: "Landing ou petit site, remis au goût du jour et clarifié.",
          from: 900,
        },
        {
          name: "Expérience produit premium",
          desc: "Mise en page plus riche, modules sur-mesure et interactions soignées.",
          from: 2400,
        },
        {
          name: "Expérience de marque complète",
          desc: "Storytelling, motion et front-end avancé pour une présence forte.",
          from: 3900,
        },
      ],
      monthlyPlans: [
        {
          name: "Forfait léger",
          desc: "1 jour par mois pour corrections, petits modules et finitions.",
          from: 600,
        },
        {
          name: "Mode studio",
          desc: "2–3 jours par mois pour nouvelles pages et expérimentations.",
          from: 1200,
        },
      ],
      disclaimer:
        "Ces montants sont indicatifs et adaptés après un court échange et un périmètre écrit.",
      ctaOneOff: "Réserver un call",
      ctaMonthly: "Parler d’un forfait",
    },
  }[lang];

  return (
    <section aria-labelledby="pricing-title" className="relative">
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
          id="pricing-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          {ui.title}
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            {ui.subtitle}
          </span>
        </h2>
      </motion.div>

      {/* 2 colonnes : one-off / monthly */}
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {/* One-off projects */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            relative flex flex-col
            rounded-3xl border border-slate-200/80 bg-white/75
            backdrop-blur-md shadow-sm
            px-6 py-7 md:px-7 md:py-8
            overflow-hidden
          "
        >
          {/* halo léger */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.14),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.16),transparent_60%)]" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 text-[11px] font-medium px-3 py-1 uppercase tracking-[0.16em]">
                  {ui.oneOffLabel}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {ui.oneOffTagline}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">{ui.oneOffNote}</p>
                <p className="text-2xl md:text-3xl font-semibold text-slate-900">
                  {lang === "en" ? "€900" : "900 €"}
                </p>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-2">
                {ui.oneOffServicesTitle}
              </p>
              <ul className="space-y-3">
                {ui.oneOffServices.map((service) => (
                  <li
                    key={service.name}
                    className="
                      flex items-start justify-between gap-3
                      rounded-2xl border border-slate-200/80 bg-white/80
                      px-3 py-3
                    "
                  >
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold text-slate-900">
                        {service.name}
                      </p>
                      <p className="text-[12px] text-slate-600 mt-0.5">
                        {service.desc}
                      </p>
                    </div>
                    <div className="pl-2 text-right">
                      <p className="text-[11px] text-slate-500">
                        {lang === "en" ? "From" : "À partir de"}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {service.from.toLocaleString("fr-FR")} {ui.currency}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
              <p className="max-w-[70%]">
                {ui.disclaimer}
              </p>
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center gap-1
                  rounded-full bg-slate-900 text-slate-50 px-3 py-1.5
                  text-[11px] font-medium
                  hover:bg-slate-800 transition
                "
              >
                {ui.ctaOneOff}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </motion.article>

        {/* Monthly support */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="
            relative flex flex-col
            rounded-3xl border border-slate-200/80 bg-white/75
            backdrop-blur-md shadow-sm
            px-6 py-7 md:px-7 md:py-8
            overflow-hidden
          "
        >
          {/* halo léger */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.14),transparent_55%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.18),transparent_60%)]" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 text-[11px] font-medium px-3 py-1 uppercase tracking-[0.16em]">
                  {ui.monthlyLabel}
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {ui.monthlyTagline}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">{ui.monthlyNote}</p>
                <p className="text-2xl md:text-3xl font-semibold text-slate-900">
                  {lang === "en" ? "€600/mo" : "600 €/mois"}
                </p>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-2">
                {ui.monthlyServicesTitle}
              </p>
              <ul className="space-y-3">
                {ui.monthlyPlans.map((plan) => (
                  <li
                    key={plan.name}
                    className="
                      flex items-start justify-between gap-3
                      rounded-2xl border border-slate-200/80 bg-white/80
                      px-3 py-3
                    "
                  >
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold text-slate-900">
                        {plan.name}
                      </p>
                      <p className="text-[12px] text-slate-600 mt-0.5">
                        {plan.desc}
                      </p>
                    </div>
                    <div className="pl-2 text-right">
                      <p className="text-[11px] text-slate-500">
                        {lang === "en" ? "From" : "À partir de"}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {plan.from.toLocaleString("fr-FR")} {ui.currency}
                        <span className="text-[11px] text-slate-500">
                          {lang === "en" ? "/mo" : "/mois"}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
              <p className="max-w-[70%]">
                {ui.disclaimer}
              </p>
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center gap-1
                  rounded-full bg-slate-900 text-slate-50 px-3 py-1.5
                  text-[11px] font-medium
                  hover:bg-slate-800 transition
                "
              >
                {ui.ctaMonthly}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
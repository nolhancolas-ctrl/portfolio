"use client";

import { motion } from "framer-motion";

type ContactSectionProps = {
  email?: string;
};

export default function ContactSection({
  email = "hello@votrenom.dev",
}: ContactSectionProps) {
  // TODO: brancher sur ta logique globale de langue
  const lang: "en" | "fr" = "en";

  const t = {
    en: {
      kicker: "Contact",
      titleLine1: "A project, an idea,",
      titleLine2: "or just a question.",
      nameLabel: "Name",
      namePlaceholder: "Your first name or full name",
      emailLabel: "E-mail",
      emailPlaceholder: "you@email.com",
      projectLabel: "Project",
      projectPlaceholder: "Redesign, marketing site, creative experiment…",
      messageLabel: "Message",
      messagePlaceholder:
        "Tell me a bit about your context, timeline and budget…",
      submit: "Send the message",
      mailAltPrefix: "or write to me directly at",
      rightTitle: "What happens after your message?",
      rightP1:
        "I read your message, look at your refs and make sure I’m a good fit for the project.",
      rightP2:
        "If it makes sense, I come back with 1–2 options and a few questions. You’ll usually get a reply within 48 hours.",
      rightListIntro: "I mostly work with:",
      rightItem1: "creative studios and independents",
      rightItem2: "brands that care about their online presence",
      rightItem3: "personal projects with a strong personality",
      submitIcon: "↗",
    },
    fr: {
      kicker: "Contact",
      titleLine1: "Un projet, une idée,",
      titleLine2: "ou juste une question à poser.",
      intro:
        "Explique-moi en quelques lignes ce que tu as en tête : une ref, un mood, un problème à résoudre. Je reviens vers toi avec des pistes concrètes.",
      nameLabel: "Nom",
      namePlaceholder: "Ton prénom ou ton nom",
      emailLabel: "E-mail",
      emailPlaceholder: "ton@email.com",
      projectLabel: "Projet",
      projectPlaceholder: "Refonte, site vitrine, expérimentation créative…",
      messageLabel: "Message",
      messagePlaceholder:
        "Parle-moi un peu de ton contexte, de tes délais, de ton budget…",
      submit: "Envoyer le message",
      mailAltPrefix: "ou m’écrire directement sur",
      rightTitle: "Comment ça se passe après ton message ?",
      rightP1:
        "Je lis ton message, je regarde tes refs s’il y en a et je vérifie que je suis la bonne personne pour ton projet.",
      rightP2:
        "Si ça colle, je reviens vers toi avec 1–2 directions possibles et quelques questions. Tu as généralement une réponse sous 48 h.",
      rightListIntro: "Je travaille principalement avec :",
      rightItem1: "studios créatifs et indépendants",
      rightItem2: "marques qui veulent soigner leur présence en ligne",
      rightItem3: "projets perso avec une forte identité",
      submitIcon: "↗",
    },
  }[lang];

  return (
    <section aria-labelledby="contact-title">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10 space-y-4"
      >
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          {t.kicker}
        </p>
        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          {t.titleLine1}
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            {t.titleLine2}
          </span>
        </h2>
      </motion.div>

      {/* Grille formulaire + bloc texte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]
          items-stretch
        "
      >
        {/* Formulaire */}
        <div
          className="
            rounded-3xl border border-slate-200/80 bg-white/70
            backdrop-blur-md shadow-sm
            px-6 py-7 md:px-7 md:py-8
          "
        >
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()} // à brancher plus tard
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  {t.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="
                    w-full rounded-xl border border-slate-200 bg-white/80
                    px-3 py-2.5 text-sm text-slate-900
                    outline-none focus:border-slate-900 focus:ring-0
                  "
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  {t.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="
                    w-full rounded-xl border border-slate-200 bg-white/80
                    px-3 py-2.5 text-sm text-slate-900
                    outline-none focus:border-slate-900 focus:ring-0
                  "
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            <div className="text-left">
              <label
                htmlFor="project"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
              >
                {t.projectLabel}
              </label>
              <input
                id="project"
                name="project"
                type="text"
                className="
                  w-full rounded-xl border border-slate-200 bg-white/80
                  px-3 py-2.5 text-sm text-slate-900
                  outline-none focus:border-slate-900 focus:ring-0
                "
                placeholder={t.projectPlaceholder}
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
              >
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="
                  w-full rounded-xl border border-slate-200 bg-white/80
                  px-3 py-2.5 text-sm text-slate-900
                  outline-none focus:border-slate-900 focus:ring-0
                  resize-none
                "
                placeholder={t.messagePlaceholder}
              />
            </div>

            {/* Bouton + lien email : même espace, centrés */}
            <div className="pt-3 grid gap-3 sm:grid-cols-2 sm:items-center">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full bg-slate-900 text-white text-sm font-medium
                    px-5 py-2.5
                    hover:bg-slate-800 transition
                  "
                >
                  {t.submit}
                  <span className="text-base" aria-hidden>
                    {t.submitIcon}
                  </span>
                </button>
              </div>
              <div className="flex justify-center">
                <a
                  href={`mailto:${email}`}
                  className="
                    text-xs text-slate-500 hover:text-slate-700
                    underline-offset-2 hover:underline
                    text-center
                  "
                >
                  {t.mailAltPrefix}{" "}
                  <span className="font-medium text-slate-700">
                    {email}
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Bloc texte / “how I answer” */}
        <div
          className="
            rounded-3xl border border-slate-200/80 bg-white/60
            backdrop-blur-md shadow-sm
            px-6 py-7 md:px-7 md:py-8
            flex flex-col justify-between gap-6 text-sm text-slate-700
          "
        >
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-semibold text-slate-900">
              {t.rightTitle}
            </h3>
            <p className="leading-relaxed">{t.rightP1}</p>
            <p className="leading-relaxed">
              <span className="mr-1" aria-hidden>
                ⏱
              </span>
              {t.rightP2}
            </p>
          </div>

          <div className="space-y-1 text-xs text-slate-500">
            <p>{t.rightListIntro}</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>{t.rightItem1}</li>
              <li>{t.rightItem2}</li>
              <li>{t.rightItem3}</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
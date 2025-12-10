"use client";

import { motion } from "framer-motion";

type ContactSectionProps = {
  email?: string;
};

export default function ContactSection({
  email = "hello@votrenom.dev",
}: ContactSectionProps) {
  return (
    <section aria-labelledby="contact-title">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10 space-y-4"
      >
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          Contact
        </p>
        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          Un projet, une idée,
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            ou juste une question à poser.
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed">
          Raconte-moi ce que tu as en tête : une ref, un mood, un problème à résoudre. 
          Je reviens vers toi rapidement avec des pistes concrètes.
        </p>
      </motion.div>

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
                  Nom
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
                  placeholder="Ton prénom ou ton nom"
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
                >
                  E-mail
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
                  placeholder="ton@email.com"
                />
              </div>
            </div>

            <div className="text-left">
              <label
                htmlFor="project"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
              >
                Projet
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
                placeholder="Refonte, site vitrine, expérimentation créative…"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-500 mb-1.5"
              >
                Message
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
                placeholder="Parle-moi un peu de ton contexte, de tes délais, de ton budget…"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-slate-900 text-white text-sm font-medium
                  px-5 py-2.5
                  hover:bg-slate-800 transition
                "
              >
                Envoyer le message
                <span className="text-base" aria-hidden>
                  ↗
                </span>
              </button>

              <a
                href={`mailto:${email}`}
                className="
                  text-xs text-slate-500 hover:text-slate-700
                  underline-offset-2 hover:underline
                "
              >
                ou m’écrire directement sur {email}
              </a>
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
              Comment ça se passe après ton message ?
            </h3>
            <p className="leading-relaxed">
              Je lis ton message (vraiment), je regarde tes refs si tu en as,
              puis je reviens vers toi avec quelques questions précises ou une
              première proposition de direction.
            </p>
            <p className="leading-relaxed">
              On peut ensuite prévoir un court call pour voir si le feeling est
              bon et si je suis la bonne personne pour ton projet.
            </p>
          </div>

          <div className="space-y-1 text-xs text-slate-500">
            <p>Je travaille principalement avec :</p>
            <ul className="list-disc list-inside">
              <li>studios créatifs et indépendants</li>
              <li>marques qui veulent soigner leur présence en ligne</li>
              <li>projets perso un peu fous, quand le timing s’y prête</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
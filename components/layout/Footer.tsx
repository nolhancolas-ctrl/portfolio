"use client";

import React from "react";
import { useLang } from "@/hooks/useLang";

type FooterProps = {
  className?: string;
  email?: string;
};

export default function Footer({
  className = "",
  email = "nolhan.colas@gmail.com",
}: FooterProps) {
  const year = new Date().getFullYear();
  const { lang } = useLang();

  const t = {
    en: {
      contactTitle: "A project, an idea? 💬",
      contactCTA: "Email me",
      elsewhereTitle: "Elsewhere on the web 🌍",
      github: "GitHub",
      linkedin: "LinkedIn",
      aboutTitle: "About 👋",
      aboutText: `Engineer graduated from CentraleSupélec, I spent several years at Alpine Cars designing and building web interfaces.
Today, I create modern, efficient websites in a wide range of technologies.`,
      rights: "All rights reserved.",
      mailAria: "Send me an email",
    },
    fr: {
      contactTitle: "Un projet, une idée ? 💬",
      contactCTA: "M’écrire",
      elsewhereTitle: "Ailleurs sur le web 🌍",
      github: "GitHub",
      linkedin: "LinkedIn",
      aboutTitle: "À propos 👋",
      aboutText: `Ingénieur diplômé de CentraleSupélec, j’ai passé plusieurs années chez Alpine Cars à concevoir et développer des interfaces web.
Aujourd’hui, je crée des sites modernes et efficaces, dans une grande variété de langages.`,
      rights: "Tous droits réservés.",
      mailAria: "Envoyer un mail",
    },
  }[lang];

  const gmailHref = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    email
  )}`;

  return (
    <footer
      data-site-footer
      className={`
        pt-10 relative z-20 
        bg-[#f7f5ef]/90 text-slate-800
        border-t border-black/5
        ${className}
      `}
      aria-labelledby="footer-title"
    >
      {/* Séparateur haut */}
      <div className="absolute top-0 left-5 right-5 h-px bg-black/10 rounded-full" />
      <div
        className="
          mx-auto max-w-6xl px-6 sm:px-10 lg:px-14
          [padding-block:clamp(2rem,5vw,5rem)]
        "
      >
        <div
          className="
            grid grid-cols-1 gap-6
            md:grid-cols-2 md:grid-rows-2 md:auto-rows-fr
          "
        >
          {/* 1️⃣ Contact */}
          <section
            className="
              rounded-2xl border border-black/10 bg-white/70
              backdrop-blur-md shadow-lg p-6 md:h-full
              flex flex-col items-center justify-center text-center gap-3
            "
          >
            <h3 className="text-xl font-medium tracking-tight">
              {t.contactTitle}
            </h3>
            <a
              href={gmailHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.mailAria}
              className="
                inline-flex items-center justify-center gap-2
                rounded-full border border-black/10 bg-white/90 shadow-sm
                px-3 py-1 hover:shadow-md transition hover:bg-white
              "
            >
              <span className="text-[12px] font-normal text-slate-800 tracking-wide">
                {t.contactCTA}
              </span>
              <span
                className="
                  inline-flex h-6 w-6 items-center justify-center
                  rounded-full border border-black/10 bg-black text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-3.5 w-3.5"
                  aria-hidden
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </a>
          </section>

          {/* 2️⃣ Ailleurs */}
          <section
            className="
              rounded-2xl border border-black/10 bg-white/70
              backdrop-blur-md shadow-lg p-6 md:h-full
              flex flex-col items-center justify-center text-center gap-4
            "
          >
            <h3 className="text-xl font-medium tracking-tight">
              {t.elsewhereTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="https://github.com/nolhancolas-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full border border-black/10 bg-white/90 shadow-sm
                  px-3 py-1 hover:shadow-md transition hover:bg-white
                  text-[12px] font-normal text-slate-800 tracking-wide
                "
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.7 5 .3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z" />
                </svg>
                {t.github}
              </a>
              <a
                href="https://www.linkedin.com/in/nolhan-colas-90394121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full border border-black/10 bg-white/90 shadow-sm
                  px-3 py-1 hover:shadow-md transition hover:bg-white
                  text-[12px] font-normal text-slate-800 tracking-wide
                "
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path d="M4.5 3A2.5 2.5 0 1 0 4.5 8 2.5 2.5 0 0 0 4.5 3ZM3 9h3v12H3zM10 9h3v1.8h.1A3.3 3.3 0 0 1 16.9 9C20 9 21 11 21 14.2V21h-3v-6.1c0-1.5-.5-2.6-1.8-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V21h-3z" />
                </svg>
                {t.linkedin}
              </a>
            </div>
          </section>

          {/* 3️⃣ About */}
          <section
            className="
              rounded-2xl border border-black/10 bg-white/70
              backdrop-blur-md shadow-lg p-8
              md:col-start-2 md:row-start-1 md:row-span-2 md:h-full
              flex flex-col justify-center text-justify
            "
          >
            <h3
              id="footer-title"
              className="text-xl font-medium tracking-tight mb-4 text-center"
            >
              {t.aboutTitle}
            </h3>
            <p className="text-slate-800/90 leading-relaxed whitespace-pre-line">
              {t.aboutText}
            </p>
          </section>
        </div>

        {/* Bas de page */}
        <div className="mt-8 pt-2 w-full flex items-center justify-center text-center text-xs text-slate-600">
          © {year} nolhan.dev. {t.rights}
        </div>
      </div>
    </footer>
  );
}
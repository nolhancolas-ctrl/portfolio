"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/hooks/useLang";

type Lang = "en" | "fr";

const LINKS = [
  { id: "hero", key: "hero", labelEn: "Intro", labelFr: "Intro" },
  { id: "styles", key: "styles", labelEn: "Styles", labelFr: "Styles" },
  { id: "process", key: "process", labelEn: "Process", labelFr: "Process" },
  { id: "services", key: "services", labelEn: "Services", labelFr: "Services" },
  { id: "pricing", key: "pricing", labelEn: "Pricing", labelFr: "Tarifs" },
  { id: "design", key: "design", labelEn: "Designs", labelFr: "Designs" },
  { id: "modules", key: "modules", labelEn: "Modules", labelFr: "Modules" },
  { id: "faq", key: "faq", labelEn: "FAQ", labelFr: "FAQ" },
  { id: "contact", key: "contact", labelEn: "Contact", labelFr: "Contact" },
];

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);

  const { lang, toggleLang } = useLang();

  const t = {
    en: { menu: "Menu", close: "Close", langToggle: "EN · FR" },
    fr: { menu: "Menu", close: "Fermer", langToggle: "FR · EN" },
  }[lang];

  // Observer la section #hero pour cacher le texte quand on scrolle
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setOpen(false);
  const showLabel = isHeroInView;

  const lineBase =
    "absolute h-[1.5px] w-3.5 rounded-full bg-white transition-transform duration-200 ease-out";

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-4 right-4 z-50"
    >
      <div className="relative">
        {/* Bouton hamburger */}
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          layout
          className="
            inline-flex items-center gap-2
            rounded-full bg-white/80 backdrop-blur-xl
            border border-slate-200/80 shadow-lg
            px-2 py-1.5 text-xs font-medium text-slate-900
            hover:bg-white hover:shadow-xl
            transition
          "
          aria-expanded={open}
          aria-haspopup="true"
        >
          {/* Icône dans un rond foncé */}
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
            <span
              className={`${lineBase} ${
                open ? "rotate-45 translate-y-0" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`${lineBase} ${
                open ? "scale-x-0" : "scale-x-100"
              }`}
            />
            <span
              className={`${lineBase} ${
                open ? "-rotate-45 translate-y-0" : "translate-y-[3px]"
              }`}
            />
          </span>
          {/* Texte avec fondu propre + largeur animée */}
          <motion.span
            className="hidden sm:inline"
            initial={false}
            animate={{
              opacity: showLabel ? 1 : 0,
              width: showLabel ? "auto" : 0,
              marginLeft: showLabel ? 6 : 0,
            }}
            style={{
              overflow: "hidden",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {open ? t.close : t.menu}
          </motion.span>
        </motion.button>

        {/* Menu déroulant */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="
                absolute right-0 mt-3
                w-fit min-w-[170px]
                rounded-2xl border border-slate-200/80
                bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden
              "
            >
              {/* Ligne langue */}
              <div className="flex items-center justify-center px-4 py-3 border-b border-slate-100">
                <button
                  type="button"
                  onClick={toggleLang}
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-slate-200 bg-slate-50
                    px-3 py-1 text-[11px] font-medium text-slate-800
                    hover:bg-slate-100 transition
                  "
                >
                  <span role="img" aria-hidden>
                    🌐
                  </span>
                  <span>{t.langToggle}</span>
                </button>
              </div>
              {/* Liens */}
              <ul className="py-2 text-sm text-slate-800">
                {LINKS.map((link) => (
                  <li key={link.key}>
                    <a
                      href={`#${link.id}`}
                      onClick={handleNavClick}
                      className="
                        flex items-center justify-center
                        px-4 py-2.5 hover:bg-slate-50
                        transition text-center
                      "
                    >
                      <span>
                        {lang === "en" ? link.labelEn : link.labelFr}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
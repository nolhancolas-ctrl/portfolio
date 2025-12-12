"use client";

import { useEffect, useState } from "react";

export default function Header() {
  // On part de true : au chargement, le hero est en vue, donc le header est caché
  const [isHeroInView, setIsHeroInView] = useState(true);

  // Observer la section #hero
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

  // Visible quand le hero n’est plus dans le viewport
  const visible = !isHeroInView;

  return (
    <header
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }
      `}
    >
      <div
        className="
          px-6 py-3
          bg-white/20 backdrop-blur-xl
          border border-white/30
          rounded-full shadow-lg 
          flex items-center gap-6
        "
      >
        <span className="font-semibold text-slate-900">
          nolhan.dev
        </span>
        <a
          href="#contact"
          className="
            px-5 py-2 rounded-full
            bg-white text-slate-900 font-medium 
            hover:bg-slate-100 transition
          "
        >
          Me contacter
        </a>
      </div>
    </header>
  );
}
"use client";

import Image from "next/image";
import { useLang } from "@/hooks/useLang";

export type DesignImage = {
  src: string;
  alt: string;
};

type DesignSectionClientProps = {
  images: DesignImage[];
};

export default function DesignSectionClient({ images }: DesignSectionClientProps) {
  const { lang } = useLang();

  const t = {
    en: {
      kicker: "Design gallery",
      title: "Landing page explorations",
    },
    fr: {
      kicker: "Galerie de designs",
      title: "Explorations de landing pages",
    },
  }[lang];

  // classes pour le layout asymétrique (7 images)
  const layoutClasses = [
    // 0 : visuel principal, large et haut
    "lg:col-span-2 lg:row-span-2",
    // 1 & 2 : standard
    "",
    "",
    // 3 : carte haute à droite
    "lg:row-span-2",
    // 4–6 : standard
    "",
    "",
    "",
  ];

  return (
    <section
      aria-labelledby="design-title"
      className="relative mt-16"
    >
      {/* Header */}
      <div className="space-y-4 text-center mb-10">
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          {t.kicker}
        </p>
        <h2
          id="design-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          {t.title}
        </h2>
      </div>

      {/* Grille asymétrique */}
      <div
        className="
          grid gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          auto-rows-[220px]
          sm:auto-rows-[260px]
          lg:auto-rows-[320px]
        "
      >
        {images.map((img, index) => (
          <article
            key={img.src}
            className={`
              relative group overflow-hidden
              rounded-3xl border border-slate-200/70 bg-white/5
              shadow-sm hover:shadow-xl
              transition-transform duration-500
              hover:-translate-y-1
              ${layoutClasses[index] ?? ""}
            `}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              {/* léger dégradé pour la lisibilité */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";

const STYLES = [
  {
    name: "Crimson Noise",
    label: "Rouge vibrant, brutalist, typé portfolio créatif.",
    base: "#FF4B5C",
  },
  {
    name: "Sunrise Glow",
    label: "Orange doux, chaleureux, très friendly.",
    base: "#FF9F1C",
  },
  {
    name: "Solar Bloom",
    label: "Jaune lumineux, pour des marques optimistes.",
    base: "#FFD60A",
  },
  {
    name: "Matcha Studio",
    label: "Vert calme, très “studio design / bien-être”.",
    base: "#2EC4B6",
  },
  {
    name: "Skyline UI",
    label: "Bleu clair, tech propre et précise.",
    base: "#3A86FF",
  },
  {
    name: "Indigo Frame",
    label: "Indigo profond, sérieux mais moderne.",
    base: "#4B5DFF",
  },
  {
    name: "Violet Pulse",
    label: "Violet expressif, pour interfaces plus artistiques.",
    base: "#9B5DE5",
  },
  {
    name: "Magenta Pop",
    label: "Magenta punchy, très expérimental.",
    base: "#FF006E",
  },
  {
    name: "Copper Grain",
    label: "Cuivré / beige, très éditorial, magazine.",
    base: "#B86B43",
  },
  {
    name: "Mono Grain",
    label: "Gris/noir minimal, ultra sobre, typographie d’abord.",
    base: "#111827",
  },
];

export default function StyleCarouselSection() {
  return (
    <section aria-labelledby="style-title" className="relative">
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 text-center mb-10"
      >
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          Style explorer
        </p>
        <h2
          id="style-title"
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
        >
          Choose your style
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            comme dans un rayon de pochettes bien rangées.
          </span>
        </h2>
      </motion.div>

      {/* Carousel coverflow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          className="w-full max-w-5xl"
          whileHover={{ scale: 0.9, y: 8 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <Swiper
            modules={[EffectCoverflow, Mousewheel]}
            effect="coverflow"
            centeredSlides
            loop
            grabCursor
            // super important pour que le scroll vertical sur la section fasse slider
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            coverflowEffect={{
              rotate: 40, // angle latéral
              stretch: 0,
              depth: 200, // profondeur
              modifier: 1,
              slideShadows: false,
            }}
            // responsive
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className="style-coverflow-swiper"
          >
            {STYLES.map((style, index) => (
              <SwiperSlide key={style.name}>
                <div className="flex h-[260px] sm:h-[300px] md:h-[340px] items-stretch justify-center">
                  <div
                    className="
                      relative w-[220px] sm:w-[260px] md:w-[280px]
                      rounded-3xl overflow-hidden
                      shadow-xl border border-white/60
                      bg-slate-900
                      flex
                    "
                    style={{
                      background: `
                        radial-gradient(circle at 20% 0%, rgba(255,255,255,0.7), transparent 55%),
                        radial-gradient(circle at 80% 100%, rgba(0,0,0,0.35), transparent 55%),
                        ${style.base}
                      `,
                    }}
                  >
                    {/* overlay “plastique” */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.25),transparent_40%,rgba(0,0,0,0.25))]" />

                    {/* contenu */}
                    <div className="relative flex-1 flex flex-col justify-between p-4 text-white">
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/75">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1} — style
                        </p>
                        <h3 className="text-lg font-semibold leading-tight">
                          {style.name}
                        </h3>
                        <p className="text-xs text-white/85">{style.label}</p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-white/80">
                        <span className="rounded-full bg-white/15 px-2 py-1">
                          Scroll / swipe
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1 w-6 rounded-full bg-white/60" />
                          <span className="h-1 w-3 rounded-full bg-white/40" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Sur ordinateur : scroll sur la section ou clique-glisse. Sur mobile : swipe
        pour faire défiler les pochettes.
      </p>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Studio Nova",
    role: "Site vitrine créatif",
    description:
      "Interface lumineuse, micro-interactions et storytelling pour un studio de design.",
    tags: ["Next.js", "Animations", "Design system"],
    href: "#",
  },
  {
    title: "Atlas Finance",
    role: "Dashboard analytique",
    description:
      "Visualisation claire de données complexes avec une expérience ultra fluide.",
    tags: ["React", "UI minimaliste", "Charts"],
    href: "#",
  },
  {
    title: "Echo Podcast",
    role: "Landing page immersive",
    description:
      "Mise en avant du son et du mouvement pour une marque autour de l’audio.",
    tags: ["Landing", "Motion", "Branding"],
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-6 mb-10 text-center"
      >
        <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
          Projets sélectionnés
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Des interfaces pensées pour être utilisées,
          <span className="block text-slate-500 text-lg mt-3 font-normal">
            pas seulement regardées.
          </span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            className="
              group relative flex flex-col justify-between
              rounded-3xl border border-slate-200/70 bg-white/60
              backdrop-blur-sm p-5 md:p-6
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {project.role}
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 group-hover:bg-slate-900 group-hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              className="
                mt-5 inline-flex items-center gap-1 text-sm font-medium
                text-slate-900 group-hover:text-slate-900/80
              "
            >
              Voir le projet
              <span
                className="
                  inline-block translate-x-0 group-hover:translate-x-0.5 
                  transition-transform
                "
              >
                →
              </span>
            </a>

            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-amber-500/5
                transition-opacity
              "
            />
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
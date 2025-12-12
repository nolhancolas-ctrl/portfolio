import fs from "fs";
import path from "path";
import ProjectsClient, { ProjectImage } from "./ProjectGraph";
import ProjectAgenda from "./ProjectAgenda";
import ProjectMonth from "./ProjectMonth";
import ProjectNotifications from "./ProjectNotifications";

function getProjectImages(): ProjectImage[] {
  const dir = path.join(process.cwd(), "public", "projects");
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) =>
      /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(file)
    )
    .sort();

  return files.map((file) => {
    const baseName = file.replace(/\.[^/.]+$/, "");
    const pretty = baseName
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const label =
      pretty.charAt(0).toUpperCase() + pretty.slice(1);

    return {
      src: `/projects/${file}`,
      alt: label || "Project visual",
    };
  });
}

export default function ProjectsSection() {
  const images = getProjectImages();

  return (
    <>
      <ProjectsClient images={images} />

      {/* Ligne 2 : Month + Notifications côte à côte */}
      <section
        aria-label="Agenda and notifications demos"
        className="grid gap-6 lg:grid-cols-2"
      >
        <div>
          <ProjectMonth />
        </div>
        <div>
          <ProjectNotifications />
        </div>
      </section>

      {/* Ligne 3 : Agenda semaine en plein largeur */}
      <ProjectAgenda />
    </>
  );
}
import ProjectsClient from "./ProjectGraph";
import ProjectAgenda from "./ProjectAgenda";
import ProjectMonth from "./ProjectMonth";
import ProjectNotifications from "./ProjectNotifications";

export default function ProjectsSection() {
  return (
    <>
      {/* Ligne 1 : carte graphique + (éventuels) visuels gérés dans ProjectsClient */}
      <ProjectsClient images={[]} />

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

      {/* Ligne 3 : Agenda semaine en pleine largeur */}
      <ProjectAgenda />
    </>
  );
}
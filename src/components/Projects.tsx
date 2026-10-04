import { projects, type Project } from "../data";
import { IconArrowUpRight, IconGitBranch } from "./icons";
import { Reveal, SectionHead, Tag } from "./ui";
import { cn } from "../utils/cn";

function ProjectCard({ project, big = false }: { project: Project; big?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-ink-900 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/45 hover:shadow-[0_28px_70px_rgba(0,0,0,0.5)]"
      )}
    >
      {/* visuel */}
      {project.img && (
        <div className={cn("relative overflow-hidden", big ? "aspect-[16/9]" : "aspect-[16/10]")}>
          <img
            src={project.img}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
          <span className="absolute right-3 top-3 rounded-[4px] border border-line bg-ink-950/85 px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-ember">
            {project.year}
          </span>
          {big && (
            <span className="absolute left-3 top-3 rounded-[4px] border border-mint/40 bg-ink-950/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mint">
              mission télécom
            </span>
          )}
          <div className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-mist/90">
            {project.meta}
          </div>
        </div>
      )}

      {/* contenu */}
      <div className="flex flex-1 flex-col p-6">
        {!project.img && (
          <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
            <span>{project.meta}</span>
            <span className="shrink-0 text-ember">{project.year}</span>
          </div>
        )}
        <h3
          className={cn(
            "font-display font-bold text-fog transition-colors duration-300 group-hover:text-ember",
            big ? "text-2xl" : "text-xl"
          )}
        >
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{project.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center justify-between border-t border-line-soft pt-4 font-mono text-xs uppercase tracking-[0.16em] text-mist transition-colors duration-300 hover:text-ember"
        >
          <span className="flex items-center gap-2">
            <IconGitBranch className="h-3.5 w-3.5" />
            Étude de cas sur demande
          </span>
          <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projets" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="04"
          kicker="travaux sélectionnés"
          title="Projets"
          desc="Six projets qui résument mon terrain de jeu : automatisation télécom, standards TM Forum, transport, éducation, logistique et santé."
        />

        {/* projets phares */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 110}>
              <ProjectCard project={project} big />
            </Reveal>
          ))}
        </div>

        {/* autres projets */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* pied de section */}
        <Reveal delay={200} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-lg border border-line bg-ink-900/70 px-7 py-6 md:flex-row">
            <p className="text-center font-mono text-sm text-mist md:text-left">
              <span className="text-ember">$</span> git log --oneline | head — d'autres dépôts sont disponibles sur demande.
            </p>
            <a
              href={projects[0] ? "#contact" : "#contact"}
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-md border border-ember/40 bg-ember/5 px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ember transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:text-ink-950"
            >
              Voir mon portfolio complet
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

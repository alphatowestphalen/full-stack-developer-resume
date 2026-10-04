import { experiences } from "../data";
import { IconBriefcase } from "./icons";
import { Reveal, SectionHead, Tag } from "./ui";
import { cn } from "../utils/cn";

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="03"
          kicker="parcours professionnel"
          title="Expérience"
          desc="Du secteur télécom à l'éducation en passant par la logistique restauration — des missions variées, un même niveau d'exigence."
        />

        <div className="mx-auto max-w-7xl">
          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {experiences.map((exp, i) => (
              <li key={`${exp.company}-${exp.period}`} className="rounded-md border border-line bg-ink-900/70 p-5 md:p-6">
                <Reveal delay={i * 60}>
                  {/* entête de l'entrée */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-[4px] border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em]",
                        exp.current ? "border-mint/40 bg-mint/5 text-mint" : "border-line bg-ink-900 text-mist"
                      )}
                    >
                      <IconBriefcase className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mint">
                        ● poste actuel
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-fog md:text-3xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 text-base text-mist">
                    <span className="font-semibold text-ember">{exp.company}</span>
                    {exp.note && <span className="text-dim"> — {exp.note}</span>}
                  </p>

                  {/* projets de la mission */}
                  <div className="mt-6 space-y-5">
                    {exp.projects.map((proj) => (
                      <article
                        key={proj.name}
                        className="group border-t border-line-soft pt-5 first:border-t-0 first:pt-0"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-display text-lg font-bold text-fog transition-colors duration-300 group-hover:text-ember md:text-xl">
                            <span className="mr-2 text-signal" aria-hidden="true">▸</span>
                            {proj.name}
                          </h4>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-mist md:text-[15px]">{proj.desc}</p>

                        <ul className="mt-5 space-y-2.5">
                          {proj.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-3 text-sm leading-relaxed text-mist">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-ember/70 transition-colors group-hover:bg-ember" aria-hidden="true" />
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2 border-t border-line-soft pt-5">
                          {proj.stack.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

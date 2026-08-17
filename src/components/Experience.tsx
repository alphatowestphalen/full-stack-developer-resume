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

        <div className="relative mx-auto max-w-5xl">
          {/* rail vertical */}
          <span
            className="absolute bottom-4 left-[8px] top-2 w-px bg-gradient-to-b from-ember via-line to-transparent md:left-[9px]"
            aria-hidden="true"
          />

          <ol className="space-y-14">
            {experiences.map((exp, i) => (
              <li key={`${exp.company}-${exp.period}`} className="relative pl-10 md:pl-14">
                {/* point du rail */}
                <span
                  className={cn(
                    "absolute left-0 top-1.5 grid h-[17px] w-[17px] place-items-center rounded-full border-2 md:h-[19px] md:w-[19px]",
                    exp.current ? "ping-soft border-mint bg-mint/30" : "border-ember bg-ink-950"
                  )}
                  aria-hidden="true"
                >
                  <span className={cn("h-[5px] w-[5px] rounded-full", exp.current ? "bg-mint" : "bg-ember")} />
                </span>

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
                        className="group rounded-lg border border-line bg-ink-900/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember/40 hover:bg-ink-850 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:p-7"
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

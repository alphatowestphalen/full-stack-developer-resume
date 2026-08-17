import { skillGroups } from "../data";
import { iconMap } from "./icons";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

const accentText: Record<string, string> = {
  ember: "text-ember",
  signal: "text-signal",
  mint: "text-mint",
};
const accentBg: Record<string, string> = {
  ember: "bg-ember",
  signal: "bg-signal",
  mint: "bg-mint",
};
const accentBorder: Record<string, string> = {
  ember: "hover:border-ember/50",
  signal: "hover:border-signal/50",
  mint: "hover:border-mint/50",
};

export default function Skills() {
  return (
    <section id="competences" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* -------- colonne sticky -------- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                index="02"
                kicker="stack technique"
                title="Compétences"
                desc="Un socle Java solide côté serveur, Angular côté interface — et tout l'écosystème pour livrer proprement : tests, CI/CD, conteneurs."
              />
              <Reveal delay={120}>
                <div className="-mt-4 rounded-lg border border-line bg-ink-900/70 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">niveau de maîtrise</p>
                  <div className="mt-4 space-y-2.5 font-mono text-xs text-mist">
                    <p className="flex items-center gap-2.5">
                      <span className="h-2 w-8 rounded-full bg-ember" /> 80 – 100 · quotidien
                    </p>
                    <p className="flex items-center gap-2.5">
                      <span className="h-2 w-8 rounded-full bg-signal" /> 65 – 79 · projets livrés
                    </p>
                    <p className="flex items-center gap-2.5">
                      <span className="h-2 w-8 rounded-full bg-mint" /> formation continue
                    </p>
                  </div>
                  <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-mist">
                    <span className="text-ember">$</span> La stack évolue chaque sprint —
                    la curiosité, elle, est en production depuis toujours.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* -------- groupes -------- */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {skillGroups.map((group, gi) => {
                const Icon = iconMap[group.icon];
                return (
                  <Reveal key={group.id} delay={gi * 70} className={cn(gi % 3 === 1 && "sm:translate-y-6")}>
                    <article
                      className={cn(
                        "group h-full rounded-lg border border-line bg-ink-900/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-ink-850 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
                        accentBorder[group.accent]
                      )}
                    >
                      <header className="flex items-center justify-between gap-3 border-b border-line-soft pb-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "grid h-10 w-10 place-items-center rounded-md border border-line bg-ink-850 transition-colors duration-500",
                              accentText[group.accent]
                            )}
                          >
                            {Icon && <Icon className="h-5 w-5" />}
                          </span>
                          <h3 className="font-display text-lg font-bold text-fog">{group.title}</h3>
                        </div>
                        <span className="font-mono text-[11px] text-dim">
                          {String(group.skills.length).padStart(2, "0")}
                        </span>
                      </header>

                      <ul className="mt-5 space-y-4">
                        {group.skills.map((skill) => (
                          <li key={skill.name} className="group/skill">
                            <div className="mb-1.5 flex items-baseline justify-between gap-3">
                              <span className="text-sm font-medium text-mist transition-colors duration-300 group-hover/skill:text-fog">
                                {skill.name}
                              </span>
                              <span className={cn("font-mono text-[11px]", accentText[group.accent])}>
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-[4px] overflow-hidden rounded-full bg-ink-800">
                              <div
                                className={cn("bar-fill h-full rounded-full", accentBg[group.accent])}
                                style={{ "--w": `${skill.level}%`, opacity: 0.9 } as React.CSSProperties}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

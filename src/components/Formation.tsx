import { education } from "../data";
import { IconCap, IconSeal, IconPin } from "./icons";
import { Reveal, SectionHead } from "./ui";

export default function Formation() {
  return (
    <section id="formation" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="05"
          kicker="apprentissage"
          title="Formation"
          desc="Formé à l'École Nationale d'Informatique de Fianarantsoa — là où la rigueur du génie logiciel rencontre les bases de données."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 110}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-line bg-ink-900/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint/45 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:p-8">
                {/* filigrane */}
                <span
                  className="pointer-events-none absolute -right-4 -top-7 select-none font-display text-[7.5rem] font-extrabold leading-none text-fog/[0.04] transition-colors duration-500 group-hover:text-mint/[0.07]"
                  aria-hidden="true"
                >
                  {edu.year}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-line bg-ink-850 text-mint transition-all duration-500 group-hover:border-mint/50 group-hover:bg-mint group-hover:text-ink-950">
                    {i === 0 ? <IconSeal className="h-6 w-6" /> : <IconCap className="h-6 w-6" />}
                  </span>
                  <span className="rounded-[4px] border border-line bg-ink-850 px-3 py-1.5 font-display text-lg font-bold text-ember">
                    {edu.year}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-bold leading-snug text-fog md:text-2xl">
                  {edu.degree}
                </h3>
                <p className="relative mt-2 text-sm font-medium text-ember-soft">{edu.field}</p>

                <div className="relative mt-6 space-y-2 border-t border-line-soft pt-5 text-sm text-mist">
                  <p className="flex items-center gap-2.5">
                    <IconCap className="h-4 w-4 shrink-0 text-mint" />
                    {edu.school}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <IconPin className="h-4 w-4 shrink-0 text-mint" />
                    {edu.place}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* veille techno */}
        <Reveal delay={220} className="mt-8">
          <div className="flex flex-col items-start gap-4 rounded-lg border border-dashed border-line bg-ink-900/40 px-7 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-dim">
                <span className="text-ember">$</span> formation_continue --status
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
                Veille permanente sur l'écosystème <span className="text-fog">Java / Spring</span>, les architectures
                <span className="text-fog"> cloud-native (Quarkus)</span> et les standards
                <span className="text-fog"> TM Forum</span> — parce qu'un diplôme est un point de départ, pas une release finale.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-md border border-ember/35 bg-ember/5 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
              <span className="ticker-pulse h-1.5 w-1.5 rounded-full bg-ember" />
              toujours en cours
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { profilParagraphs, profilHighlights, languages, interests, contact } from "../data";
import { iconMap, IconPin, IconCap, IconMail, IconCheck } from "./icons";
import { Reveal, SectionHead } from "./ui";

export default function About() {
  return (
    <section id="profil" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="01"
          kicker="qui suis-je"
          title="Profil"
          desc="Un ingénieur logiciel qui aime autant la rigueur du backend que le soin du frontend."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* -------- récit -------- */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-mist md:text-lg">
                {profilParagraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-ember" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-9">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-dim">
                <span className="text-signal">$</span> grep "points forts" profil.txt
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {profilHighlights.map((h, i) => (
                  <li
                    key={h}
                    className="group flex items-center gap-3 rounded-md border border-line bg-ink-900/60 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/50 hover:bg-ink-850"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-[4px] bg-ember/10 text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-ink-950">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-fog">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* langues */}
            <Reveal delay={180} className="mt-12">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-dim">
                <span className="text-mint">$</span> ./langues --list
              </p>
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name} className="group">
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-display text-lg font-bold text-fog transition-colors group-hover:text-ember">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-mist">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-[5px] overflow-hidden rounded-full bg-ink-800">
                      <div
                        className="bar-fill h-full rounded-full bg-gradient-to-r from-ember to-signal"
                        style={{ "--w": `${lang.pct}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* -------- carte d'identité -------- */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="group relative overflow-hidden rounded-lg border border-line bg-ink-900 transition-colors duration-500 hover:border-ember/40">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ember via-signal to-mint" />
                <div className="p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">carte d'identité</p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-fog">{contact.name}</h3>
                      <p className="mt-1 text-sm text-mist">{contact.role}</p>
                    </div>
                    <span className="grid h-14 w-20 place-items-center rounded-md border border-line bg-ink-850 font-display text-xl font-extrabold text-ember">
                      AW
                    </span>
                  </div>

                  <ul className="mt-7 space-y-4 border-t border-line pt-6 text-sm">
                    <li className="flex items-center gap-3 text-mist">
                      <IconPin className="h-4.5 w-4.5 shrink-0 text-ember" />
                      {contact.location}
                    </li>
                    <li className="flex items-center gap-3 text-mist">
                      <IconCap className="h-4.5 w-4.5 shrink-0 text-ember" />
                      Ingénieur en Informatique — ENI Fianarantsoa
                    </li>
                    <li className="flex items-center gap-3 text-mist">
                      <IconMail className="h-4.5 w-4.5 shrink-0 text-ember" />
                      <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-ember">
                        {contact.email}
                      </a>
                    </li>
                  </ul>

                  {/* centres d'intérêt */}
                  <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                    hors du clavier
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {interests.map((it) => {
                      const Icon = iconMap[it.icon];
                      return (
                        <span
                          key={it.label}
                          className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-850 px-3.5 py-2 font-mono text-xs text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/50 hover:text-mint"
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          {it.label}
                        </span>
                      );
                    })}
                  </div>

                  <a
                    href={`mailto:${contact.email}?subject=Demande%20de%20CV%20—%20Alphato%20Westphalen`}
                    className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-md border border-ember/40 bg-ember/5 px-5 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-ember transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:text-ink-950"
                  >
                    Demander mon CV complet
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* citation */}
            <Reveal delay={260} className="mt-6">
              <blockquote className="relative rounded-lg border border-line bg-ink-850/70 p-6">
                <span className="absolute -top-3 left-5 bg-ink-950 px-2 font-display text-3xl font-extrabold text-signal" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="text-sm leading-relaxed text-mist">
                  Automatiser ce qui est répétitif, tester ce qui est critique,
                  documenter ce qui sera repris — c'est ma définition d'un code qui dure.
                </p>
                <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
                  — ma règle des trois chantiers
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

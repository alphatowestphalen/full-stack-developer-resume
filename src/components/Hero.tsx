import { useEffect, useState } from "react";
import { stats } from "../data";
import { useScramble, useTerminal } from "../hooks";
import { IconArrowDown, IconArrowUpRight, IconJavaCup, IconShield, IconGitBranch } from "./icons";
import { cn } from "../utils/cn";

const termSteps = [
  { cmd: "whoami", out: ["alphato-westphalen"] },
  {
    cmd: "cat role.txt",
    out: ["Développeur Full Stack · Java (Spring Boot, Quarkus) & Angular"],
  },
  { cmd: "pwd", out: ["Ankorondrano, Antananarivo — Madagascar"] },
  {
    cmd: "./statut --disponibilite",
    out: ["● Ouvert aux opportunités — réponse sous 24h"],
  },
];

export default function Hero() {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [customCommands, setCustomCommands] = useState<Array<{ cmd: string; out: string[] }>>([]);
  const line1 = useScramble("ALPHATO", play1);
  const line2 = useScramble("WESTPHALEN", play2);
  const { state, done } = useTerminal(termSteps, 700);

  const handleCommand = (cmd: string) => {
    const commands: Record<string, string[]> = {
      "./contact": ["Redirection vers la section contact..."],
      "./projets": ["Redirection vers la section projets..."],
      "./profil": ["Redirection vers le profil..."],
      "./competences": ["Redirection vers les compétences..."],
      "./experience": ["Redirection vers l'expérience..."],
      "./formation": ["Redirection vers la formation..."],
      "help": [
        "Commandes disponibles:",
        "  ./contact      - Aller à la section contact",
        "  ./projets      - Voir mes projets",
        "  ./profil       - Voir mon profil",
        "  ./competences  - Voir mes compétences",
        "  ./experience   - Voir mon expérience",
        "  ./formation    - Voir ma formation",
        "  clear          - Nettoyer le terminal"
      ],
      "clear": []
    };

    const output = commands[cmd] || [`Commande non reconnue: ${cmd}. Tapez 'help' pour l'aide.`];
    
    if (cmd === "clear") {
      setCustomCommands([]);
    } else {
      setCustomCommands(prev => [...prev, { cmd, out: output }]);
      
      // Navigation
      const sectionMap: Record<string, string> = {
        "./contact": "contact",
        "./projets": "projets",
        "./profil": "profil",
        "./competences": "competences",
        "./experience": "experience",
        "./formation": "formation"
      };
      
      if (sectionMap[cmd]) {
        setTimeout(() => {
          const element = document.getElementById(sectionMap[cmd]);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    }
    
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentInput.trim()) {
      handleCommand(currentInput.trim());
    }
  };

  useEffect(() => {
    const t1 = setTimeout(() => setPlay1(true), 150);
    const t2 = setTimeout(() => setPlay2(true), 550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden pb-8 pt-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        {/* ------------------------- colonne gauche ------------------------- */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-mist md:text-sm">
            <span className="text-ember">//</span> portfolio — {new Date().getFullYear()} · Antananarivo, MG
          </p>

          <h1 className="mt-6 font-display font-extrabold uppercase leading-[0.94] tracking-tight">
            <span className="block text-[13.5vw] text-fog sm:text-7xl lg:text-[5.6rem] xl:text-[6.6rem]">
              {line1 || "\u00A0"}
            </span>
            <span className="text-outline-ember block text-[13.5vw] sm:text-7xl lg:text-[5.6rem] xl:text-[6.6rem]">
              {line2 || "\u00A0"}
            </span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="font-display text-xl font-bold text-fog md:text-2xl">
              Développeur Full Stack
            </span>
            <span className="inline-flex items-center gap-2 rounded-[4px] border border-ember/40 bg-ember/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-ember">
              <IconJavaCup className="h-4 w-4" /> Java
            </span>
            <span className="font-mono text-dim">&amp;</span>
            <span className="inline-flex items-center gap-2 rounded-[4px] border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-signal">
              <IconShield className="h-4 w-4" /> Angular
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
            Je conçois des applications web et mobiles <em className="not-italic text-fog">performantes et sécurisées</em> —
            des API RESTful conformes aux standards télécom jusqu'aux interfaces Angular,
            avec une obsession : la qualité du code et des tests.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projets"
              className="group inline-flex items-center gap-2.5 rounded-md bg-ember px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-ink-950 shadow-[0_8px_30px_rgba(248,152,32,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-soft hover:shadow-[0_14px_40px_rgba(248,152,32,0.35)]"
            >
              Explorer mes projets
              <IconArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-md border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-fog transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-signal"
            >
              Me contacter
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* stats */}
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <dt className="order-2 font-mono text-[10px] uppercase tracking-[0.18em] text-dim transition-colors group-hover:text-mist">
                  {s.label}
                </dt>
                <dd className="font-display text-3xl font-bold text-fog transition-colors duration-300 group-hover:text-ember md:text-4xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ------------------------- colonne droite : terminal ------------------------- */}
        <div className="relative mt-10 mr-0 ml-0 lg:mt-[304px] lg:mr-[-94px] lg:ml-[37px] lg:col-span-5">
          {/* badges flottants */}
          <div className="floaty absolute -top-7 left-2 z-10 hidden items-center gap-2 rounded-md border border-ember/40 bg-ink-850 px-3 py-2 font-mono text-xs text-ember shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:flex">
            <IconJavaCup className="h-4 w-4" /> Spring Boot · Quarkus
          </div>
          <div className="floaty-slow absolute -right-2 top-24 z-10 hidden items-center gap-2 rounded-md border border-signal/40 bg-ink-850 px-3 py-2 font-mono text-xs text-signal shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:flex">
            <IconShield className="h-4 w-4" /> Angular · NgRx
          </div>
          <div className="floaty absolute -bottom-5 left-8 z-10 hidden items-center gap-2 rounded-md border border-mint/40 bg-ink-850 px-3 py-2 font-mono text-xs text-mint shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:flex">
            <IconGitBranch className="h-4 w-4" /> GitLab CI · Docker
          </div>

          <div className="relative rounded-lg border border-line bg-ink-900 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            {/* barre de titre */}
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-signal/80" />
              <span className="h-3 w-3 rounded-full bg-ember/80" />
              <span className="h-3 w-3 rounded-full bg-mint/80" />
              <span className="ml-3 truncate font-mono text-[11px] text-dim">
                alphato@antananarivo: ~/portfolio
              </span>
            </div>

            {/* corps du terminal */}
            <div className="min-h-[280px] space-y-3 p-5 font-mono text-[13px] leading-relaxed md:p-6">
              {state.map((step, i) => {
                const isTyping = !done && i === state.length - 1 && step.out.length === 0;
                return (
                  <div key={i}>
                    <p className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-ember">$</span>
                      <span className="text-fog">{step.cmd}</span>
                      {isTyping && <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-mint" />}
                    </p>
                    {step.out.map((line, j) => (
                      <p
                        key={j}
                        className={cn(
                          "pl-4",
                          line.startsWith("●") ? "text-mint" : j === 0 && i === 0 ? "font-semibold text-ember-soft" : "text-mist"
                        )}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              })}

              {/* Commandes personnalisées de l'utilisateur */}
              {customCommands.map((cmd, i) => (
                <div key={`custom-${i}`}>
                  <p className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-ember">$</span>
                    <span className="text-fog">{cmd.cmd}</span>
                  </p>
                  {cmd.out.map((line, j) => (
                    <p
                      key={j}
                      className={cn(
                        "pl-4",
                        line.startsWith("Redirection") ? "text-mint" : line.startsWith("Commandes") ? "text-signal" : line.startsWith("  ./") ? "text-mist" : "text-mist"
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}

              {done && (
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-ember">$</span>
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tapez une commande..."
                    className="flex-1 bg-transparent text-fog outline-none placeholder-dim focus:outline-none"
                    autoFocus
                  />
                  {!currentInput && <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-mint" />}
                </div>
              )}
            </div>

            {/* pied du terminal */}
            <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
              <span>bash — 80×24</span>
              <span className="flex items-center gap-1.5">
                <span className="ticker-pulse h-1.5 w-1.5 rounded-full bg-mint" />
                utf-8 · mg
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* indicateur de scroll */}
      <a
        href="#profil"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-dim transition-colors hover:text-ember md:flex"
        aria-label="Aller à la section profil"
      >
        scroll
        <IconArrowDown className="ticker-pulse h-4 w-4" />
      </a>
    </section>
  );
}

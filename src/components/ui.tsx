import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks";
import { marqueeItems } from "../data";
import { IconSpark } from "./icons";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Reveal : apparition au scroll                                      */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "is-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  En-tête de section                                                 */
/* ------------------------------------------------------------------ */
export function SectionHead({
  index,
  title,
  kicker,
  desc,
}: {
  index: string;
  title: string;
  kicker?: string;
  desc?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-ember">{index}</span>
        {kicker && (
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-dim">
            {kicker}
          </span>
        )}
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-fog md:text-6xl">
        {title}
      </h2>
      {desc && <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{desc}</p>}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Étiquette technique                                                */
/* ------------------------------------------------------------------ */
export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "ember" | "mint" | "signal" }) {
  const tones = {
    default: "border-line text-mist group-hover:border-ember/40 group-hover:text-fog",
    ember: "border-ember/35 text-ember",
    mint: "border-mint/35 text-mint",
    signal: "border-signal/35 text-signal",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border bg-ink-800/70 px-2.5 py-1 font-mono text-[11px] tracking-wide transition-colors duration-300",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Bandeau défilant de technologies                                   */
/* ------------------------------------------------------------------ */
export function StackMarquee({ reverse = false }: { reverse?: boolean }) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {marqueeItems.map((item, i) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span
            className={cn(
              "whitespace-nowrap px-6 font-mono text-sm uppercase tracking-[0.18em]",
              i % 3 === 0 ? "text-ember" : i % 3 === 1 ? "text-fog/80" : "text-mist/70"
            )}
          >
            {item}
          </span>
          <IconSpark className="h-3.5 w-3.5 text-signal/70" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-ink-900/70 py-3.5">
      <div className={cn("marquee-track flex w-max", reverse && "reverse")}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Style helper pour délais                                           */
/* ------------------------------------------------------------------ */
export const stagger = (i: number): CSSProperties => ({ transitionDelay: `${i * 70}ms` });

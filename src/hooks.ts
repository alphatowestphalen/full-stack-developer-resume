import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Préférence de mouvement réduit                                     */
/* ------------------------------------------------------------------ */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ------------------------------------------------------------------ */
/*  Révélation au scroll                                               */
/* ------------------------------------------------------------------ */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

/* ------------------------------------------------------------------ */
/*  Effet scramble / décodage                                          */
/* ------------------------------------------------------------------ */
const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#";

export function useScramble(target: string, play: boolean) {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(reduced ? target : "");
  useEffect(() => {
    if (!play) return;
    if (reduced) {
      setOut(target);
      return;
    }
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const progress = frame / 2.4;
      const next = target
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < progress) return ch;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");
      setOut(next);
      if (progress < target.length) {
        raf = requestAnimationFrame(tick);
      } else {
        setOut(target);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, play, reduced]);
  return out;
}

/* ------------------------------------------------------------------ */
/*  Session de terminal tapée                                          */
/* ------------------------------------------------------------------ */
export type TermStep = { cmd: string; out: string[] };

export function useTerminal(steps: TermStep[], startDelay = 500, typeSpeed = 34) {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState<{ cmd: string; out: string[] }[]>(() =>
    reduced ? steps.map((s) => ({ cmd: s.cmd, out: s.out })) : []
  );
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    let alive = true;
    const timers: number[] = [];
    let cursor = startDelay;

    steps.forEach((step, si) => {
      for (let c = 1; c <= step.cmd.length; c++) {
        timers.push(
          window.setTimeout(() => {
            if (!alive) return;
            setState((prev) => {
              const next = [...prev];
              while (next.length <= si) next.push({ cmd: "", out: [] });
              next[si] = { cmd: step.cmd.slice(0, c), out: [] };
              return next;
            });
          }, cursor + c * typeSpeed)
        );
      }
      cursor += step.cmd.length * typeSpeed + 320;
      timers.push(
        window.setTimeout(() => {
          if (!alive) return;
          setState((prev) => {
            const next = [...prev];
            next[si] = { cmd: step.cmd, out: step.out };
            return next;
          });
        }, cursor)
      );
      cursor += 300;
    });

    timers.push(window.setTimeout(() => alive && setDone(true), cursor + 250));
    return () => {
      alive = false;
      timers.forEach((t) => window.clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return { state, done };
}

/* ------------------------------------------------------------------ */
/*  Scroll-spy pour la navigation                                      */
/* ------------------------------------------------------------------ */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 170) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

/* ------------------------------------------------------------------ */
/*  Position de scroll (nav compacte + barre de progression)           */
/* ------------------------------------------------------------------ */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { progress, scrolled };
}

import { useState } from "react";
import { navLinks, contact } from "../data";
import { useScrollProgress, useScrollSpy } from "../hooks";
import { IconMenu, IconX } from "./icons";
import { cn } from "../utils/cn";

const spyIds = ["accueil", ...navLinks.map((l) => l.id)];

export default function Nav() {
  const { progress, scrolled } = useScrollProgress();
  const active = useScrollSpy(spyIds);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-line bg-ink-950/92 shadow-[0_10px_40px_rgba(0,0,0,0.45)]" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* logo prompt */}
        <a href="#accueil" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-ink-800 font-display text-sm font-bold text-ember transition-colors duration-300 group-hover:border-ember/60 group-hover:text-ember-soft">
            AW
          </span>
          <span className="hidden font-mono text-sm sm:block">
            <span className="text-ember">alphato</span>
            <span className="text-dim">@</span>
            <span className="text-fog">dev</span>
            <span className="text-dim">:~$</span>
            <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-mint" aria-hidden="true" />
          </span>
        </a>

        {/* liens desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "group relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300",
                  active === link.id ? "text-ember" : "text-mist hover:text-fog"
                )}
              >
                <span className="mr-1 text-dim transition-colors duration-300 group-hover:text-ember">
                  {active === link.id ? "▸" : "//"}
                </span>
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-ember transition-all duration-300",
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md border border-mint/30 bg-mint/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mint transition-all duration-300 hover:border-mint/60 hover:bg-mint/10 md:inline-flex"
          >
            <span className="ping-soft h-1.5 w-1.5 rounded-full bg-mint" />
            Disponible
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-line text-fog transition-colors hover:border-ember/60 hover:text-ember lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* barre de progression de lecture */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-ember via-signal to-ember transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* menu mobile */}
      <div
        className={cn(
          "grid overflow-hidden border-b border-line bg-ink-950/97 transition-all duration-400 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-b-0 opacity-0"
        )}
      >
        <ul className="min-h-0 overflow-hidden px-5 py-2">
          {navLinks.map((link, i) => (
            <li key={link.id} className="border-b border-line-soft last:border-b-0">
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between py-3.5 font-mono text-sm uppercase tracking-[0.16em] transition-colors",
                  active === link.id ? "text-ember" : "text-mist hover:text-fog"
                )}
              >
                <span>
                  <span className="mr-2 text-dim">0{i + 1}</span>
                  {link.label}
                </span>
                <span className="text-dim">→</span>
              </a>
            </li>
          ))}
          <li className="py-3.5">
            <a href={`mailto:${contact.email}`} className="font-mono text-xs text-mint">
              {contact.email}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

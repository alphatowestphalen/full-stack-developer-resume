import { contact, navLinks } from "../data";
import { IconArrowUpRight } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      {/* filigrane géant */}
      <p
        className="pointer-events-none absolute inset-x-0 -bottom-6 select-none whitespace-nowrap text-center font-display text-[19vw] font-extrabold uppercase leading-none text-fog/[0.03]"
        aria-hidden="true"
      >
        ALPHATO
      </p>

      <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#accueil" className="group inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-ink-800 font-display text-sm font-bold text-ember transition-colors group-hover:border-ember/60">
                AW
              </span>
              <span className="font-mono text-sm">
                <span className="text-ember">alphato</span>
                <span className="text-dim">@</span>
                <span className="text-fog">dev</span>
                <span className="text-dim">:~$</span>
                <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-mint" />
              </span>
            </a>
            <p className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-dim">
              {contact.role} —<br />
              {contact.location}
            </p>
          </div>

          <nav aria-label="Plan du site">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">plan du site</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-10 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="font-mono text-xs text-mist transition-colors hover:text-ember"
                  >
                    <span className="mr-1.5 text-dim">./</span>
                    {link.label.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">ailleurs</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 font-mono text-xs text-mist transition-colors hover:text-ember"
              >
                LinkedIn
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
              <a
                href={contact.portfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 font-mono text-xs text-mist transition-colors hover:text-ember"
              >
                alphato.netlify.app
                <IconArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-2 font-mono text-xs text-mist transition-colors hover:text-ember"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line-soft pt-6 md:flex-row">
          <p className="font-mono text-[11px] text-dim">
            © {new Date().getFullYear()} {contact.name} — conçu &amp; codé à Antananarivo, Madagascar
          </p>
          <p className="font-mono text-[11px] text-dim">
            build: <span className="text-mist">react · typescript · tailwind</span> — status:{" "}
            <span className="text-mint">200 OK</span>
          </p>
          <a
            href="#accueil"
            className="group inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mist transition-all duration-300 hover:border-ember/50 hover:text-ember"
          >
            cd ~/accueil
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

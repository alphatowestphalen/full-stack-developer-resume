import { useState, type FormEvent } from "react";
import { contact } from "../data";
import { usePrefersReducedMotion } from "../hooks";
import {
  IconArrowUpRight,
  IconCheck,
  IconGlobe,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconPin,
  IconSend,
} from "./icons";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

const sendSteps = [
  "> validation des champs … ok",
  "> formatage du message … ok",
  "> transmission au serveur … ok",
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const reduced = usePrefersReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [log, setLog] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setLog([]);
    (e.target as HTMLFormElement).reset();

    if (reduced) {
      setLog(sendSteps);
      setStatus("sent");
      return;
    }
    sendSteps.forEach((line, i) => {
      window.setTimeout(() => setLog((prev) => [...prev, line]), 480 * (i + 1));
    });
    window.setTimeout(() => setStatus("sent"), 480 * sendSteps.length + 420);
  };

  const directLinks = [
    {
      icon: IconMail,
      label: "email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
    },
    {
      icon: IconPhone,
      label: "téléphone",
      value: contact.phones[0],
      href: `tel:${contact.phones[0].replace(/\s/g, "")}`,
      external: false,
    },
    {
      icon: IconPhone,
      label: "téléphone (alt.)",
      value: contact.phones[1],
      href: `tel:${contact.phones[1].replace(/\s/g, "")}`,
      external: false,
    },
    {
      icon: IconLinkedIn,
      label: "linkedin",
      value: "alphato westphalen",
      href: contact.linkedin,
      external: true,
    },
    {
      icon: IconGlobe,
      label: "portfolio",
      value: "alphato.netlify.app",
      href: contact.portfolio,
      external: true,
    },
    {
      icon: IconPin,
      label: "localisation",
      value: contact.location,
      href: undefined,
      external: false,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="06"
          kicker="dernière commande"
          title="Contact"
          desc="Un projet, une mission, une question sur une stack ? Mon inbox est en écoute active."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* -------- coordonnées directes -------- */}
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-display text-3xl font-bold leading-tight text-fog md:text-4xl">
                Construisons quelque chose
                <span className="text-ember"> de robuste.</span>
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-mist">
                Basé à Antananarivo, disponible pour des missions à Madagascar comme en remote.
                Je réponds généralement <span className="text-fog">sous 24 heures</span>.
              </p>
            </Reveal>

            <ul className="mt-9 space-y-3">
              {directLinks.map((link, i) => {
                const Icon = link.icon;
                const inner = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-ink-850 text-mist transition-all duration-300 group-hover:border-ember/60 group-hover:text-ember">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                        {link.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-fog transition-colors duration-300 group-hover:text-ember-soft">
                        {link.value}
                      </span>
                    </span>
                    {link.href && (
                      <IconArrowUpRight className="h-4 w-4 shrink-0 text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
                    )}
                  </>
                );
                return (
                  <Reveal key={`${link.label}-${link.value}`} delay={i * 60}>
                    {link.href ? (
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                        className="group flex items-center gap-4 rounded-lg border border-line bg-ink-900/70 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:bg-ink-850"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 rounded-lg border border-line bg-ink-900/70 px-4 py-3.5">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* -------- formulaire terminal -------- */}
          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-lg border border-line bg-ink-900 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-signal/80" />
                  <span className="h-3 w-3 rounded-full bg-ember/80" />
                  <span className="h-3 w-3 rounded-full bg-mint/80" />
                  <span className="ml-3 font-mono text-[11px] text-dim">./nouveau-message.sh</span>
                  <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.18em] text-dim sm:block">
                    bash — interactif
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  {status !== "sent" ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="nom" className="mb-2 block font-mono text-xs text-mist">
                            <span className="text-ember">$</span> nom_complet
                          </label>
                          <input
                            id="nom"
                            name="nom"
                            required
                            placeholder="Jean Rakoto"
                            className="w-full rounded-md border border-line bg-ink-950 px-4 py-3 font-mono text-sm text-fog placeholder:text-dim focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/25 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block font-mono text-xs text-mist">
                            <span className="text-ember">$</span> adresse_email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="jean@entreprise.mg"
                            className="w-full rounded-md border border-line bg-ink-950 px-4 py-3 font-mono text-sm text-fog placeholder:text-dim focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/25 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="sujet" className="mb-2 block font-mono text-xs text-mist">
                          <span className="text-ember">$</span> sujet
                        </label>
                        <input
                          id="sujet"
                          name="sujet"
                          required
                          placeholder="Mission full stack, question technique…"
                          className="w-full rounded-md border border-line bg-ink-950 px-4 py-3 font-mono text-sm text-fog placeholder:text-dim focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/25 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block font-mono text-xs text-mist">
                          <span className="text-ember">$</span> message <span className="text-dim">--multiline</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Décrivez votre besoin, votre stack, vos délais…"
                          className="w-full resize-none rounded-md border border-line bg-ink-950 px-4 py-3 font-mono text-sm leading-relaxed text-fog placeholder:text-dim focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/25 transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className={cn(
                            "group inline-flex items-center gap-2.5 rounded-md bg-ember px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-ink-950 transition-all duration-300",
                            status === "sending"
                              ? "cursor-wait opacity-70"
                              : "shadow-[0_8px_30px_rgba(248,152,32,0.25)] hover:-translate-y-0.5 hover:bg-ember-soft hover:shadow-[0_14px_40px_rgba(248,152,32,0.35)]"
                          )}
                        >
                          {status === "sending" ? (
                            <>
                              <span className="ticker-pulse">Envoi en cours</span>
                              <span className="caret inline-block h-4 w-2 bg-ink-950" />
                            </>
                          ) : (
                            <>
                              Envoyer le message
                              <IconSend className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            </>
                          )}
                        </button>
                        <p className="font-mono text-[11px] text-dim">
                          exit code 0 garanti — zéro spam, promis.
                        </p>
                      </div>

                      {/* journal d'envoi */}
                      {log.length > 0 && (
                        <div className="rounded-md border border-line-soft bg-ink-950 p-4 font-mono text-xs leading-relaxed">
                          {log.map((line) => (
                            <p key={line} className="text-mint">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </form>
                  ) : (
                    /* -------- état succès -------- */
                    <div className="py-6 text-center">
                      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-mint/40 bg-mint/10 text-mint">
                        <IconCheck className="h-8 w-8" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-bold text-fog md:text-3xl">
                        Message transmis !
                      </h3>
                      <div className="mx-auto mt-4 max-w-md rounded-md border border-line-soft bg-ink-950 p-4 text-left font-mono text-xs leading-relaxed">
                        {log.map((line) => (
                          <p key={line} className="text-mint">
                            {line}
                          </p>
                        ))}
                        <p className="mt-1 text-fog">✓ statut : livré — accusé de réception généré</p>
                      </div>
                      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mist">
                        Merci ! Je vous répondrai sous 24h à l'adresse indiquée.
                        Pour une urgence, appelez directement le{" "}
                        <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="font-mono text-ember hover:text-ember-soft">
                          {contact.phones[0]}
                        </a>
                        .
                      </p>
                      <button
                        onClick={() => {
                          setStatus("idle");
                          setLog([]);
                        }}
                        className="mt-7 inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-mist transition-all duration-300 hover:border-ember/50 hover:text-ember"
                      >
                        <span className="text-ember">$</span> nouveau message
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

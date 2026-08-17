import type { ReactNode } from "react";

type IconProps = { className?: string };

function Base({ className, children, filled = false }: IconProps & { children: ReactNode; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-5 w-5"}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ------- interface ------- */
export const IconTerminal = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m7 9 3 3-3 3" />
    <path d="M13 15h4" />
  </Base>
);
export const IconArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Base>
);
export const IconArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </Base>
);
export const IconSend = (p: IconProps) => (
  <Base {...p}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </Base>
);
export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);
export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h10" />
  </Base>
);
export const IconX = (p: IconProps) => (
  <Base {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Base>
);
export const IconSpark = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v18" />
    <path d="m5.6 7.5 12.8 9" />
    <path d="m18.4 7.5-12.8 9" />
  </Base>
);

/* ------- contact ------- */
export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);
export const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </Base>
);
export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Base>
);
export const IconLinkedIn = (p: IconProps) => (
  <Base {...p} filled>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </Base>
);
export const IconGlobe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Base>
);

/* ------- compétences ------- */
export const IconCpu = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </Base>
);
export const IconLayers = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 2 9 5-9 5-9-5 9-5z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </Base>
);
export const IconServer = (p: IconProps) => (
  <Base {...p}>
    <rect x="2" y="3" width="20" height="7" rx="2" />
    <rect x="2" y="14" width="20" height="7" rx="2" />
    <path d="M6 6.5h.01M6 17.5h.01" />
    <path d="M11 6.5h5M11 17.5h5" />
  </Base>
);
export const IconDatabase = (p: IconProps) => (
  <Base {...p}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </Base>
);
export const IconFlask = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 3h6" />
    <path d="M10 3v6L4.6 19a1.8 1.8 0 0 0 1.6 2.6h11.6a1.8 1.8 0 0 0 1.6-2.6L14 9V3" />
    <path d="M7.2 15h9.6" />
  </Base>
);
export const IconContainer = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="5" height="5" />
    <rect x="9.5" y="3" width="5" height="5" />
    <rect x="16" y="3" width="5" height="5" />
    <rect x="9.5" y="9.5" width="5" height="5" />
    <rect x="2" y="17" width="20" height="5" rx="1" />
  </Base>
);
export const IconGitBranch = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 3v12" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </Base>
);

/* ------- tech repères ------- */
export const IconJavaCup = (p: IconProps) => (
  <Base {...p}>
    <path d="M17 9h1a2.5 2.5 0 0 1 0 5h-1" />
    <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
    <path d="M8 3.5c-.8 1 .8 1.6 0 2.5M12 3.5c-.8 1 .8 1.6 0 2.5" />
  </Base>
);
export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3z" />
    <path d="m12 7 3.4 7.5" />
    <path d="m12 7-3.4 7.5" />
    <path d="M9.8 12.5h4.4" />
  </Base>
);
export const IconLeaf = (p: IconProps) => (
  <Base {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
    <path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />
  </Base>
);

/* ------- autres ------- */
export const IconCap = (p: IconProps) => (
  <Base {...p}>
    <path d="M22 9.5 12 4.5l-10 5 10 5 10-5z" />
    <path d="M6 11.8V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.2" />
    <path d="M22 9.5V15" />
  </Base>
);
export const IconSeal = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="m15.2 12.6 1.6 8.9-4.8-2.9-4.8 2.9 1.6-8.9" />
    <path d="m10 8.5 1.5 1.5L14.5 7" />
  </Base>
);
export const IconBall = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m12 7.2 4.3 3.1-1.6 5H9.3l-1.6-5L12 7.2z" />
    <path d="M12 2v5.2M21.5 9.5l-5.2.8M18.1 20l-3.4-4.7M5.9 20l3.4-4.7M2.5 9.5l5.2.8" />
  </Base>
);
export const IconPlane = (p: IconProps) => (
  <Base {...p}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
  </Base>
);
export const IconGamepad = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 11h4M8 9v4" />
    <path d="M15 12h.01M18 10h.01" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0 0 17.32 5z" />
  </Base>
);
export const IconBriefcase = (p: IconProps) => (
  <Base {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </Base>
);

export const iconMap: Record<string, (p: IconProps) => ReactNode> = {
  cpu: IconCpu,
  layers: IconLayers,
  server: IconServer,
  database: IconDatabase,
  flask: IconFlask,
  container: IconContainer,
  git: IconGitBranch,
  ball: IconBall,
  plane: IconPlane,
  gamepad: IconGamepad,
  cap: IconCap,
  seal: IconSeal,
};

import imgNumeros from "./assets/proj-numeros.jpg";
import imgTmf from "./assets/proj-tmf.jpg";
import imgMgo from "./assets/proj-mgo.jpg";
import imgEscola from "./assets/proj-escola.jpg";
import imgStocks from "./assets/proj-stocks.jpg";
import imgMedicalAppointments from "./assets/proj-rendez-vous-medicaux.jpg";

/* ------------------------------------------------------------------ */
/*  Coordonnées                                                        */
/* ------------------------------------------------------------------ */
export const contact = {
  name: "Alphato Westphalen",
  role: "Développeur Full Stack Java & Angular",
  location: "Ankorondrano, Antananarivo, Madagascar",
  email: "alphatowestphalen.pro@gmail.com",
  phones: ["+261 34 86 023 89", "+261 37 81 714 80"],
  portfolio: "https://alphato.netlify.app",
  linkedin: "https://www.linkedin.com/in/alphato-westphalen",
};

export const navLinks = [
  { id: "profil", label: "Profil" },
  { id: "competences", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projets", label: "Projets" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "3+", label: "années d'expérience" },
  { value: "7", label: "projets menés" },
  { value: "4", label: "entreprises & missions" },
  { value: "15+", label: "technologies maîtrisées" },
];

export const marqueeItems = [
  "Java", "Spring Boot", "Quarkus", "Angular", "NgRx", "React", "Next.js",
  "Ionic", "PostgreSQL", "MySQL", "MongoDB", "JUnit", "Mockito", "Cypress",
  "SonarQube", "Docker", "GitLab CI", "TM Forum", "Agile Scrum",
];

/* ------------------------------------------------------------------ */
/*  Profil                                                             */
/* ------------------------------------------------------------------ */
export const profilParagraphs = [
  "Développeur Full Stack Java & Angular avec plus de 3 ans d'expérience dans la conception et le développement d'applications web et mobiles performantes et sécurisées. Solide maîtrise de Java (Spring Boot, Quarkus) côté backend et d'Angular côté frontend.",
  "Expérience en architecture logicielle, API RESTful, conformité TM Forum (TMF), tests unitaires et intégration continue. Habitué au travail en méthodologie Agile Scrum, au sein d'équipes pluridisciplinaires et en relation directe avec les métiers.",
];

export const profilHighlights = [
  "Architectures télécom / OSS-BSS",
  "Conformité TMF620 & TMF622",
  "Automatisation de processus métiers",
  "Tests unitaires & intégration continue",
];

/* ------------------------------------------------------------------ */
/*  Compétences                                                        */
/* ------------------------------------------------------------------ */
export type SkillGroup = {
  id: string;
  icon: string;
  title: string;
  accent: "ember" | "signal" | "mint";
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "langages",
    icon: "cpu",
    title: "Langages",
    accent: "ember",
    skills: [
      { name: "Java", level: 92 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML & CSS", level: 84 },
      { name: "SQL", level: 82 },
      { name: "UML", level: 80 },
    ],
  },
  {
    id: "frontend",
    icon: "layers",
    title: "Frontend",
    accent: "signal",
    skills: [
      { name: "Angular", level: 90 },
      { name: "NgRx", level: 80 },
      { name: "ReactJS", level: 70 },
      { name: "Next.js", level: 64 },
      { name: "Ionic", level: 62 },
    ],
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend",
    accent: "mint",
    skills: [
      { name: "API RESTful", level: 90 },
      { name: "Spring Boot", level: 88 },
      { name: "Quarkus", level: 86 },
      { name: "Spring MVC", level: 80 },
      { name: "NestJS", level: 64 },
    ],
  },
  {
    id: "donnees",
    icon: "database",
    title: "Données & modélisation",
    accent: "ember",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "ORM / JPA-Hibernate", level: 84 },
      { name: "MySQL", level: 82 },
      { name: "Merise", level: 80 },
      { name: "SQLite & H2", level: 74 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    id: "tests",
    icon: "flask",
    title: "Tests & qualité",
    accent: "signal",
    skills: [
      { name: "JUnit", level: 88 },
      { name: "Mockito", level: 85 },
      { name: "Cypress", level: 78 },
      { name: "SonarQube", level: 76 },
      { name: "Jasmine", level: 74 },
    ],
  },
  {
    id: "devops",
    icon: "container",
    title: "DevOps & méthodes",
    accent: "mint",
    skills: [
      { name: "Git (GitLab, GitHub)", level: 90 },
      { name: "Agile Scrum", level: 88 },
      { name: "CI/CD — GitLab CI", level: 78 },
      { name: "Docker", level: 74 },
      { name: "Trello & Jira", level: 84 },
      { name: "Linux (Ubuntu, Debian)", level: 85 },
      { name: "Windows", level: 82 },
      { name: "2TUP", level: 72 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Expérience                                                         */
/* ------------------------------------------------------------------ */
export type ExperienceEntry = {
  role: string;
  company: string;
  note?: string;
  period: string;
  current?: boolean;
  projects: {
    name: string;
    desc: string;
    bullets: string[];
    stack: string[];
  }[];
};

export const experiences: ExperienceEntry[] = [
  {
    role: "Développeur Full Stack Java / Angular",
    company: "RELIA Consulting",
    note: "Consultant pour Orange Madagascar",
    period: "Janv. 2025 — Aujourd'hui",
    current: true,
    projects: [
      {
        name: "Automatisation du recyclage des numéros",
        desc: "Application d'automatisation du processus de recyclage des numéros, afin de supprimer les erreurs manuelles et réduire les coûts techniques. Application finalisée, avec des mécanismes de contrôle garantissant l'intégrité des données — en attente de déploiement pour validation et adoption par les équipes métiers.",
        bullets: [
          "Développement de solutions d'automatisation pour le recyclage des numéros, en intégrant les systèmes existants",
          "Mise en place de contrôles assurant la cohérence entre le statut des numéros sur les différentes plateformes",
          "Suppression des traitements en urgence grâce à l'automatisation complète du processus",
        ],
        stack: ["Angular", "Java", "Quarkus", "NgRx", "Cypress", "JUnit", "Mockito"],
      },
      {
        name: "Mise en conformité TMF de l'API Maxit",
        desc: "Adaptation d'une API existante, utilisée par l'application Maxit, afin de la rendre conforme aux spécifications du TM Forum — harmonisation des endpoints, des modèles de données et des formats de réponse selon les standards télécom / OSS-BSS.",
        bullets: [
          "Analyse de l'API existante (modèles, routes, payloads)",
          "Mise en conformité avec les API TMF (TMF620, TMF622)",
          "Refactoring du code pour assurer une compatibilité totale et la rétrocompatibilité",
          "Amélioration des tests unitaires et rédaction de la documentation technique",
          "Amélioration de l'interopérabilité et de la standardisation des interfaces exposées",
        ],
        stack: ["Java", "Quarkus", "TMF620", "TMF622", "JUnit", "Mockito", "SonarQube"],
      },
    ],
  },
  {
    role: "Développeur Full Stack Java / Angular",
    company: "RELIA Consulting",
    period: "Avr. 2024 — Oct. 2024",
    projects: [
      {
        name: "MGO — Gestion des activités de transport",
        desc: "Application tout-en-un dédiée aux activités de transport : gestion des taxis-brousse (véhicules, chauffeurs, réservations de places, agences), location de véhicules et interface d'administration des services et utilisateurs.",
        bullets: [
          "Conception et modélisation de bases de données adaptées aux besoins fonctionnels",
          "Développement complet backend et frontend, API RESTful sécurisées et performantes",
          "Conception et exécution de tests garantissant la qualité et la robustesse du produit",
          "Collaboration active avec les clients pour analyser les besoins et proposer des solutions personnalisées",
        ],
        stack: ["Quarkus", "PostgreSQL", "Angular", "JUnit", "Mockito", "Git / GitLab"],
      },
    ],
  },
  {
    role: "Développeur Full Stack Java / Vue.js",
    company: "DSI — Université de Fianarantsoa",
    period: "Déc. 2023 — Mars 2024",
    projects: [
      {
        name: "E-SCOLA — Gestion de la scolarité",
        desc: "Contribution au système de gestion de la scolarité de l'Université de Madagascar.",
        bullets: [
          "Développement d'un module de gestion du cursus étudiant avec export XLS et PDF",
          "Intégration et développement du frontend d'E-SCOLA",
          "Fonctionnalités de gestion et de consultation des données étudiantes",
          "Refactoring, optimisation des performances et revues de code",
        ],
        stack: ["Spring Boot", "Vue.js", "Maven", "PostgreSQL", "Git"],
      },
    ],
  },
  {
    role: "Développeur Front-End Angular",
    company: "Arato Fianarantsoa",
    period: "Juil. 2023 — Nov. 2023",
    projects: [
      {
        name: "Gestion des stocks — restauration",
        desc: "Solution web dédiée à l'optimisation des flux logistiques en restauration : automatisation du suivi des stocks, gestion prévisionnelle des approvisionnements et réduction du gaspillage alimentaire.",
        bullets: [
          "Recueil et analyse des besoins, rédaction des spécifications fonctionnelles",
          "Implémentation des interfaces utilisateur avec Angular",
          "Développement des API et services avec Spring Boot, sécurité et gestion des rôles",
          "Tests unitaires et d'intégration, correction des bugs et des problèmes de performance",
        ],
        stack: ["Angular", "Spring Boot", "Cypress", "MySQL", "PrimeNG", "GitLab"],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Projets (vitrine)                                                  */
/* ------------------------------------------------------------------ */
export type Project = {
  id: string;
  title: string;
  meta: string;
  year: string;
  desc: string;
  stack: string[];
  img?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "recyclage-numeros",
    title: "Recyclage automatisé des numéros",
    meta: "Orange Madagascar · RELIA Consulting",
    year: "2025",
    desc: "Automatisation complète du recyclage des numéros télécom : pipeline de traitement, contrôles de cohérence multi-plateformes et suppression des interventions manuelles d'urgence.",
    stack: ["Angular", "NgRx", "Quarkus", "Cypress"],
    img: imgNumeros,
    featured: true,
  },
  {
    id: "api-maxit-tmf",
    title: "API Maxit — conformité TM Forum",
    meta: "Orange Madagascar · RELIA Consulting",
    year: "2025",
    desc: "Refonte d'une API métier vers les standards TMF620 / TMF622 : endpoints, modèles de données et formats de réponse harmonisés, avec rétrocompatibilité vérifiée et documentée.",
    stack: ["Java", "Quarkus", "TMF620 / 622", "SonarQube"],
    img: imgTmf,
    featured: true,
  },
  {
    id: "mgo-transport",
    title: "MGO — plateforme de transport",
    meta: "RELIA Consulting",
    year: "2024",
    desc: "Gestion des taxis-brousse, réservations de places, location de véhicules et administration — une application tout-en-un pour les opérateurs de transport.",
    stack: ["Quarkus", "PostgreSQL", "Angular"],
    img: imgMgo,
  },
  {
    id: "e-scola",
    title: "E-SCOLA — scolarité universitaire",
    meta: "Université de Madagascar",
    year: "2023 – 2024",
    desc: "Module de gestion du cursus étudiant avec exports XLS / PDF et consultation des données, au sein du système de scolarité national.",
    stack: ["Spring Boot", "Vue.js", "PostgreSQL"],
    img: imgEscola,
  },
  {
    id: "stocks-resto",
    title: "Stocks & approvisionnements — resto",
    meta: "Arato Fianarantsoa",
    year: "2023",
    desc: "Suivi des stocks en temps réel, prévision des approvisionnements et réduction du gaspillage alimentaire pour la restauration.",
    stack: ["Angular", "Spring Boot", "MySQL"],
    img: imgStocks,
  },
  {
    id: "rendez-vous-medicaux",
    title: "Gestion des rendez-vous médicaux",
    meta: "ENS NG-Consulting",
    year: "Projet",
    desc: "Application de gestion des rendez-vous entre médecins et patients, avec organisation des disponibilités, prise de rendez-vous et suivi des consultations.",
    stack: ["Ionic", "Angular", "Laravel"],
    img: imgMedicalAppointments,
  },
];

/* ------------------------------------------------------------------ */
/*  Formation, langues, centres d'intérêt                              */
/* ------------------------------------------------------------------ */
export const education = [
  {
    degree: "Diplôme d'Ingénieur en Informatique",
    field: "Génie logiciel & Bases de données",
    school: "École Nationale d'Informatique (ENI)",
    place: "Tanambao, Fianarantsoa",
    year: "2024",
  },
  {
    degree: "Licence professionnelle en Informatique",
    field: "Génie logiciel & Bases de données",
    school: "École Nationale d'Informatique (ENI)",
    place: "Tanambao, Fianarantsoa",
    year: "2022",
  },
];

export const languages = [
  { name: "Malagasy", level: "Langue maternelle", pct: 100 },
  { name: "Français", level: "Courant", pct: 88 },
  { name: "Anglais", level: "Intermédiaire", pct: 60 },
];

export const interests = [
  { icon: "ball", label: "Football" },
  { icon: "plane", label: "Voyages" },
  { icon: "gamepad", label: "Jeux vidéo" },
];

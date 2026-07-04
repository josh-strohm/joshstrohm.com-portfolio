export type Project = {
  slug: string;
  index: string;
  name: string;
  outcome: string;
  metrics: string[];
  tags: string[];
  featured: boolean;
  hasCaseStudy: boolean;
};

export type CaseStudy = Project & {
  heroTitle: string;
  heroSubtitle: string;
  context: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  stack: string[];
  architecture: {
    nodes: { id: string; label: string; x: number; y: number }[];
    edges: { from: string; to: string }[];
  };
};

const projects: CaseStudy[] = [
  {
    slug: "hermes",
    index: "01",
    name: "Hermes",
    outcome:
      "A personal AI employee handling email, calendar, invoicing, and follow-up on a self-hosted stack.",
    metrics: ["40+ hrs saved / mo", "Zero missed follow-ups", "Self-hosted"],
    tags: ["AI Agents", "n8n", "Self-hosted", "Automation"],
    featured: true,
    hasCaseStudy: true,
    heroTitle: "Hermes",
    heroSubtitle: "A personal AI employee that runs the back office.",
    context:
      "Running a solo consultancy means wearing every hat — sales, delivery, billing, scheduling. The admin work was eating into billable hours and creating gaps in client follow-up.",
    problem:
      "Email triage, calendar coordination, invoice generation, and follow-up reminders were all manual. Context switched constantly. Things slipped when focus was on client work.",
    solution:
      "Built Hermes as a coordinated agent system: an intake layer classifies incoming email, a scheduling agent syncs with calendar APIs, an invoicing workflow generates and tracks payments, and a follow-up agent monitors stale threads. Everything runs on a self-hosted stack with full audit logs.",
    results: [
      { label: "Admin time reduced", value: "40+ hrs/mo" },
      { label: "Follow-up completion", value: "100%" },
      { label: "Stack uptime", value: "99.9%" },
    ],
    stack: ["n8n", "OpenAI", "PostgreSQL", "Docker", "Tailscale"],
    architecture: {
      nodes: [
        { id: "inbox", label: "Email Intake", x: 80, y: 120 },
        { id: "classify", label: "Classifier", x: 240, y: 120 },
        { id: "calendar", label: "Calendar Agent", x: 400, y: 60 },
        { id: "invoice", label: "Invoice Flow", x: 400, y: 180 },
        { id: "followup", label: "Follow-up Agent", x: 560, y: 120 },
        { id: "db", label: "PostgreSQL", x: 720, y: 120 },
      ],
      edges: [
        { from: "inbox", to: "classify" },
        { from: "classify", to: "calendar" },
        { from: "classify", to: "invoice" },
        { from: "classify", to: "followup" },
        { from: "calendar", to: "db" },
        { from: "invoice", to: "db" },
        { from: "followup", to: "db" },
      ],
    },
  },
  {
    slug: "rhyme-crm",
    index: "02",
    name: "Rhyme CRM",
    outcome:
      "A lightweight custom CRM built from scratch for small service businesses.",
    metrics: ["< 200ms load", "12 custom fields", "Zero per-seat fees"],
    tags: ["CRM", "Next.js", "PostgreSQL", "Custom Build"],
    featured: true,
    hasCaseStudy: false,
    heroTitle: "Rhyme CRM",
    heroSubtitle: "CRM that fits how small teams actually work.",
    context: "",
    problem: "",
    solution: "",
    results: [],
    stack: [],
    architecture: { nodes: [], edges: [] },
  },
  {
    slug: "ai-receptionist",
    index: "03",
    name: "AI Receptionist",
    outcome:
      "Missed-call text-back and intake automation for local trades, powered by Telnyx.",
    metrics: ["< 30s response", "85% booking rate", "24/7 coverage"],
    tags: ["Telnyx", "Voice AI", "SMS", "HVAC"],
    featured: true,
    hasCaseStudy: true,
    heroTitle: "AI Receptionist",
    heroSubtitle: "Every missed call becomes a booked appointment.",
    context:
      "A regional HVAC company was losing 30+ leads per week to missed calls. Office staff couldn't answer after hours, and voicemail callbacks had a low conversion rate.",
    problem:
      "Peak-season call volume overwhelmed a two-person front desk. After-hours calls went to voicemail. By the time someone called back, the customer had already booked with a competitor.",
    solution:
      "Deployed a Telnyx-powered receptionist: missed calls trigger an immediate SMS with a conversational intake flow. The system qualifies the job, checks availability, and books directly into their scheduling tool. Escalation paths route urgent jobs to on-call techs.",
    results: [
      { label: "Response time", value: "< 30 seconds" },
      { label: "Booking conversion", value: "85%" },
      { label: "After-hours leads captured", value: "100%" },
    ],
    stack: ["Telnyx", "n8n", "OpenAI", "Google Calendar", "Twilio SMS"],
    architecture: {
      nodes: [
        { id: "phone", label: "Inbound Call", x: 60, y: 120 },
        { id: "telnyx", label: "Telnyx Webhook", x: 200, y: 120 },
        { id: "sms", label: "SMS Intake", x: 360, y: 60 },
        { id: "agent", label: "Qualification Agent", x: 360, y: 180 },
        { id: "calendar", label: "Scheduling", x: 520, y: 120 },
        { id: "crm", label: "CRM Sync", x: 680, y: 120 },
      ],
      edges: [
        { from: "phone", to: "telnyx" },
        { from: "telnyx", to: "sms" },
        { from: "telnyx", to: "agent" },
        { from: "sms", to: "agent" },
        { from: "agent", to: "calendar" },
        { from: "calendar", to: "crm" },
      ],
    },
  },
  {
    slug: "wesley-bradley-paul",
    index: "04",
    name: "Wesley Bradley Paul Group",
    outcome:
      "Premium consulting website — design, build, and SEO for a boutique advisory firm.",
    metrics: ["98 Lighthouse", "2.1s LCP", "3× organic traffic"],
    tags: ["Web Design", "Next.js", "SEO", "Brand"],
    featured: true,
    hasCaseStudy: false,
    heroTitle: "Wesley Bradley Paul Group",
    heroSubtitle: "",
    context: "",
    problem: "",
    solution: "",
    results: [],
    stack: [],
    architecture: { nodes: [], edges: [] },
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return projects.filter((p) => p.hasCaseStudy).map((p) => p.slug);
}

export function getNextProject(slug: string): Project | undefined {
  const caseStudies = projects.filter((p) => p.hasCaseStudy);
  const idx = caseStudies.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return caseStudies[(idx + 1) % caseStudies.length];
}
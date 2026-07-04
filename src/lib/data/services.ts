export type Service = {
  index: string;
  name: string;
  description: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    index: "01",
    name: "AI Agents & Automation",
    description:
      "Custom agents and n8n/Make workflows that replace manual ops — not demos, production systems.",
    deliverables: [
      "Workflow architecture and build",
      "Agent prompt engineering and testing",
      "Integration with existing tools",
      "Monitoring and error handling",
    ],
    stack: ["n8n", "Make", "OpenAI", "Anthropic", "Python"],
  },
  {
    index: "02",
    name: "Systems & CRM",
    description:
      "Custom CRMs, Notion business OS builds, and integrations that match how your team actually works.",
    deliverables: [
      "Requirements mapping and data modeling",
      "Custom CRM or business OS build",
      "Third-party API integrations",
      "Migration from spreadsheets or legacy tools",
    ],
    stack: ["Next.js", "PostgreSQL", "Notion", "Airtable", "REST APIs"],
  },
  {
    index: "03",
    name: "Web & Brand",
    description:
      "Fast, sharp marketing sites that convert — built for speed, SEO, and credibility.",
    deliverables: [
      "Design and information architecture",
      "Performance-optimized development",
      "SEO setup and analytics",
      "CMS integration if needed",
    ],
    stack: ["Next.js", "Tailwind", "Vercel", "Sanity", "Contentful"],
  },
];
export type Business = {
  index: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  focus: string[];
  tags: string[];
};

export const businesses: Business[] = [
  {
    index: "01",
    name: "Strohm Partners",
    url: "https://strohmpartners.com",
    tagline: "AI automation for service businesses.",
    description:
      "Consulting practice focused on custom AI agents, workflow automation, and operational systems for HVAC, trades, legal, dental, and other small service companies.",
    focus: [
      "Custom AI agents and automations",
      "CRM and business system builds",
      "Production deployments, not demos",
    ],
    tags: ["Consulting", "AI", "Automation"],
  },
  {
    index: "02",
    name: "Strohm Media",
    url: "https://strohmmedia.com",
    tagline: "Web, brand, and digital presence.",
    description:
      "Studio for fast, sharp websites and brand-forward digital work — built to convert, rank, and hold up under real traffic.",
    focus: [
      "Marketing sites and landing pages",
      "Brand and information architecture",
      "SEO, performance, and launch support",
    ],
    tags: ["Web", "Brand", "SEO"],
  },
];
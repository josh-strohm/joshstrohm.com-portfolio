import { site } from "@/lib/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.jobTitle,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Altoona",
      addressRegion: "PA",
      addressCountry: "US",
    },
    worksFor: {
      "@type": "Organization",
      name: site.company,
    },
    description: site.description,
    sameAs: [site.social.linkedin, site.social.github, site.social.x],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
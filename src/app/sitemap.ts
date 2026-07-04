import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getCaseStudySlugs } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/now",
    "/contact",
    "/calendar",
  ];

  const caseStudies = getCaseStudySlugs().map((slug) => `/work/${slug}`);

  const allRoutes = [...staticRoutes, ...caseStudies];

  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.8 : 0.7,
  }));
}
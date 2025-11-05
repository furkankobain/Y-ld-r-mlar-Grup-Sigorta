import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const now = new Date().toISOString();
  const routes = [
    "",
    "/teklif-al",
    "/urunler/trafik",
    "/urunler/kasko",
    "/urunler/konut-dask",
    "/urunler/saglik",
    "/kvkk",
    "/cerez-politikasi",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

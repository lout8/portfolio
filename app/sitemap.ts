import { MetadataRoute } from "next";

import { menuItemsData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return menuItemsData.map((item) => ({
    url: `https://elissaiosloutos.dev${item.href}`,
    lastModified: new Date().toISOString(),
  }));
}

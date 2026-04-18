import type { MetadataRoute } from "next"
import { getAllCountries } from "@/lib/countries/queries"
import { getAbsoluteUrl } from "@/lib/seo/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const countries = await getAllCountries().catch(() => [])

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl("/"),
      changeFrequency: "daily",
      priority: 1,
    },
  ]

  const countryRoutes: MetadataRoute.Sitemap = countries.map((country) => ({
    url: getAbsoluteUrl(`/country/${country.slug}`),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...countryRoutes]
}

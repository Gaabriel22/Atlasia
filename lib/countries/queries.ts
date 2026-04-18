import { fetchCountriesFromApi } from "@/lib/countries/api"
import { normalizeCountries } from "@/lib/countries/normalize"

export async function getAllCountries() {
  const countries = await fetchCountriesFromApi()
  return normalizeCountries(countries)
}

export async function getCountryBySlug(slug: string) {
  const countries = await getAllCountries()
  return countries.find((country) => country.slug === slug) ?? null
}

import type { RestCountry } from "@/lib/countries/api"
import { createCountrySlug } from "@/lib/countries/slug"
import type { Country } from "@/types/country"

const NOT_INFORMED = "Nao informado"

function formatPopulation(population?: number) {
  if (!population) {
    return NOT_INFORMED
  }

  return new Intl.NumberFormat("pt-BR").format(population)
}

function joinRecordValues(record?: Record<string, string>) {
  if (!record || Object.keys(record).length === 0) {
    return NOT_INFORMED
  }

  return Object.values(record).join(", ")
}

function joinCurrencyNames(
  currencies?: Record<
    string,
    {
      name?: string
    }
  >,
) {
  if (!currencies || Object.keys(currencies).length === 0) {
    return NOT_INFORMED
  }

  return Object.values(currencies)
    .map((currency) => currency.name ?? NOT_INFORMED)
    .join(", ")
}

export function normalizeCountry(country: RestCountry): Country {
  const name = country.name?.common ?? NOT_INFORMED
  const capital = country.capital?.[0] ?? NOT_INFORMED
  const continent = country.region?.trim() || NOT_INFORMED

  return {
    slug: createCountrySlug(name, country.cca2 ?? country.cca3),
    name,
    flagUrl: country.flags?.png ?? country.flags?.svg ?? "",
    flagAlt: country.flags?.alt ?? `Bandeira de ${name}`,
    capital,
    continent,
    language: joinRecordValues(country.languages),
    currency: joinCurrencyNames(country.currencies),
    population: country.population ?? 0,
    populationLabel: formatPopulation(country.population),
  }
}

export function normalizeCountries(countries: RestCountry[]) {
  return countries
    .map(normalizeCountry)
    .sort((left, right) => left.name.localeCompare(right.name, "pt-BR"))
}

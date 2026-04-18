const COUNTRIES_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,languages,currencies,population,cca2,cca3"

export type RestCountry = {
  name?: {
    common?: string
  }
  flags?: {
    png?: string
    svg?: string
    alt?: string
  }
  capital?: string[]
  region?: string
  languages?: Record<string, string>
  currencies?: Record<
    string,
    {
      name?: string
    }
  >
  population?: number
  cca2?: string
  cca3?: string
}

export async function fetchCountriesFromApi() {
  const response = await fetch(COUNTRIES_URL, {
    next: { revalidate: 60 * 60 * 24 },
  })

  if (!response.ok) {
    throw new Error("Falha ao buscar paises")
  }

  return (await response.json()) as RestCountry[]
}

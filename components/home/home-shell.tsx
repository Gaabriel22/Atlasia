"use client"

import { useDeferredValue, useState, useTransition } from "react"
import type { Country } from "@/types/country"
import { CountryGrid } from "@/components/country/country-grid"
import { SearchControls } from "@/components/home/search-controls"

type HomeShellProps = {
  countries: Country[]
}

export function HomeShell({ countries }: HomeShellProps) {
  const [query, setQuery] = useState("")
  const [continent, setContinent] = useState("Todos")
  const [isPending, startFilterTransition] = useTransition()

  const deferredQuery = useDeferredValue(query)
  const deferredContinent = useDeferredValue(continent)

  const continents = [
    "Todos",
    ...new Set(countries.map((country) => country.continent)),
  ]

  const normalizedQuery = deferredQuery.trim().toLocaleLowerCase("pt-BR")

  const filteredCountries = countries.filter((country) => {
    const matchesContinent =
      deferredContinent === "Todos" || country.continent === deferredContinent

    const matchesQuery =
      normalizedQuery.length === 0 ||
      country.name.toLocaleLowerCase("pt-BR").includes(normalizedQuery) ||
      country.capital.toLocaleLowerCase("pt-BR").includes(normalizedQuery)

    return matchesContinent && matchesQuery
  })

  function runSmoothTransition(update: () => void) {
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const viewDocument = document as Document & {
        startViewTransition?: (callback: () => void) => void
      }

      viewDocument.startViewTransition?.(() => {
        startFilterTransition(update)
      })
      return
    }

    startFilterTransition(update)
  }

  return (
    <section className="atlas-shell px-1 pb-16 pt-6 md:pb-24">
      <div className="atlas-card rounded-4xl px-4 py-5 md:px-6">
        <SearchControls
          query={query}
          continent={continent}
          continents={continents}
          resultCount={filteredCountries.length}
          onQueryChange={(value) => {
            runSmoothTransition(() => setQuery(value))
          }}
          onContinentChange={(value) => {
            runSmoothTransition(() => setContinent(value))
          }}
        />
        <div
          className={`atlas-results-stage ${isPending ? "atlas-results-stage--pending" : ""}`}
          aria-busy={isPending}
        >
          <CountryGrid countries={filteredCountries} />
        </div>
      </div>
    </section>
  )
}

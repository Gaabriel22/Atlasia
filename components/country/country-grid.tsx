import type { Country } from "@/types/country"
import { CountryCard } from "@/components/country/country-card"
import { EmptyState } from "@/components/ui/empty-state"

type CountryGridProps = {
  countries: Country[]
}

export function CountryGrid({ countries }: CountryGridProps) {
  if (countries.length === 0) {
    return (
      <EmptyState
        title="Nenhum pais encontrado"
        description="Tente outro nome ou remova o filtro de continente para abrir mais rotas no atlas."
      />
    )
  }

  return (
    <div className="atlas-grid">
      {countries.map((country) => (
        <CountryCard key={country.slug} country={country} />
      ))}
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import type { Country } from "@/types/country"

type CountryCardProps = {
  country: Country
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/country/${country.slug}`}
      className="atlas-country-card atlas-card flex flex-col justify-between"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="atlas-eyebrow text-amber-200/75">
              {country.continent}
            </p>
            <h3 className="atlas-display mt-3 text-3xl text-amber-50">
              {country.name}
            </h3>
          </div>
          <div className="h-14 w-20 overflow-hidden rounded-2xl border border-stone-200/10 bg-stone-900/70 shadow-lg shadow-black/30">
            {country.flagUrl ? (
              <Image
                src={country.flagUrl}
                alt={country.flagAlt}
                width={160}
                height={112}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.3em] text-stone-300">
                N/A
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 space-y-3 text-sm text-stone-200">
        <div className="atlas-stat">
          <p className="atlas-eyebrow text-[0.62rem] text-stone-400">Capital</p>
          <p className="mt-2 text-base text-stone-100">{country.capital}</p>
        </div>
        <div className="atlas-stat">
          <p className="atlas-eyebrow text-[0.62rem] text-stone-400">
            Populacao
          </p>
          <p className="mt-2 text-base text-stone-100">
            {country.populationLabel}
          </p>
        </div>
      </div>
    </Link>
  )
}

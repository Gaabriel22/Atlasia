import Image from "next/image"
import Link from "next/link"
import type { Country } from "@/types/country"

type CountryDetailProps = {
  country: Country
}

export function CountryDetail({ country }: CountryDetailProps) {
  return (
    <section className="atlas-shell px-1 py-8 md:py-12">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex rounded-full border border-stone-200/10 bg-stone-950/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-200 transition hover:border-amber-200/30 hover:text-amber-50"
        >
          Voltar ao atlas
        </Link>
      </div>

      <div className="atlas-detail-grid">
        <article className="atlas-card rounded-[2.4rem] p-8 md:p-10">
          <p className="atlas-eyebrow">{country.continent}</p>
          <div className="mt-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="atlas-display text-5xl text-amber-50 md:text-7xl">
                {country.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-stone-300">
                Um retrato rapido para consulta, estudo e memorizacao de dados
                essenciais.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-stone-400">
                Consulte a capital de {country.name}, seu continente, idioma
                predominante, moeda e populacao em uma leitura objetiva e
                pensada para pesquisa rapida de geografia.
              </p>
            </div>
            <div className="w-27.5 overflow-hidden rounded-[1.8rem] border border-stone-200/12 bg-stone-900/70 shadow-xl shadow-black/30 md:w-45">
              {country.flagUrl ? (
                <Image
                  src={country.flagUrl}
                  alt={country.flagAlt}
                  width={360}
                  height={270}
                  className="aspect-4/3 h-auto w-full object-cover"
                />
              ) : (
                <div className="flex aspect-4/3 items-center justify-center text-sm uppercase tracking-[0.3em] text-stone-300">
                  Sem bandeira
                </div>
              )}
            </div>
          </div>
        </article>

        <aside className="atlas-card rounded-[2.4rem] p-8 md:p-10">
          <p className="atlas-eyebrow text-amber-200/75">Ficha do pais</p>
          <dl className="mt-6 space-y-5 text-stone-100">
            <div className="atlas-stat border-t-0 pt-0">
              <dt className="atlas-eyebrow text-[0.62rem] text-stone-400">
                Capital
              </dt>
              <dd className="mt-2 text-xl">{country.capital}</dd>
            </div>
            <div className="atlas-stat">
              <dt className="atlas-eyebrow text-[0.62rem] text-stone-400">
                Idioma
              </dt>
              <dd className="mt-2 text-xl">{country.language}</dd>
            </div>
            <div className="atlas-stat">
              <dt className="atlas-eyebrow text-[0.62rem] text-stone-400">
                Moeda
              </dt>
              <dd className="mt-2 text-xl">{country.currency}</dd>
            </div>
            <div className="atlas-stat">
              <dt className="atlas-eyebrow text-[0.62rem] text-stone-400">
                Populacao
              </dt>
              <dd className="mt-2 text-xl">{country.populationLabel}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

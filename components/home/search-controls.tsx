type SearchControlsProps = {
  query: string
  continent: string
  continents: string[]
  resultCount: number
  onQueryChange: (value: string) => void
  onContinentChange: (value: string) => void
}

export function SearchControls({
  query,
  continent,
  continents,
  resultCount,
  onQueryChange,
  onContinentChange,
}: SearchControlsProps) {
  return (
    <div className="atlas-control-deck mb-8 border-b border-stone-200/10 pb-6">
      <div className="atlas-control-top">
        <label className="grid gap-2">
          <span className="atlas-eyebrow">Busca rapida</span>
          <input
            id="busca-rapida"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            className="atlas-input"
            placeholder="Procure por pais ou capital"
            aria-label="Buscar pais"
          />
        </label>

        <div className="atlas-results-card">
          <p className="atlas-eyebrow text-amber-100/70">Resultados</p>
          <p className="atlas-display mt-2 text-3xl text-amber-50">
            {resultCount}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="atlas-eyebrow">Continentes</span>
          <span className="text-xs uppercase tracking-[0.22em] text-stone-500">
            filtro rapido
          </span>
        </div>
        <div
          className="atlas-filter-rail"
          role="toolbar"
          aria-label="Filtrar por continente"
        >
          {continents.map((item) => {
            const isActive = item === continent

            return (
              <button
                key={item}
                type="button"
                onClick={() => onContinentChange(item)}
                className={`atlas-filter-pill ${isActive ? "atlas-filter-pill--active" : ""}`}
                aria-pressed={isActive}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

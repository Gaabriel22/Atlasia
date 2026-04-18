import Image from "next/image"

type HeroProps = {
  countryCount: number
}

export function Hero({ countryCount }: HeroProps) {
  return (
    <section className="atlas-shell relative px-1 pt-8 md:pt-12">
      <div className="atlas-card relative overflow-hidden rounded-[2.4rem] px-6 py-8 md:px-10 md:py-14">
        <div className="atlas-hero-glow absolute inset-0" />
        <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-amber-200/14 bg-stone-950/60 shadow-lg shadow-black/25">
                <Image
                  src="/atlasia-logo.png"
                  alt="Logo do Atlasia"
                  width={68}
                  height={68}
                  className="h-17 w-17 object-cover"
                  priority
                />
              </div>
              <div>
                <p className="atlas-eyebrow">Atlasia · catalogo vivo</p>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-stone-400">
                  Exploracao geografica moderna
                </p>
              </div>
            </div>
            <h1 className="atlas-display mt-5 max-w-4xl text-5xl leading-none text-amber-50 md:text-7xl">
              Descubra o mundo como quem abre um atlas de explorador.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
              Navegue por paises, capitais e informacoes essenciais com uma
              leitura clara, veloz e feita para curiosos de geografia.
            </p>
          </div>

          <div className="grid gap-4 md:justify-self-end">
            <div className="rounded-[1.8rem] border border-amber-200/12 bg-black/20 p-5 backdrop-blur-sm">
              <p className="atlas-eyebrow text-amber-200/70">Escala atual</p>
              <p className="atlas-display mt-3 text-4xl text-amber-100">
                {countryCount}
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                paises catalogados para busca e exploracao no MVP.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-emerald-200/10 bg-emerald-950/30 p-5">
              <p className="atlas-eyebrow text-emerald-100/70">Rota de uso</p>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                Busque, filtre e abra cada pais para estudar os detalhes mais
                importantes sem sair do fluxo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

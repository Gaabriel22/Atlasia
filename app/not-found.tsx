import Link from "next/link"

export default function NotFound() {
  return (
    <main className="atlas-page">
      <section className="atlas-shell flex min-h-screen items-center py-12">
        <div className="atlas-card w-full rounded-4xl p-8 md:p-12">
          <p className="atlas-eyebrow">Coordenadas perdidas</p>
          <h1 className="atlas-display mt-4 text-4xl text-amber-50 md:text-6xl">
            Esse pais nao apareceu no mapa.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
            O link pode estar incorreto ou esse registro nao esta disponivel no
            momento.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full border border-amber-200/15 bg-amber-100/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-100 transition hover:border-amber-300/35 hover:bg-amber-100/16"
          >
            Voltar ao atlas
          </Link>
        </div>
      </section>
    </main>
  )
}

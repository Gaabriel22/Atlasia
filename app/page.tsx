import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { Hero } from "@/components/home/hero"
import { HomeShell } from "@/components/home/home-shell"
import { getAllCountries } from "@/lib/countries/queries"
import { getAbsoluteUrl, siteConfig } from "@/lib/seo/site"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description:
    "Consulte paises do mundo, capitais, bandeiras, idiomas, moedas e continentes em um catalogo rapido e responsivo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description:
      "Consulte paises do mundo, capitais, bandeiras, idiomas, moedas e continentes em um catalogo rapido e responsivo.",
    url: "/",
  },
}

export default async function HomePage() {
  const countries = await getAllCountries().catch(() => null)

  if (!countries) {
    return (
      <main className="atlas-page">
        <Hero countryCount={0} />
        <section className="atlas-shell pb-16">
          <div className="rounded-4xl border border-stone-800/70 bg-stone-950/70 p-8 text-stone-100 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
              Falha de rota
            </p>
            <h2 className="mt-4 font-serif text-3xl text-amber-50">
              Nao conseguimos carregar o atlas agora.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              Houve um problema ao consultar os paises. Tente novamente em
              alguns instantes.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="atlas-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: siteConfig.name,
              url: getAbsoluteUrl("/"),
              logo: getAbsoluteUrl("/atlasia-logo.png"),
            },
            {
              "@type": "WebSite",
              name: siteConfig.name,
              url: getAbsoluteUrl("/"),
              inLanguage: "pt-BR",
              potentialAction: {
                "@type": "SearchAction",
                target: `${getAbsoluteUrl("/")}#busca-rapida`,
                "query-input": "required name=query",
              },
            },
            {
              "@type": "CollectionPage",
              name: "Catalogo de paises do Atlasia",
              url: getAbsoluteUrl("/"),
              description:
                "Catalogo de paises com capitais, bandeiras, continentes, idiomas, moedas e populacao.",
              inLanguage: "pt-BR",
              isPartOf: {
                "@type": "WebSite",
                name: siteConfig.name,
                url: getAbsoluteUrl("/"),
              },
              about: {
                "@type": "Thing",
                name: "Paises do mundo e geografia",
              },
            },
          ],
        }}
      />
      <Hero countryCount={countries.length} />
      <HomeShell countries={countries} />
    </main>
  )
}

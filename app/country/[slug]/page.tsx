import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CountryDetail } from "@/components/country/country-detail"
import { getCountryBySlug } from "@/lib/countries/queries"
import { JsonLd } from "@/components/seo/json-ld"
import { getAbsoluteUrl } from "@/lib/seo/site"

export const dynamic = "force-dynamic"

type CountryPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { slug } = await params
  const country = await getCountryBySlug(slug)

  if (!country) {
    return {
      title: "Pais nao encontrado",
      robots: {
        index: false,
        follow: true,
      },
    }
  }

  const title = `${country.name}: capital, populacao, idioma e moeda`
  const description = `Veja dados de ${country.name}, incluindo capital, continente, idioma, moeda, populacao e bandeira no Atlasia.`
  const url = `/country/${country.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: country.flagUrl
        ? [
            {
              url: country.flagUrl,
              width: 1200,
              height: 900,
              alt: country.flagAlt,
            },
          ]
        : undefined,
    },
    twitter: {
      title,
      description,
      images: country.flagUrl ? [country.flagUrl] : undefined,
    },
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params

  const country = await getCountryBySlug(slug)

  if (!country) {
    notFound()
  }

  return (
    <main className="atlas-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Atlasia",
                  item: getAbsoluteUrl("/"),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: country.name,
                  item: getAbsoluteUrl(`/country/${country.slug}`),
                },
              ],
            },
            {
              "@type": "Country",
              name: country.name,
              url: getAbsoluteUrl(`/country/${country.slug}`),
              image: country.flagUrl || undefined,
              description: `Dados essenciais sobre ${country.name}, incluindo capital, continente, idioma, moeda e populacao.`,
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Capital",
                  value: country.capital,
                },
                {
                  "@type": "PropertyValue",
                  name: "Continente",
                  value: country.continent,
                },
                {
                  "@type": "PropertyValue",
                  name: "Idioma",
                  value: country.language,
                },
                {
                  "@type": "PropertyValue",
                  name: "Moeda",
                  value: country.currency,
                },
                {
                  "@type": "PropertyValue",
                  name: "Populacao",
                  value: country.populationLabel,
                },
              ],
            },
          ],
        }}
      />
      <CountryDetail country={country} />
    </main>
  )
}

export const siteConfig = {
  name: "Atlasia",
  shortName: "Atlasia",
  description:
    "Explore paises, capitais, idiomas, moedas e populacao em um atlas moderno, rapido e responsivo.",
  defaultTitle: "Atlasia | Atlas moderno de paises, capitais e geografia",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlasia-world.vercel.app",
  locale: "pt_BR",
  keywords: [
    "atlas",
    "paises do mundo",
    "capitais",
    "geografia",
    "bandeiras",
    "continentes",
    "atlas de paises",
    "dados de paises",
  ],
} as const

export function getBaseUrl() {
  return new URL(siteConfig.url)
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getBaseUrl()).toString()
}

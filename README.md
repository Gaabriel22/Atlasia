# Atlasia

Atlasia é um atlas moderno de países construído com `Next.js`. O projeto
permite explorar países do mundo, capitais, bandeiras, continentes, idiomas,
moedas e população em uma interface responsiva com direção visual cartográfica.

O repositório já inclui a fundação principal do MVP: catálogo de países, busca
rápida, filtro por continente, página de detalhe por país, favicon, metadata
para redes sociais, `robots.txt`, `sitemap.xml`, `manifest.webmanifest` e
schema JSON-LD para melhorar SEO e entendimento semântico por buscadores e
assistentes de IA.

## Visão geral

O Atlasia foi pensado como um projeto educacional e público, com foco em
consulta rápida e memorização de informações geográficas. A aplicação consome a
API REST Countries, normaliza os dados em uma camada própria e entrega uma
experiência enxuta para navegação, busca e leitura.

Hoje, o escopo implementado cobre:

- Catálogo completo de países.
- Busca por nome do país ou capital.
- Filtro por continente.
- Página individual para cada país.
- Identidade visual própria.
- SEO técnico básico pronto para produção.

## Stack

O projeto usa uma stack curta e direta para manter a base simples e escalável.

- `Next.js 16` com App Router.
- `React 19`.
- `TypeScript`.
- `Tailwind CSS v4` via `@import "tailwindcss"`.
- REST Countries como fonte de dados.

## Funcionalidades

O MVP atual entrega as seguintes funcionalidades principais.

- Homepage com hero, busca, filtro e grade de países.
- Cards com bandeira, nome, capital e população.
- Página dinâmica em `/country/[slug]`.
- Metadata dinâmica para página de país.
- `sitemap.xml`, `robots.txt` e `manifest.webmanifest`.
- Schema JSON-LD para homepage e páginas de país.

## Estrutura do projeto

A organização segue uma separação simples entre rotas, UI, domínio e SEO.

```text
app/
  country/[slug]/page.tsx
  layout.tsx
  manifest.ts
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  country/
  home/
  seo/
  ui/

lib/
  countries/
  seo/

public/
  atlasia-logo.png
  apple-touch-icon.png
  favicon.ico
  icon.png

types/
  country.ts

docs/
  Atlasia-PRD.md
  Atlasia-Backlog.md
  superpowers/
```

## Como rodar localmente

Para subir o projeto no ambiente local, use os passos abaixo.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra `http://localhost:3000` no navegador.

4. Para validar a aplicação antes de publicar, rode:

   ```bash
   npm run lint
   npm run build
   ```

## Variáveis de ambiente

O projeto funciona sem configuração extra em ambiente local, mas você ganha
URLs canônicas e metadata mais corretos em produção ao definir a URL pública do
site.

Crie um arquivo `.env.local` com:

```bash
NEXT_PUBLIC_SITE_URL=https://atlasia.vercel.app
```

Se essa variável não existir, o projeto usa `https://atlasia.vercel.app` como
fallback padrão.

## SEO e dados estruturados

O Atlasia já sai com uma camada de SEO técnico pensada para deploy público.

Isso inclui:

- Metadata global com `title`, `description`, Open Graph e Twitter Card.
- Metadata dinâmica para páginas de país.
- `robots.txt` com referência ao sitemap.
- `sitemap.xml` com homepage e páginas de país.
- `manifest.webmanifest`.
- Schema `Organization`, `WebSite`, `CollectionPage`, `BreadcrumbList` e
  `Country` em JSON-LD.

Arquivos principais dessa camada:

- [app/layout.tsx](./app/layout.tsx)
- [app/robots.ts](./app/robots.ts)
- [app/sitemap.ts](./app/sitemap.ts)
- [app/manifest.ts](./app/manifest.ts)
- [components/seo/json-ld.tsx](./components/seo/json-ld.tsx)
- [lib/seo/site.ts](./lib/seo/site.ts)

## Fonte de dados

Os dados vêm da API REST Countries e passam por uma normalização própria antes
de chegar à interface. Isso reduz acoplamento com a API externa e mantém a UI
mais limpa.

Arquivos principais:

- [lib/countries/api.ts](./lib/countries/api.ts)
- [lib/countries/normalize.ts](./lib/countries/normalize.ts)
- [lib/countries/queries.ts](./lib/countries/queries.ts)
- [types/country.ts](./types/country.ts)

## Design

O Atlasia não usa o visual padrão do template do Next. A interface foi pensada
com uma direção de atlas contemporâneo, com textura sutil, tons terrosos,
contraste escuro e blocos de leitura com mais atmosfera.

Os principais ajustes visuais estão concentrados em:

- [app/globals.css](./app/globals.css)
- [components/home/hero.tsx](./components/home/hero.tsx)
- [components/home/search-controls.tsx](./components/home/search-controls.tsx)
- [components/country/country-card.tsx](./components/country/country-card.tsx)
- [components/country/country-detail.tsx](./components/country/country-detail.tsx)

## Deploy

O alvo atual de deploy é a Vercel em `https://atlasia.vercel.app`.

Para publicar:

1. Importe o repositório na Vercel.
2. Defina `NEXT_PUBLIC_SITE_URL=https://atlasia.vercel.app`.
3. Rode o deploy com a configuração padrão de `Next.js`.
4. Valide em produção:

   ```text
   /robots.txt
   /sitemap.xml
   /manifest.webmanifest
   ```

## Documentação do projeto

O histórico de planejamento do projeto está versionado em `docs/`.

Arquivos principais:

- [docs/Atlasia-PRD.md](./docs/Atlasia-PRD.md)
- [docs/Atlasia-Backlog.md](./docs/Atlasia-Backlog.md)
- [docs/superpowers/specs/2026-04-18-atlasia-design.md](./docs/superpowers/specs/2026-04-18-atlasia-design.md)
- [docs/superpowers/plans/2026-04-18-atlasia-implementation-plan.md](./docs/superpowers/plans/2026-04-18-atlasia-implementation-plan.md)

## Próximos passos

Depois do MVP, os caminhos naturais de evolução são:

- Quiz por continente.
- Sistema de favoritos.
- Melhorias de performance percebida na busca e filtros.
- Enriquecimento de conteúdo por país.
- Internacionalização.

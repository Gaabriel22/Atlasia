# Atlasia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir o MVP do Atlasia em `Next.js`, com catálogo de países,
busca, filtro por continente e página de detalhe com visual cartográfico.

**Architecture:** A aplicação usará `Next.js` App Router com busca de dados no
servidor, normalização centralizada da resposta da REST Countries e uma camada
de UI separada da lógica de domínio. A homepage entregará a lista normalizada
para componentes client-side responsáveis apenas por busca e filtro.

**Tech Stack:** Next.js, React, TypeScript, CSS Modules ou CSS global, REST
Countries API

---

### Task 1: Criar a base do projeto Next.js

**Files:**
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `next.config.ts`
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next-env.d.ts`
- Create: `public/`

- [ ] **Step 1: Inicializar o projeto Next.js na pasta atual**

Run: `npx create-next-app@latest . --ts --tailwind --eslint --app --import-alias "@/*" --yes`
Expected: arquivos base do Next.js criados sem sobrescrever `docs/`

- [ ] **Step 2: Verificar a estrutura gerada**

Run: `Get-ChildItem`
Expected: presença de `app/`, `public/`, `package.json` e arquivos TypeScript

- [ ] **Step 3: Rodar a aplicação base**

Run: `npm run build`
Expected: build inicial funcionando

### Task 2: Definir domínio e camada de dados

**Files:**
- Create: `types/country.ts`
- Create: `lib/countries/api.ts`
- Create: `lib/countries/normalize.ts`
- Create: `lib/countries/queries.ts`
- Create: `lib/countries/slug.ts`

- [ ] **Step 1: Criar os tipos de domínio**

Definir tipos para resumo e detalhe de país com os campos:
`slug`, `name`, `flag`, `capital`, `continent`, `language`, `currency`,
`population`.

- [ ] **Step 2: Criar o fetch server-side da REST Countries**

Implementar função para buscar somente os campos necessários da API.

- [ ] **Step 3: Criar a normalização em um único ponto**

Transformar a resposta externa em formato estável do Atlasia com fallback
`"Não informado"`.

- [ ] **Step 4: Criar helpers puros de consulta**

Implementar helpers para:
- buscar todos os países normalizados
- encontrar país por `slug`
- listar continentes disponíveis

- [ ] **Step 5: Validar tipos e imports**

Run: `npm run build`
Expected: camada de dados tipada e compilando

### Task 3: Construir os componentes de descoberta

**Files:**
- Create: `components/home/home-shell.tsx`
- Create: `components/home/hero.tsx`
- Create: `components/home/search-controls.tsx`
- Create: `components/country/country-card.tsx`
- Create: `components/country/country-grid.tsx`
- Create: `components/ui/empty-state.tsx`

- [ ] **Step 1: Criar o hero da homepage**

Implementar título, subtítulo e atmosfera visual do Atlasia.

- [ ] **Step 2: Criar os controles client-side**

Implementar input de busca e select de continente com estado local.

- [ ] **Step 3: Criar o card de país**

Renderizar bandeira, nome, capital e continente com link para detalhe.

- [ ] **Step 4: Criar a grade responsiva**

Renderizar lista filtrada com estado vazio quando não houver resultados.

- [ ] **Step 5: Compor a home shell**

Receber os dados do servidor e conectar aos componentes client-side.

### Task 4: Implementar as páginas

**Files:**
- Modify: `app/page.tsx`
- Create: `app/country/[slug]/page.tsx`
- Create: `app/not-found.tsx`
- Create: `components/country/country-detail.tsx`

- [ ] **Step 1: Implementar a homepage real**

Buscar os países no servidor e renderizar `home-shell`.

- [ ] **Step 2: Implementar a página de detalhe**

Resolver `slug`, chamar `notFound()` quando necessário e renderizar o detalhe.

- [ ] **Step 3: Criar a UI de detalhe**

Renderizar bandeira, nome, continente, capital, idioma, moeda e população.

- [ ] **Step 4: Criar a página 404**

Entregar uma experiência coerente com o visual do produto.

### Task 5: Aplicar direção visual e responsividade

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Modify: componentes criados em `components/home/` e `components/country/`

- [ ] **Step 1: Definir tokens visuais**

Criar paleta, tipografia e textura cartográfica em CSS.

- [ ] **Step 2: Refinar layout mobile-first**

Garantir boa leitura, toque confortável e grid adaptável.

- [ ] **Step 3: Refinar states visuais**

Ajustar hover, foco, vazio, erro e hierarquia de leitura.

### Task 6: Validar o MVP

**Files:**
- Modify: arquivos necessários após correções finais

- [ ] **Step 1: Rodar lint**

Run: `npm run lint`
Expected: sem erros

- [ ] **Step 2: Rodar build**

Run: `npm run build`
Expected: build concluído com sucesso

- [ ] **Step 3: Fazer revisão funcional**

Validar:
- homepage carrega
- busca funciona
- filtro funciona
- detalhe funciona
- layout funciona em mobile e desktop

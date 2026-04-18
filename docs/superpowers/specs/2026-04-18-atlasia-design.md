# Spec de design do Atlasia

## Visão geral

Atlasia será uma aplicação web pública com foco educacional, voltada para
descoberta e memorização de países. O MVP será implementado como uma aplicação
em `Next.js` na pasta atual, com catálogo responsivo de países, busca
instantânea, filtro por continente e página dedicada de detalhes para cada
país.

A direção do produto é "explorador/cartográfica". A interface deve transmitir a
sensação de um atlas moderno, com textura sutil, atmosfera geográfica e ótima
legibilidade. A implementação deve ser propositalmente enxuta, com arquitetura
limpa, baixa duplicação e uma base pronta para futuras evoluções, como quiz,
favoritos e suporte multilíngue.

## Objetivos

- Entregar um MVP estável na pasta atual.
- Renderizar uma lista completa e normalizada de países.
- Permitir busca por nome do país sem recarregar a página.
- Permitir filtro por continente.
- Renderizar uma página dinâmica de detalhes do país.
- Oferecer uma interface mobile-first com identidade visual marcante.

## Fora do escopo

- Quiz.
- Favoritos.
- Contas de usuário.
- Rastreamento de progresso.
- Modo offline.
- Persistência em banco de dados.

## Escopo do produto

O MVP inclui:

- Uma homepage com hero e controles de descoberta.
- Um conjunto de dados de países normalizado no servidor a partir da API REST
  Countries.
- Busca em tempo real e filtro por continente no cliente.
- Uma página de detalhes para cada país.
- Exibição de bandeira, nome, capital, continente, idioma, moeda e população.
- Estados de vazio, carregamento e erro que preservem a qualidade do layout.

## Abordagem técnica recomendada

O projeto usará `Next.js` com App Router.

Essa abordagem foi escolhida porque oferece:

- Tratamento limpo de rotas para `/` e `/country/[slug]`.
- Boa base de SEO para páginas públicas.
- Busca de dados e normalização no servidor.
- Estrutura sustentável para crescer sem exagerar na complexidade do MVP.

Outras abordagens consideradas:

1. Consumir a API diretamente em cada página.
   - Mais rápida para começar.
   - Rejeitada porque aumenta acoplamento e duplicação.
2. Criar uma camada persistida de snapshot/cache local.
   - Mais robusta para futuros comportamentos offline.
   - Rejeitada porque adiciona complexidade desnecessária ao MVP.

## Arquitetura

A aplicação será organizada em quatro camadas principais:

- `app/`: pontos de entrada das rotas e composição das páginas.
- `components/`: peças de UI reutilizáveis, visuais e interativas.
- `lib/`: busca de dados, normalização, filtros, helpers de slug e utilitários.
- `types/`: contratos de domínio para os dados de país.

Essa estrutura mantém a orquestração de rotas, a UI e a lógica de domínio
separadas sem introduzir abstrações pesadas demais.

## Fluxo de dados

A aplicação buscará os dados dos países na REST Countries pelo servidor. Uma
única camada de normalização transformará a resposta externa em tipos estáveis
do Atlasia.

A homepage receberá esses dados já normalizados e os entregará aos controles de
descoberta no cliente. A busca e o filtro por continente acontecerão no browser
em cima da lista já tratada, para garantir interação instantânea e evitar
reload.

A rota de detalhe do país resolverá o slug solicitado com base nesse mesmo
conjunto de dados normalizados. Se não houver correspondência, a rota deverá
renderizar um 404 apropriado usando `notFound()`.

## Modelo de domínio

Atlasia centralizará a estrutura do domínio para evitar objetos soltos e
espalhados pela aplicação.

Campos principais:

- `slug`
- `name`
- `flag`
- `capital`
- `continent`
- `language`
- `currency`
- `population`

A camada de normalização também aplicará fallbacks seguros, como "Não
informado", quando a API de origem não trouxer determinado campo.

## Regras de clean code e DRY

A implementação deve seguir estas decisões:

- Normalizar a resposta da REST Countries em um único lugar.
- Usar tipos de domínio compartilhados em vez de repetir formatos de objeto.
- Manter filtro e geração de slug em funções puras.
- Manter os componentes de UI focados em renderização e interação local.
- Evitar espalhar conhecimento da resposta da API dentro de componentes visuais.
- Preferir arquivos pequenos, com uma responsabilidade clara.

## Páginas e experiência do usuário

## Homepage

A homepage deve equilibrar atmosfera e clareza.

Ela incluirá:

- Um hero com título forte, texto curto de apoio e tratamento visual
  cartográfico.
- Uma seção de descoberta com campo de busca e filtro por continente.
- Uma grade responsiva de países com cards exibindo os campos mais úteis do
  resumo.
- Um estado vazio que explique claramente quando a busca não encontrar
  resultados.

## Página de detalhe do país

A página de detalhe deve priorizar compreensão e escaneabilidade.

Ela incluirá:

- Um elemento claro de navegação para voltar.
- Um cabeçalho visual maior com bandeira, nome do país e continente.
- Uma seção estruturada de dados com capital, população, idioma e moeda.
- Comportamento responsivo natural em telas estreitas e largas.

## Direção visual

A linguagem visual deve parecer exploratória e inspirada em atlas, sem ficar
barulhenta ou caricata.

Princípios visuais:

- Textura sutil de papel ou mapa nos fundos.
- Paleta inspirada em terra, oceano, pergaminho e tinta.
- Tipografia de destaque com personalidade no hero e tipografia contida e
  legível no restante do conteúdo.
- Superfícies de cards com profundidade discreta, contornos leves e espacamento
  intencional.
- Forte legibilidade em mobile e conforto para toque.

A interface não deve parecer um dashboard genérico nem um template padrão.

## Tratamento de erros

A aplicação deve falhar com elegância.

- Se a API de países falhar, a homepage deve exibir um estado de erro
  controlado.
- Se um slug de rota for desconhecido, a aplicação deve retornar uma experiência
  404 coerente.
- Campos ausentes da API externa não podem quebrar a renderização do layout.

## Verificação

O MVP será considerado completo quando os pontos abaixo forem verdadeiros:

- O projeto roda localmente na pasta atual.
- A homepage renderiza o catálogo de países.
- A busca funciona sem reload.
- O filtro por continente funciona corretamente.
- A página de detalhe do país renderiza os campos esperados.
- A aplicação funciona bem em layouts mobile e desktop.
- Build e lint passam com sucesso.

## Observações de implementação

A implementação deve ser propositalmente prática:

- Começar de uma base limpa de `Next.js` na pasta atual.
- Reaproveitar os dados normalizados entre listagem e detalhe.
- Manter o escopo limitado ao MVP descrito no PRD e no backlog.
- Deixar a arquitetura pronta para futuras features como quiz e favoritos, mas
  sem implementá-las agora.

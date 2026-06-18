# Repaginação da página `/projects` — Design

**Data:** 2026-06-18
**Rota afetada:** `/projects` (`frontend/src/pages/projects.jsx`)

## Objetivo

Trazer a página de projetos para o mesmo nível visual da Home e da página Sobre,
que já foram refatoradas para o design system semântico do site. Hoje a `/projects`
ainda usa o estilo antigo (cards largos empilhados na vertical, anéis azuis
`ring-blue-200`, fundo `bg-blue-100/25`, `dark:bg-gray-200`, texto justificado denso
e links simples), destoando do restante do site.

A repaginação mantém a organização por categoria de tecnologia e adiciona um modal
de detalhes para preservar o conteúdo das descrições longas sem quebrar o grid.

## Decisões tomadas (brainstorming)

1. **Estrutura:** manter os 5 grupos por tecnologia (React, Next.js, JavaScript
   Vanilla, WordPress, Backend), cada um como uma seção polida (eyebrow + título +
   grid de cards modernos). Fiel à organização atual, sem filtros/abas.
2. **Descrições longas:** card mostra resumo (`line-clamp-3`) + botão "Ver detalhes"
   que abre um modal com a descrição completa, imagem e links.

## Design system reutilizado

Tokens semânticos definidos em `frontend/src/styles/theme.css` e mapeados em
`globals.css`: `paper`, `paper-soft`, `ink`, `ink-soft`, `muted`, `line`, `accent`,
`accent-soft`. Fontes `font-display` / `font-sans` / `font-mono`. Animação
`animate-fade-up`. Ícones via `react-icons/fi`. Padrão de card de referência já
existente: `molecules/FeaturedProjects.jsx` (usado na Home).

## Arquitetura de componentes

### Novos

- **`organisms/ProjectsHero.jsx`** — cabeçalho da página. Fundo ambiente decorativo
  (gradiente do topo + glow com `blur`, no estilo de `AboutHero`/`Hero`), eyebrow
  mono `// meus trabalhos`, título `Projetos` com palavra em destaque (gradiente
  `from-accent to-accent-soft`), subtítulo curto. Container `max-w-6xl`.

- **`molecules/ProjectCard.jsx`** — card único, padrão `FeaturedProjects`:
  - `<article>` com `rounded-2xl border border-line bg-paper`, sombra e hover
    (`hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl`), `group`.
  - Imagem em `aspect-[16/10]`, `object-cover`, zoom no hover
    (`group-hover:scale-105`).
  - Chip da categoria (`tag`) com `bg-accent/10 text-accent font-mono`.
  - Título `font-display`.
  - Descrição `line-clamp-3 text-muted`.
  - Ações: botão **Ver detalhes** (chama `onSelect(project)`); ícone/link de
    Repositório (`FiGithub`) quando `repository` existir; link de Site
    (`FiArrowUpRight`/`FiExternalLink`) quando houver URL utilizável.
  - Props: `{ project, tag, onSelect }`.

- **`molecules/ProjectsSection.jsx`** — seção de uma categoria.
  - Props: `{ eyebrow, title, tag, projects, onSelect }`.
  - Renderiza eyebrow mono + título `font-display` + grid responsivo
    (`grid gap-6 sm:grid-cols-2 lg:grid-cols-3`) de `ProjectCard`.
  - Container `max-w-6xl px-6`, espaçamento vertical entre seções.

- **`molecules/ProjectModal.jsx`** — modal de detalhes.
  - Props: `{ project, tag, onClose }`. Não renderiza nada quando `project` é nulo.
  - Overlay escuro com `backdrop-blur`; painel `bg-paper rounded-2xl` com imagem,
    chip, título, **descrição completa** e links (repositório/site).
  - Acessibilidade: `role="dialog"`, `aria-modal="true"`, fecha com tecla `Esc`,
    clique no overlay e botão `✕` (`FiX`); trava o scroll do `body` enquanto aberto
    (via `useEffect`).
  - Layout: full-screen/quase-full no mobile, centralizado e com largura máxima no
    desktop; corpo com scroll interno se o conteúdo for alto.

### Reescrito

- **`organisms/CardProject.jsx`** — orquestrador da listagem (mantém o nome do
  arquivo para não quebrar o import em `projects.jsx`).
  - `const [selected, setSelected] = useState(null)`.
  - Define a lista de categorias `{ eyebrow, title, tag, projects }` mapeando os
    mocks: `reactProjects`, `nextProjects`, `javascriptProjects`, `wordpressProjects`,
    `backendProjects`.
  - Renderiza as 5 `ProjectsSection` passando `onSelect={setSelected}`.
  - Renderiza `<ProjectModal project={selected} onClose={() => setSelected(null)} />`.

### Atualizado

- **`pages/projects.jsx`** — composição alinhada com `index.jsx`/`about.jsx`:
  `Layout > SeoHead > ProjectsHero > CardProject > ContactCta > Whatsapp`.

### Removidos (código morto após a troca)

Confirmado por busca que são usados exclusivamente pela `/projects`:

- `molecules/ReactProjects.jsx`
- `molecules/NextProjects.jsx`
- `molecules/VanillaProjects.jsx`
- `molecules/WordPressProjects.jsx`
- `molecules/BackendProjects.jsx`
- `atoms/CustomCard.jsx` (usado só pelos 5 acima)

## Dados / links

- **Sem alterar `mocks.js`.** Mocks comentados permanecem comentados.
- Cada seção passa seu próprio `tag` (rótulo da categoria) para os cards.
- Normalização de link de site: usa `project.link` quando existir; senão, deriva
  `https://` + `project.deploy` (removendo prefixo `http(s)://` duplicado); quando
  ambos vazios, o botão de site não é renderizado.
- Repositório só renderiza quando `project.repository` for não-vazio.

## Responsividade & acessibilidade

- Container `max-w-6xl`; grid 1 → 2 → 3 colunas conforme breakpoint.
- Modal: full/quase-full no mobile, centralizado no desktop.
- Respeita `prefers-reduced-motion` (regra global já existente).
- `alt` descritivo nas imagens; foco/`Esc`/scroll-lock no modal.

## Fora de escopo

- Backend / CMS (Strapi) e qualquer chamada de API.
- `frontend/src/utils/mocks.js`.
- Área `/admin`.
- Demais páginas e componentes globais (Header, Footer, Layout).

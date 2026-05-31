# ldr-slidev-theme

## What this project is

A personal, reusable [Slidev](https://sli.dev) theme for Lars De Richter.

- npm package name: `slidev-theme-ldr` (the `slidev-theme-` prefix is required
  for Slidev to resolve it).
- Slidev theme name: `ldr` → decks select it with `theme: ldr` in frontmatter.
- GitHub repo: `lars-derichter/ldr-slidev-theme`. The repo name and the package
  name differ on purpose; that's fine for Git installs.

## How it's consumed

**Not published to npm.** Decks install it as a Git dependency:

```json
"slidev-theme-ldr": "github:lars-derichter/ldr-slidev-theme"
```

Slidev themes ship `.vue`/CSS source and need **no build step**, so a Git
install works as-is. `npm install` does not auto-update a Git dependency —
bump or reinstall to pull new commits, or pin a tag with `#vX.Y.Z`.

## Layout of the theme

A Slidev theme contributes any of: `layouts/*.vue`, `components/*.vue`,
`styles/` (imported globally via `styles/index.ts`), `setup/*.ts` hooks, and
config. Slidev provides built-in layouts (default, center, cover, two-cols, …);
a theme only needs to override what it wants to change. This theme ships
`styles/` (tokens + typography in `layout.css`, code framing in `code.css`),
`setup/shiki.ts` (a palette-matched Shiki theme), a `Footer` component, and
custom layouts: `cover`, `section`, `default` (adds the footer), `two-cols-ldr`,
`quote`, `image-full`, and `end`. Palette/type live as `--ldr-*` CSS variables
at the top of `layout.css`. Keep additions minimal and intentional.

`example.md` uses `theme: ./` to preview the theme locally (`npm run dev`).

## Conventions

- Plain CSS in `styles/` (no UnoCSS `@apply`) to keep it approachable.
- Output docs as Markdown.
- License: Unlicense (public domain).

# ldr-slidev-theme

A personal [Slidev](https://sli.dev) theme — package name `slidev-theme-ldr`,
theme name `ldr`. A calm, typography-led, humanist/manuscript look: warm
parchment ground, [Gentium Book Plus](https://software.sil.org/gentium/)
throughout, a forest/sage primary accent with maple-red as a second accent, and
[IBM Plex Mono](https://www.ibm.com/plex/) for code.

Released into the public domain (see [UNLICENSE](UNLICENSE)). Not published to
npm; consumed directly from this Git repository.

## Layouts

| Layout         | For                                                                          |
| -------------- | ---------------------------------------------------------------------------- |
| `cover`        | Opening slide (`eyebrow`, `presenter`, `affiliation`)                        |
| `section`      | Chapter divider (`number`, `eyebrow`)                                        |
| `default`      | Content slides — heading + list, code, prose                                 |
| `two-cols-ldr` | Full-width heading over two columns (`::left::` / `::right::`)               |
| `quote`        | Large pull-quote (`author`)                                                  |
| `image-full`   | Full-bleed image, overlaid caption (`image`, `eyebrow`, `caption`, `credit`) |
| `end`          | Closing / thanks slide (`contact`)                                           |

Every custom layout is exercised in [example.md](example.md). Frontmatter
options are documented at the top of each file in [layouts/](layouts/).

## Use it in a presentation

Add it as a Git dependency in the deck's `package.json`:

```json
"dependencies": {
  "slidev-theme-ldr": "github:lars-derichter/ldr-slidev-theme"
}
```

Run `npm install`, then in `slides.md` frontmatter:

```yaml
theme: ldr
```

`theme: ldr` resolves `slidev-theme-ldr` from `node_modules` — no npm registry
involved. Pin a version with `github:lars-derichter/ldr-slidev-theme#v1.0.0`.

## Develop and preview

```bash
npm install
npm run dev      # opens example.md with this theme (theme: ./)
```

Edit [styles/layout.css](styles/layout.css) to change the look; the preview
reloads on save. Palette and type are defined as `--ldr-*` CSS variables at the
top of that file.

Run `npm run format` to format everything with Prettier. Deck Markdown is
formatted by [`prettier-plugin-slidev`](https://www.npmjs.com/package/prettier-plugin-slidev)
(configured in [.prettierrc](.prettierrc)) so its multiple frontmatter blocks
survive formatting — the default Markdown parser reflows them into headings and
breaks the deck.

## Structure

| Path                | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `styles/index.ts`   | Global style entry point Slidev imports            |
| `styles/layout.css` | Tokens, typography, and every layout's look        |
| `styles/code.css`   | Code-panel framing (mono font, inset, maple spine) |
| `setup/shiki.ts`    | Custom Shiki theme matching the palette            |
| `layouts/`          | Custom `.vue` slide layouts                        |
| `components/`       | Auto-imported `.vue` components (`Footer`)         |
| `public/`           | Assets served at deck root (preview image)         |
| `example.md`        | Preview deck (`theme: ./`)                         |

See the [Slidev theme docs](https://sli.dev/guide/write-theme) for what a theme
can contribute.

Made with [Slidev](https://sli.dev). &copy; Lars De Richter

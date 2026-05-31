# ldr-slidev-theme

A personal [Slidev](https://sli.dev) theme — package name `slidev-theme-ldr`,
theme name `ldr`. Deliberately minimal: a base stylesheet on top of Slidev's
built-in layouts, meant to grow with custom layouts and components over time.

Released into the public domain (see [UNLICENSE](UNLICENSE)). Not published to
npm; consumed directly from this Git repository.

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
reloads on save.

## Structure

| Path               | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `styles/index.ts`  | Global style entry point Slidev imports          |
| `styles/layout.css`| Base typography and theme colors (plain CSS)     |
| `example.md`       | Preview deck (`theme: ./`)                       |
| `layouts/`         | _(add later)_ custom `.vue` slide layouts        |
| `components/`      | _(add later)_ auto-imported `.vue` components    |

See the [Slidev theme docs](https://sli.dev/guide/write-theme) for what a theme
can contribute.

Made with [Slidev](https://sli.dev). &copy; Lars De Richter

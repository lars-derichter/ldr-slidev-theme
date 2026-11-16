# Lars De Richter — Visual Style Guide

A portable description of a single, consistent visual identity: calm, humanist,
typography-led, with a warm natural palette and a manuscript feel. It is derived
from the `ldr` Slidev theme but written to generalise across any medium — web
pages, Word documents, PDFs, letters, slides, posters.

Use it as a human reference, or paste the [condensed style prompt](#condensed-style-prompt)
at the end into Claude Design or another system to generate new material in the
same style.

---

## 1. Essence

Five principles that everything else serves:

1. **Typography leads.** Hierarchy comes from type — size, weight, italic,
   letter-spacing, whitespace — not from boxes, shadows, or heavy colour fills.
2. **Calm and humanist.** A warm, book-like, manuscript quality. Restraint over
   decoration. Generous margins. Nothing shouts.
3. **Natural palette.** Warm parchment grounds, ink-brown text, forest and sage
   greens, an autumn-maple red. It should feel like paper and plants, not screens.
4. **Green leads, red is the spark.** Forest/sage green is the primary voice; the
   maple red appears sparingly — ideally one deliberate red mark per page or view.
5. **Flat and quiet.** No gradients, drop shadows, glows, or bevels. Thin rules
   and hairlines instead of borders and containers.

---

## 2. Colour

### Palette

| Name           | Hex       | Character                     |
| -------------- | --------- | ----------------------------- |
| Parchment      | `#F4EDDC` | Warm cream ground             |
| Deep parchment | `#EFE7D2` | Slightly deeper ground        |
| Panel          | `#EDE4CE` | Inset / code / callout fill   |
| Warm white     | `#FBF8F0` | Near-white page (long text)   |
| Ink            | `#2A2925` | Warm near-black, body text    |
| Ink soft       | `#5E584C` | Muted ink, subtitles/captions |
| Ink faint      | `#8A8270` | Faint ink, meta/credits       |
| Forest         | `#38543E` | Primary accent (green)        |
| Forest deep    | `#2C4632` | Darker green, inline code     |
| Sage           | `#7E9A7C` | Soft secondary green          |
| Maple          | `#9E3B2D` | Accent spark (autumn red)     |
| Ochre          | `#B07D2B` | Warm tertiary (numbers/data)  |
| Rule           | `#D8CDB3` | Faint hairline                |

`Warm white` is the only colour not in the slide theme; it is added here for
long-form body pages (see [§6](#6-backgrounds-the-parchment-question)).

### Semantic roles

- **Grounds** — Parchment for heroes, covers, section breaks, callouts; warm
  white or parchment for body pages; panel for inset surfaces (code, callouts,
  captions).
- **Text** — Ink for body; ink-soft for subtitles, captions, lead-ins; ink-faint
  for footers, page numbers' surrounding text, credits.
- **Forest (primary accent)** — links, bold/strong text, kicker labels,
  structural rules under headings, the "active" colour.
- **Sage (soft accent)** — hairlines and dividers, list markers, figure/label
  eyebrows, pull-quote marks, code framing, italic emphasis, running footers.
  Sage is _quiet structure_.
- **Maple (spark accent)** — used sparingly: a title, a page number, a single
  rule, a quote attribution, an ordered-list number. One spark per view.
- **Ochre** — numeric and data highlights (figures, code numerals, chart series).

### Proportion & contrast

- Roughly **green-dominant, red-sparing**: green marks should outnumber red marks
  several to one. If a layout has more red than green, rebalance.
- **Text contrast:** body text is always ink on a light ground. Forest and maple
  have enough contrast for headings and short runs on parchment/white. **Sage,
  ochre, and ink-faint are low-contrast — reserve them for large type, short
  labels, rules, and decoration, never body copy.**
- Never place body text on parchment darker than `#EFE7D2`.

---

## 3. Typography

### Typefaces

- **Serif (primary): Gentium Book Plus.** Used for almost everything — headings
  and body. A humanist book serif with true italics; gives the manuscript feel.
  Fallbacks: Georgia, "Times New Roman", serif.
- **Monospace: IBM Plex Mono.** Code, technical snippets, and any fixed-width
  tabular need. A warm, humanist mono that sits well beside the serif.
  Fallbacks: ui-monospace, "SFMono-Regular", monospace.
- No third family. If a sans is unavoidable in a constrained system, use the
  platform humanist sans and keep it to UI chrome only.

### Weights & styles

- Two weights only: **400 regular** and **700 bold**. No light or black weights.
- **Italic** carries real work: subtitles, captions, lead paragraphs, pull-quotes.
- **Small-caps / letter-spaced uppercase** for labels: eyebrows, footers, credits.

### Heading colour by level

The generalisable rule across documents:

| Level        | Colour | Notes         |
| ------------ | ------ | ------------- |
| H1 / title   | Maple  | The statement |
| H2           | Forest | Major section |
| H3           | Maple  | Sub-section   |
| H4 and below | Ink    | Quiet         |

Headings are bold serif, tight leading (~1.1), slightly negative tracking
(`-0.01em`). Sentence case — never Title Case, never ALL CAPS (except the
letter-spaced label style below).

### The recurring text roles

- **Eyebrow / kicker** — a short label above a heading. Uppercase, bold, small
  (~0.8× body), letter-spaced `0.26em`. Forest when it acts as a section kicker;
  sage when it labels content or a figure (e.g. "Figure 2", "Example").
- **Subtitle / lead** — italic, ink-soft, ~1.2–1.3× body.
- **Caption** — italic, ink-soft, ~0.9× body.
- **Footer / credit** — small-caps or letter-spaced, ink-faint or sage; any page
  number or single figure in maple.

### Type scale (relative to body = 1)

Cover/title ≈ 2.5–3× · H1 ≈ 2× · H2 ≈ 1.6× · H3 ≈ 1.3× · body = 1 ·
caption/eyebrow ≈ 0.8–0.9×. Body line-height ~1.5; headings ~1.1.

---

## 4. Layout & composition

- **Whitespace is structural.** Generous margins and space between blocks. Let
  the page breathe; a margin is part of the argument.
- **Left-aligned, ragged right.** No justified text. Centre only for short hero
  or closing statements.
- **Measure:** keep body text to a comfortable line length (~60–75 characters).
- **Thin marks, not boxes.** The signature device is a **short accent rule** —
  ~40px wide, 2px tall — sitting under a heading. Forest by default; maple on a
  section-break/divider. Use it instead of underlines or full-width bars.
- **Hairlines** at 0.5–1px in sage (or faint rule colour) separate columns and
  regions. Never heavy borders.
- **Left-border accents** (2–3px) mark inset blocks — code panels, callouts,
  figure captions — in sage.
- **Lists:** use an **em-dash "—" marker in sage** rather than a bullet;
  numbered lists use bold maple numerals, with sage letters at the second
  level. Space items generously.
- **Block quotes** in running text: an inset block on the panel fill with a
  3px sage left spine, set in italic.
- **Tables:** letter-spaced uppercase labels in forest over a forest hairline,
  faint rules between rows. No fills, no vertical lines.
- **Pull-quotes:** large italic serif, with an oversized opening quotation mark
  in sage; attribution in small letter-spaced maple.
- **Code / monospace:** IBM Plex Mono on a panel fill, a sage left spine, subtle
  hairline border. Syntax colours (if applicable): forest keywords, maple
  strings, ochre numbers, muted-ink italic comments.
- **Page furniture:** running footer in small-caps sage with the page number in
  maple; document/section title on the opposite side.

---

## 5. Imagery & ornament

- **Photography:** natural, calm subjects — forests, foliage, landscapes, paper
  and hand-made textures. Warm, muted, unsaturated. Soft light. Nothing glossy,
  corporate, or high-contrast.
- **Placement:** either full-bleed with a parchment caption block over one
  corner (with a sage left border), or beside a text column separated by a sage
  hairline. Credits set small-caps, faint.
- **No AI-generated images.** Use real photography or hand illustration only.
- **Ornament:** a single restrained botanical line-motif is the house mark — a
  small flower/stem in forest with a maple centre. Use sparingly (closing pages,
  a lone accent). Line art, never filled illustration.
- **Icons:** if required, thin single-weight outline strokes in forest or ink;
  keep them rare and understated.

---

## 6. Backgrounds: the parchment question

The parchment ground is distinctive but heavy for long reading and printing.
Two modes; choose per medium.

### Mode A — Parchment ground

Warm parchment (`#F4EDDC`) across the whole surface.
Best for: **slides, covers, section breaks, posters, short hero pages, single
callout cards.** Most distinctive and atmospheric. Avoid for long body text and
anything printed in volume (ink/toner heavy, lower contrast).

### Mode B — Warm-white body, parchment accents

Warm white (`#FBF8F0`) for the reading surface; parchment reserved for the
masthead/cover, section-break pages or bands, callout blocks, and captions.
Best for: **multi-page documents, articles, reports, letters, PDFs for print.**
Keeps long text crisp and printer-friendly while still signalling the brand
through warm accents and type.

**Rule of thumb:** if someone will read more than a screen or print more than a
page, use Mode B. For a hero, a slide, or a one-pager, use Mode A.

In both modes: text is ink, accents are forest/sage/maple, and the type system
is unchanged. Only the field colour differs.

---

## 7. Applying it per medium

### Web

- Mode B for articles/docs; Mode A for landing/hero sections and section
  dividers. Load Gentium Book Plus + IBM Plex Mono from a web-font host.
- Links: forest, underline with a comfortable offset; hover deepens to
  forest-deep. Bold text forest; italic emphasis sage.
- Max content width ~65ch; generous vertical rhythm. Hairline section rules in
  sage. Sticky/footer meta in small-caps ink-faint.
- Keep components flat: no cards with shadows; separate with space and hairlines.

### Word documents

- Page: warm white; 2.5–3 cm margins. Body in Gentium Book Plus ~11–12 pt,
  line spacing ~1.4.
- Styles: Title (maple), Heading 1 (maple), Heading 2 (forest), Heading 3
  (maple), Heading 4+ (ink). Add a thin 2 pt forest rule (paragraph border-
  bottom, short) under H2 where possible.
- Eyebrow = a "Kicker" character/paragraph style: small caps, letter-spaced,
  forest/sage. Captions italic ink-soft. Code/mono paragraphs in IBM Plex Mono
  on a light panel fill with a left forest/sage border.
- Lists: use an em-dash glyph or a custom sage bullet; numbered lists tinted maple.

### PDF / print

- Mode B. Warm-white body pages; a parchment cover and section-break pages.
- CMYK-check the accents; maple and forest should stay rich, sage/ochre are
  accent-only. Keep body text pure ink for legibility.
- Running footer: small-caps section title (sage) left, page number (maple) right.
- Full-bleed photography allowed on covers/dividers with a parchment caption block.

### Letters & correspondence

- Warm white. A restrained masthead: name in ink or forest, a short maple rule,
  contact line in small-caps ink-faint. No logo block; the typography is the
  identity.
- Body Gentium Book Plus, generous margins, left-aligned. Date and salutation in
  ink; any single emphasis in forest. Signature block quiet, ink-soft.
- Optional: a small botanical line-mark in the footer, forest with maple centre.

### Slides (reference implementation)

- Mode A throughout; deeper parchment (`#EFE7D2`) for cover, section, quote, and
  closing slides. This is the canonical expression — see the `ldr` Slidev theme.
- Cover: forest tick + kicker, ink/maple title, italic ink subtitle, name in
  forest, affiliation in ink-faint. Footer: sage title, maple page number.

---

## 8. Do & don't

**Do:** lead with type and whitespace · keep green primary and red a rare spark ·
use thin rules and hairlines · set labels in letter-spaced small-caps · use real,
warm, natural photography · stay flat.

**Don't:** use gradients, shadows, glows, or heavy borders · let red outweigh
green · set body text in sage/ochre/faint · use Title Case or ALL-CAPS headings ·
mix in a third typeface · use AI-generated images · crowd the page.

---

## Condensed style prompt

> Copy-paste block for Claude Design / LLM tools. Self-contained.

```
STYLE: "ldr" — calm, humanist, typography-led, manuscript feel. Warm, natural,
flat (no gradients/shadows/glows). Green-dominant with a sparing autumn-red spark.

PALETTE (hex):
- Grounds: parchment #F4EDDC, deep parchment #EFE7D2, panel #EDE4CE, warm white #FBF8F0
- Text: ink #2A2925 (body), ink-soft #5E584C (subtitles/captions), ink-faint #8A8270 (meta)
- Accents: forest #38543E (primary), sage #7E9A7C (soft), maple #9E3B2D (spark), ochre #B07D2B (numbers)
- Hairline: #D8CDB3
Use warm white or parchment for long text, parchment for covers/heroes/section breaks.
Body text is always ink on a light ground. Sage/ochre/faint are decorative/large only.

TYPE:
- Serif "Gentium Book Plus" (fallback Georgia, serif) for headings AND body.
- Mono "IBM Plex Mono" for code.
- Weights 400 & 700 only. Italics for subtitles/captions/quotes. Letter-spaced
  small-caps for labels/eyebrows/footers.
- Heading colour: H1 maple, H2 forest, H3 maple, H4+ ink. Sentence case, tight
  leading, slightly negative tracking. Never Title Case or ALL CAPS.

LAYOUT:
- Generous whitespace and margins; left-aligned, ragged right; measure ~60–75ch.
- Signature mark: a short 40px×2px accent rule under a heading — forest normally,
  maple on section dividers. Thin sage hairlines (0.5–1px) for dividers; 2–3px
  sage left-border on code/callouts/captions.
- Lists: em-dash "—" markers in sage; numbered lists in maple.
- Eyebrow label above headings: uppercase, bold, ~0.8em, letter-spacing 0.26em,
  forest (kicker) or sage (content/figure label).
- Pull-quote: large italic serif, oversized sage quote mark, maple attribution.
- Footer: small-caps sage, page number maple.

IMAGERY: real (never AI-generated) warm, muted, natural photography — forests,
foliage, paper texture, soft light. Full-bleed with a parchment caption block
(sage left border) or beside text with a sage hairline. Credits small-caps faint.
Optional ornament: a small botanical line-motif, forest with a maple centre.

FEEL: quiet, warm, book-like, confident restraint. One deliberate red mark per view.
```

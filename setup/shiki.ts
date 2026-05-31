import { defineShikiSetup } from '@slidev/types'

/*
 * A custom Shiki TextMate theme tuned to the ldr palette, so code sits calmly
 * on the parchment ground instead of importing a stock theme's blues/purples:
 *
 *   comments  muted ink, italic   keywords  forest green
 *   strings   maple red           numbers   ochre
 *   types     sage-ink            text      warm near-black
 *
 * Slidev highlights with Shiki by default; the panel framing (mono font,
 * inset surface, maple spine) lives in `styles/code.css`.
 */

const ink = '#2A2925'

const ldrParchment = {
  name: 'ldr-parchment',
  type: 'light' as const,
  colors: {
    'editor.background': '#EDE4CE',
    'editor.foreground': ink,
  },
  settings: [
    { settings: { background: '#EDE4CE', foreground: ink } },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#9A917C', fontStyle: 'italic' },
    },
    {
      scope: [
        'keyword',
        'storage',
        'storage.type',
        'storage.modifier',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
        'variable.language',
      ],
      settings: { foreground: '#38543E' },
    },
    {
      scope: ['string', 'string.quoted', 'punctuation.definition.string', 'constant.character'],
      settings: { foreground: '#9E3B2D' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.language.boolean'],
      settings: { foreground: '#B07D2B' },
    },
    {
      scope: ['entity.name.type', 'support.type', 'support.class', 'entity.name.class', 'entity.other.inherited-class'],
      settings: { foreground: '#5E6E58' },
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: ink },
    },
    {
      scope: ['variable', 'variable.other', 'meta.definition.variable'],
      settings: { foreground: ink },
    },
    {
      scope: ['punctuation', 'meta.brace', 'keyword.operator'],
      settings: { foreground: '#6E685B' },
    },
  ],
}

export default defineShikiSetup(() => {
  return {
    themes: {
      light: ldrParchment,
      dark: ldrParchment,
    },
  }
})

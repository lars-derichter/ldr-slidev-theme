<!--
  Full-bleed image with an overlaid parchment caption block.

  Frontmatter:
    layout: image-full
    image: /forest.jpg          # path under the deck's public/ folder
    eyebrow: Figure 3           # small label in the caption (optional)
    caption: Many small parts, one continuous shape.   # italic line (optional)
    credit: Photo · Unsplash    # corner credit (optional)
    fit: contain                # cover (default) fills and crops; contain fits
                                # the whole image — use it for screenshots,
                                # diagrams and anything you must not crop

  Body: the caption heading as `### ...` (kept short).
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  image?: string
  eyebrow?: string
  caption?: string
  credit?: string
  fit?: 'cover' | 'contain'
}>()

// Slidev only rewrites the `--base` path for assets it parses (markdown
// images, <img src>, …). A frontmatter string handed to CSS `url()` is opaque
// to it, so a root-relative path like `/forest.jpg` 404s when the deck is
// served from a subpath (e.g. GitHub Pages). Prepend BASE_URL ourselves.
const bg = computed(() => {
  const src = props.image
  if (!src) return undefined
  if (/^(https?:|data:)/.test(src) || !src.startsWith('/')) return src
  return import.meta.env.BASE_URL + src.slice(1)
})
</script>

<template>
  <div
    class="slidev-layout ldr-image-full"
    :class="{ 'ldr-fit-contain': fit === 'contain' }"
    :style="bg ? { backgroundImage: `url(${bg})` } : undefined"
  >
    <div class="ldr-image-full__caption">
      <p class="eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
      <slot />
      <p v-if="caption">{{ caption }}</p>
    </div>
    <div class="ldr-image-full__credit" v-if="credit">{{ credit }}</div>
  </div>
</template>

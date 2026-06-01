<!--
  Split slide: a text column beside an image panel that bleeds to the edge.

  Frontmatter:
    layout: image-side
    image: /forest.jpg          # path under the deck's public/ folder
    eyebrow: Figure 2           # small label above the heading (optional)
    caption: A margin gives...  # italic line under the heading (optional)
    credit: Photo · Unsplash    # corner credit over the image (optional)
    side: right                 # which side the image sits on (default: right)

  Body: the heading as `## ...` plus any supporting text.
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  image?: string
  eyebrow?: string
  caption?: string
  credit?: string
  side?: 'left' | 'right'
}>()

// Same reasoning as image-full: a frontmatter path handed to CSS url() is
// opaque to Slidev's asset rewriting, so a root-relative path 404s on subpath
// deploys. Prepend BASE_URL ourselves.
const bg = computed(() => {
  const src = props.image
  if (!src) return undefined
  if (/^(https?:|data:)/.test(src) || !src.startsWith('/')) return src
  return import.meta.env.BASE_URL + src.slice(1)
})

const imageLeft = computed(() => props.side === 'left')
</script>

<template>
  <div
    class="slidev-layout ldr-image-side"
    :class="{ 'ldr-image-side--flip': imageLeft }"
  >
    <div class="ldr-image-side__text">
      <p class="eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
      <slot />
      <p class="ldr-image-side__caption" v-if="caption">{{ caption }}</p>
    </div>
    <div
      class="ldr-image-side__panel"
      :style="bg ? { backgroundImage: `url(${bg})` } : undefined"
    >
      <div class="ldr-image-side__credit" v-if="credit">{{ credit }}</div>
    </div>
  </div>
</template>

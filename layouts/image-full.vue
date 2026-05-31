<!--
  Full-bleed image with an overlaid parchment caption block.

  Frontmatter:
    layout: image-full
    image: /forest.jpg          # path under the deck's public/ folder
    eyebrow: Figure 3           # small label in the caption (optional)
    caption: Many small parts, one continuous shape.   # italic line (optional)
    credit: Photo · Unsplash    # corner credit (optional)

  Body: the caption heading as `### ...` (kept short).
-->
<script setup lang="ts">
defineProps<{
  image?: string
  eyebrow?: string
  caption?: string
  credit?: string
}>()
</script>

<template>
  <div
    class="slidev-layout ldr-image-full"
    :style="image ? { backgroundImage: `url(${image})` } : undefined"
  >
    <div class="ldr-image-full__caption">
      <p class="ldr-eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
      <slot />
      <p v-if="caption">{{ caption }}</p>
    </div>
    <div class="ldr-image-full__credit" v-if="credit">{{ credit }}</div>
  </div>
</template>

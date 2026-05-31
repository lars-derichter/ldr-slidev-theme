<!--
  Quote — a large typographic pull-quote.

  Frontmatter:
    layout: quote
    author: William Strunk Jr.   # attribution (optional)

  Body: the quote text. Either a Markdown blockquote (`> ...`) or a plain
  paragraph works; the big opening quote mark is added by the theme.
-->
<script setup lang="ts">
defineProps<{
  author?: string
}>()
</script>

<template>
  <div class="slidev-layout ldr-quote">
    <blockquote>
      <slot />
    </blockquote>
    <p class="ldr-quote__by" v-if="author">{{ author }}</p>
  </div>
</template>

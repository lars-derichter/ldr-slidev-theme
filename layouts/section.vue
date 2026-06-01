<!--
  Section divider.

  Frontmatter:
    layout: section
    number: "01"                 # large sage numeral (optional)
    eyebrow: First movement      # small label (optional)

  Body: the section title as `# ...` and an optional italic subtitle paragraph.
-->
<script setup lang="ts">
defineProps<{
  number?: string
  eyebrow?: string
}>()
</script>

<template>
  <div class="slidev-layout ldr-section">
    <p class="ldr-section__num" v-if="number">{{ number }}</p>
    <p class="eyebrow" v-if="eyebrow">{{ eyebrow }}</p>
    <slot />
  </div>
</template>

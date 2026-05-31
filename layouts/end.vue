<!--
  End / thanks slide.

  Frontmatter:
    layout: end
    contact: lars.derichter@thomasmore.be · @ldr   # optional contact line

  Body: a closing line as `# ...` and an optional italic subtitle paragraph.
  A small maple-centred bloom sits above the heading.
-->
<script setup lang="ts">
defineProps<{
  contact?: string
}>()
</script>

<template>
  <div class="slidev-layout ldr-end">
    <svg class="ldr-mark" width="34" height="34" viewBox="120 120 60 80" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="150" cy="150" rx="8" ry="13" />
        <ellipse cx="131" cy="163" rx="7" ry="11" transform="rotate(-32 131 163)" />
        <ellipse cx="169" cy="163" rx="7" ry="11" transform="rotate(32 169 163)" />
      </g>
      <circle class="seed" cx="150" cy="156" r="6" fill="currentColor" />
    </svg>

    <slot />

    <p class="ldr-end__contact" v-if="contact">{{ contact }}</p>
  </div>
</template>

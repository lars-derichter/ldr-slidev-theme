<!--
  Cover layout — opening slide.

  Frontmatter:
    layout: cover
    eyebrow: A lecture in three movements   # small label above the title
    presenter: Lars De Richter              # name (rendered in forest)
    affiliation: Thomas More Hogeschool     # optional, after a dot

  Body: the title as `# ...` and an italic subtitle paragraph.
-->
<script setup lang="ts">
defineProps<{
  eyebrow?: string
  presenter?: string
  affiliation?: string
}>()
</script>

<template>
  <div class="slidev-layout ldr-cover">
    <div class="ldr-cover__top" v-if="eyebrow">
      <span class="ldr-cover__tick" />
      <p class="eyebrow">{{ eyebrow }}</p>
    </div>

    <div class="ldr-cover__main">
      <slot />
    </div>

    <div class="ldr-cover__by" v-if="presenter || affiliation">
      <span class="name" v-if="presenter">{{ presenter }}</span>
      <span class="sep" v-if="presenter && affiliation">·</span>
      <span v-if="affiliation">{{ affiliation }}</span>
    </div>
  </div>
</template>

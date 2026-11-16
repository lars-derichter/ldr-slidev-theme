<!--
  Cover layout — opening slide.

  Frontmatter:
    layout: cover
    eyebrow: A lecture in three movements   # small label above the title
    author: Lars De Richter                 # name (rendered in forest)
    affiliation: Thomas More Hogeschool     # optional, after a dot

  Body: the title as `# ...` and an italic subtitle paragraph.
-->
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  eyebrow?: string;
  author?: string;
  presenter?: string; // deprecated, see below
  affiliation?: string;
  frontmatter?: Record<string, unknown>;
}>();

// The cover usually is the first slide, whose frontmatter doubles as the
// deck's headmatter. There, Slidev strips its reserved config keys (such as
// `author`) from the layout props, so read them back from `frontmatter`.
//
// `presenter` is the old name for this field. On the first slide it collides
// with Slidev's presenter-mode switch (true | 'dev' | 'build'): any other
// value disables presenter mode. Still rendered for old decks, with a warning.
const legacyPresenter = computed(() => {
  const value = props.presenter ?? props.frontmatter?.presenter;
  return typeof value === "string" && value !== "dev" && value !== "build"
    ? value
    : undefined;
});

const name = computed(
  () =>
    props.author ??
    (props.frontmatter?.author as string | undefined) ??
    legacyPresenter.value,
);

if (
  import.meta.env.DEV &&
  legacyPresenter.value &&
  name.value === legacyPresenter.value
) {
  console.warn(
    "[slidev-theme-ldr] cover: use `author:` for the name. " +
      "`presenter:` on the first slide disables presenter mode.",
  );
}
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

    <div class="ldr-cover__by" v-if="name || affiliation">
      <span class="name" v-if="name">{{ name }}</span>
      <span class="sep" v-if="name && affiliation">·</span>
      <span class="ldr-cover__aff" v-if="affiliation">{{ affiliation }}</span>
    </div>
  </div>
</template>

<!--
  Two columns with a thin centred divider, and a full-width heading on top.

  Frontmatter:
    layout: two-cols-ldr

  Body: content before `::left::` spans the full width (use it for the heading);
  `::left::` and `::right::` fill the two columns.

  Example (eyebrow label via MDC — needs `mdc: true` in the headmatter):
    # Two ways to revise
    ::left::
    Top down {.eyebrow.sage}
    Start from the claim...
    ::right::
    Bottom up {.eyebrow.maple}
    Start from the words...
-->
<template>
  <div class="slidev-layout ldr-two-cols">
    <div class="ldr-two-cols__head"><slot /></div>
    <div class="ldr-two-cols__cols">
      <div class="ldr-col-left"><slot name="left" /></div>
      <div class="ldr-two-cols__divider" />
      <div class="ldr-col-right"><slot name="right" /></div>
    </div>
    <Footer />
  </div>
</template>

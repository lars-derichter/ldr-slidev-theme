<!--
  Two columns with a thin centred divider, and a full-width heading on top.

  Frontmatter:
    layout: two-cols-ldr

  Body: content before `::left::` spans the full width (use it for the heading);
  `::left::` and `::right::` fill the two columns.

  Example:
    # Two ways to revise
    ::left::
    <div class="ldr-eyebrow" style="color: var(--ldr-sage)">Top down</div>
    Start from the claim...
    ::right::
    <div class="ldr-eyebrow" style="color: var(--ldr-maple)">Bottom up</div>
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

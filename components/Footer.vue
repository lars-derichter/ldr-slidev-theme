<!--
  Running footer for content slides: deck title (left) and slide number (right).
  Reads Slidev's global `$slidev` so it needs no props. Auto-imported by Slidev,
  so layouts can drop in <Footer /> directly.
-->
<template>
  <footer class="ldr-footer">
    <span class="ldr-foot-title">{{ $slidev?.configs?.title }}</span>
    <span class="ldr-foot-num">· {{ $slidev?.nav?.currentPage }} ·</span>
  </footer>
</template>

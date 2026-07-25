<template>
  <div class="block lg:hidden px-margin-mobile md:px-gutter pt-8 md:pt-6 max-w-7xl mx-auto">
    <div class="bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden">
      <button @click="toggleOpen" class="w-full flex items-center justify-between px-5 py-4 text-left"
        :aria-expanded="isOpen" aria-controls="mobile-toc-panel">
        <span class="font-label-caps text-label-caps text-on-surface">DAFTAR ISI</span>
        <span class="material-symbols-outlined text-on-surface-variant transition-transform duration-300" :class="{ 'rotate-180': isOpen }">
          expand_more
        </span>
      </button>
      <div id="mobile-toc-panel" class="toc-accordion-content" :class="{ open: isOpen }">
        <nav class="flex flex-col gap-1 px-5 pb-4 border-t border-outline-variant/10 pt-3">
          <a href="#introduction" class="py-2 text-sm font-medium text-primary border-l-2 border-primary pl-3">Pendahuluan</a>
          <a href="#architecture" class="py-2 text-sm font-medium text-on-surface-variant hover:text-primary pl-3 transition-colors">Arsitektur</a>
          <a href="#present" class="py-2 text-sm font-medium text-on-surface-variant hover:text-primary pl-3 transition-colors">Masa Kini</a>
        </nav>
      </div>
    </div>

    <div class="hidden md:block lg:hidden mt-4">
      <h3 class="font-label-caps text-label-caps text-on-surface-variant mb-4">DAFTAR ISI</h3>
      <nav class="chip-scroll flex gap-2 overflow-x-auto pb-2">
        <a href="#introduction" class="flex-shrink-0 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">Pendahuluan</a>
        <a href="#architecture" class="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-colors">Arsitektur</a>
        <a href="#present" class="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-medium hover:bg-surface-container-highest transition-colors">Masa Kini</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleOpen() {
  isOpen.value = !isOpen.value
}
</script>

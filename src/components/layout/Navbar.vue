<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 h-16 transition-all duration-300',
      transparent
        ? 'opacity-0'
        : 'bg-surface/90 backdrop-blur-md border-b border-outline-variant/30',
    ]"
  >
    <div class="flex justify-between items-center px-margin-mobile md:px-gutter max-w-7xl mx-auto h-full">
      <router-link to="/" class="flex items-center gap-2.5 no-underline">
        <img :src="images.logo" alt="Logo KKN Desa Pejeng" class="w-8 h-8 md:w-10 md:h-10 object-contain" />
        <span class="font-display text-lg md:text-xl tracking-tighter text-primary font-bold">
          {{ site.namaSitus }}
        </span>
      </router-link>

      <nav class="hidden md:flex gap-8 items-center h-full">
        <router-link class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/">Beranda</router-link>
        <router-link class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/artikel/pura-kebo-edan">Artikel</router-link>
      </nav>

      <button class="md:hidden p-2 hover:bg-surface-container rounded-full transition-colors" @click="mobileOpen = !mobileOpen">
        <span class="material-symbols-outlined">{{ mobileOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <div v-show="mobileOpen" class="md:hidden bg-surface border-b border-outline-variant/30 px-margin-mobile py-4 flex flex-col gap-3">
      <router-link class="font-label-caps text-label-caps text-on-surface-variant py-2" to="/" @click="mobileOpen = false">Beranda</router-link>
      <router-link class="font-label-caps text-label-caps text-on-surface-variant py-2" to="/artikel/pura-kebo-edan" @click="mobileOpen = false">Artikel</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import images from '../../data/images.js'
import site from '../../data/site.js'

defineProps({
  transparent: { type: Boolean, default: false },
})

const mobileOpen = ref(false)
</script>

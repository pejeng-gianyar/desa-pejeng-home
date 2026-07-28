<template>
  <footer class="w-full py-section-gap bg-surface-container-low border-t border-outline-variant/50">
    <div class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-7xl mx-auto gap-8">
      <div class="text-center md:text-left">
        <div class="flex items-center gap-2.5 justify-center md:justify-start mb-2">
          <img :src="images.logo" alt="Logo KKN Desa Pejeng" class="w-5 h-5 object-contain" />
          <span class="font-display text-base tracking-tighter text-primary font-bold">{{ $t('site.namaSitus') }}</span>
        </div>
        <p class="font-caption text-caption text-on-surface-variant">&copy; {{ new Date().getFullYear() }} Tim KKN Desa Pejeng. {{ $t('footer.hakCipta') }}</p>
      </div>
      <nav class="flex gap-8 items-center font-caption text-caption">
        <router-link class="text-on-surface-variant hover:text-primary transition-colors" to="/">Beranda</router-link>
        <router-link class="text-on-surface-variant hover:text-primary transition-colors" to="/artikel/pura-kebo-edan">Artikel</router-link>
      </nav>
    </div>
    <div class="flex justify-center mt-12">
      <button class="flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group" @click="scrollToTop">
        <span class="material-symbols-outlined group-hover:-translate-y-1 transition-transform">expand_less</span>
        <span class="font-label-caps text-[10px]">{{ $t('footer.kembaliKeAtas') }}</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
import images from '../../data/images.js'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

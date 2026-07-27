<template>
  <section id="hero-section" class="relative min-h-[100dvh] flex items-center overflow-hidden">
    <div class="absolute inset-0 -z-10" style="mask-image: linear-gradient(to bottom, black 55%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);">
      <img
        :src="images.hero.village"
        alt="Desa Pejeng"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/60 to-transparent" />
      <div class="absolute inset-0 texture-dots opacity-30" />
    </div>

    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-20 -right-20 w-80 h-80 border border-gold/10 rounded-full" />
      <div class="absolute top-1/3 -right-10 w-40 h-40 border border-gold/10 rounded-full" />
      <div class="absolute -bottom-20 left-1/3 w-60 h-60 border border-gold/10 rounded-full" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">
      <div class="max-w-3xl">
        <p class="text-gold font-medium text-lg mb-3 tracking-widest uppercase animate-fade-in-up" style="animation-delay: 0.1s">
          {{ $t('village.regency') }}, {{ $t('village.province') }}
        </p>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-4 animate-fade-in-up" style="animation-delay: 0.25s">
          {{ $t('village.name') }}
        </h1>
        <p class="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed mb-6 animate-fade-in-up" style="animation-delay: 0.4s">
          {{ $t('village.tagline') }}
        </p>
        <div class="gold-divider max-w-md justify-start mb-8 animate-fade-in-up" style="animation-delay: 0.5s">
          <span class="gold-divider-dot" />
        </div>
        <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.6s">
          <BaseButton href="#about" variant="primary" size="lg" class="shadow-lg shadow-sage/20">
            {{ $t('hero.jelajahiDesa') }}
          </BaseButton>
          <BaseButton href="#about" variant="outline" size="lg" class="border-white/40 text-white hover:bg-white/10">
            {{ $t('hero.tontonVideo') }}
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-gentle-float">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>

  </section>
</template>

<script setup>
import images from '../../data/images.js'
import BaseButton from '../common/BaseButton.vue'
</script>

<template>
  <section id="article-hero" class="relative min-h-[100dvh] flex items-center overflow-hidden">
    <div class="absolute inset-0 -z-10" style="mask-image: linear-gradient(to bottom, black 55%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);">
      <img
        :src="article.image"
        :alt="$t(`articles.${article.slug}.title`)"
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
        <span class="inline-block bg-gold text-brown text-xs font-medium px-3 py-1 rounded-full mb-4 animate-fade-in-up" style="animation-delay: 0.1s">
          {{ $t(`articles.${article.slug}.category`) }}
        </span>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-4 animate-fade-in-up" style="animation-delay: 0.25s">
          {{ $t(`articles.${article.slug}.title`) }}
        </h1>
        <p class="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed mb-6 animate-fade-in-up" style="animation-delay: 0.4s">
          {{ $t(`articles.${article.slug}.excerpt`) }}
        </p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/60 text-sm animate-fade-in-up" style="animation-delay: 0.55s">
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">person</span> {{ $t(`articles.${article.slug}.author`) }}
          </span>
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">calendar_today</span> {{ article.date }}
          </span>
          <span class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">schedule</span> {{ $t(`articles.${article.slug}.readTime`) }}
          </span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({ article: { type: Object, required: true } })

const { t } = useI18n()
</script>

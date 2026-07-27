<template>
  <aside class="lg:col-span-4 hidden lg:block animate-fade-in-up" style="animation-delay: 0.2s">
    <div class="sticky top-24 space-y-6">
      <div class="bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-sm">
        <h3 class="font-bold text-brown text-lg mb-3 flex items-center gap-2">
          <span class="w-1.5 h-6 bg-[#C8A97E] rounded-full" />
          {{ $t('article.tentangTempat') }}
        </h3>

        <div class="aspect-[16/9] rounded-lg overflow-hidden mb-4">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <h4 class="font-semibold text-brown">{{ $t(`articles.${article.slug}.title`) }}</h4>
        <p class="text-sm text-brown/60 mt-1">{{ $t(`articles.${article.slug}.lokasi`) }}</p>
        <p class="text-sm text-brown/70 mt-3 leading-relaxed">
          {{ $t(`articles.${article.slug}.excerpt`) }}
        </p>
      </div>

      <div class="bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-sm">
        <h3 class="font-bold text-brown text-lg mb-3 flex items-center gap-2">
          <span class="w-1.5 h-6 bg-[#C8A97E] rounded-full" />
          {{ $t('article.lokasi') }}
        </h3>
        <div class="aspect-[4/3] rounded-lg overflow-hidden">
          <iframe
            :src="article.mapEmbedUrl"
            class="w-full h-full"
            :title="$t('article.lokasi')"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p class="text-xs text-brown/50 mt-2">
          {{ $t(`articles.${article.slug}.lokasi`) }}
        </p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  article: { type: Object, required: true },
})

const { t } = useI18n()
</script>

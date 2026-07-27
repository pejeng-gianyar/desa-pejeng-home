<template>
  <section class="py-16 md:py-24 relative overflow-hidden">
    <div class="absolute inset-0 texture-dots pointer-events-none" />
    <div class="gold-divider mb-12">
      <span class="gold-divider-dot" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="$t('articlePreview.title')" :subtitle="$t('articlePreview.subtitle')" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/artikel/${article.slug}`"
          class="block h-full"
        >
          <BaseCard hoverable class="group h-full">
            <template #image>
              <div class="w-full h-full overflow-hidden">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </template>
            <span class="inline-block bg-gold/20 text-brown text-xs font-medium px-2.5 py-1 rounded-full mb-2 border border-gold/20">
              {{ $t(`articles.${article.slug}.lokasi`) }}
            </span>
            <h3 class="text-lg font-bold text-brown mb-2 group-hover:text-sage transition-colors">
              {{ $t(`articles.${article.slug}.title`) }}
            </h3>
            <p class="text-brown/70 text-sm leading-relaxed mb-4 flex-grow">
              {{ $t(`articles.${article.slug}.excerpt`) }}
            </p>
            <span class="text-sage font-medium text-sm inline-flex items-center gap-1 mt-auto">
              {{ $t('articlePreview.bacaSelengkapnya') }}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </BaseCard>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import articles from '../../data/articles.js'
import BaseCard from '../common/BaseCard.vue'
import SectionHeading from '../common/SectionHeading.vue'
</script>

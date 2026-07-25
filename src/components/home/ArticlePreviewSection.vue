<template>
  <section class="py-16 md:py-24 relative overflow-hidden">
    <div class="absolute inset-0 texture-dots pointer-events-none" />
    <div class="gold-divider mb-12">
      <span class="gold-divider-dot" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Pura Bersejarah" subtitle="Jelajahi pura-pura kuno yang menyimpan kisah peradaban Bali Kuno" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="article in articles"
          :key="article.slug"
          :to="`/artikel/${article.slug}`"
          class="block"
        >
          <BaseCard hoverable class="group">
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
              {{ article.lokasi }}
            </span>
            <h3 class="text-lg font-bold text-brown mb-2 group-hover:text-sage transition-colors">
              {{ article.title }}
            </h3>
            <p class="text-brown/70 text-sm leading-relaxed mb-4">
              {{ article.excerpt }}
            </p>
            <span class="text-sage font-medium text-sm inline-flex items-center gap-1">
              Baca selengkapnya
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

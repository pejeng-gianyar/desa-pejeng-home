<template>
  <section id="about" class="py-16 md:py-24 bg-white/30 relative overflow-hidden">
    <div class="absolute inset-0 bali-pattern pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <SectionHeading title="Pura-Pura Bersejarah di Desa Pejeng" subtitle="Jelajahi kisah pura kuno yang tersebar di seluruh penjuru desa" />

      <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 mb-12 items-start">
        <div class="aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20">
          <iframe
            :src="village.videoUrl"
            class="w-full h-full"
            title="Video Profil Desa Pejeng"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          />
        </div>

        <div>
          <p class="text-brown/80 leading-relaxed text-lg mb-6">
            {{ village.history }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import village from '../../data/village.js'
import SectionHeading from '../common/SectionHeading.vue'
</script>

<template>
  <section class="py-section-gap">
    <div class="gold-divider mb-8">
      <span class="gold-divider-dot" />
    </div>
    <div class="text-center max-w-2xl mx-auto mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-brown relative inline-block mb-4">
        Galeri Foto
      </h2>
      <div class="gold-divider">
        <span class="gold-divider-dot" />
      </div>
    </div>

    <div class="flex overflow-x-auto gap-4 pb-4 px-margin-mobile md:px-gutter snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div
        v-for="(_, index) in images"
        :key="index"
        class="flex-none w-[85%] sm:w-[60%] md:w-[45%] bg-brown/5 border border-outline-variant/20 aspect-video rounded-xl flex items-center justify-center snap-center transition-transform duration-300 hover:scale-[1.02] cursor-pointer hover:shadow-md"
        @click="openLightbox(index)"
      >
        <div class="w-full h-full flex items-center justify-center">
          <span class="material-symbols-outlined text-4xl text-brown/20 group-hover:scale-110 transition-transform">photo_camera</span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxIndex !== null"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <button
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          @click.stop="closeLightbox"
        >
          <span class="material-symbols-outlined text-2xl">close</span>
        </button>

        <button
          v-if="images.length > 1"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          @click.stop="prevImage"
        >
          <span class="material-symbols-outlined text-2xl">chevron_left</span>
        </button>

        <div
          class="w-[80vw] max-w-3xl aspect-video bg-brown/10 rounded-2xl flex items-center justify-center"
          @click.stop
        >
          <span class="material-symbols-outlined text-6xl text-white/20">photo_camera</span>
        </div>

        <button
          v-if="images.length > 1"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          @click.stop="nextImage"
        >
          <span class="material-symbols-outlined text-2xl">chevron_right</span>
        </button>

        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span
            v-for="(_, i) in images"
            :key="i"
            :class="[
              'w-2 h-2 rounded-full transition-all',
              i === lightboxIndex ? 'bg-white w-4' : 'bg-white/40',
            ]"
          />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
})

const lightboxIndex = ref(null)

function openLightbox(index) {
  lightboxIndex.value = index
}

function closeLightbox() {
  lightboxIndex.value = null
}

function prevImage() {
  if (lightboxIndex.value === null || props.images.length <= 1) return
  lightboxIndex.value = (lightboxIndex.value - 1 + props.images.length) % props.images.length
}

function nextImage() {
  if (lightboxIndex.value === null || props.images.length <= 1) return
  lightboxIndex.value = (lightboxIndex.value + 1) % props.images.length
}

function onKeydown(e) {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})

watch(lightboxIndex, (val) => {
  document.body.style.overflow = val !== null ? 'hidden' : ''
})
</script>

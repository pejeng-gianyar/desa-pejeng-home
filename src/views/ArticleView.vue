<template>
  <div class="">
    <Navbar :transparent="navbarTransparent" />

    <main>
      <ArticleHero :article="article" />

      <PhotoGallery :images="article.gallery" />

      <div class="max-w-7xl mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-12">
        <ArticleContent :contentHtml="contentHtml" />
        <PlaceSidebar :article="article" />
      </div>

      <div class="block lg:hidden mt-12 space-y-8 pb-section-gap px-margin-mobile md:px-gutter max-w-7xl mx-auto">
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
          <h3 class="font-label-caps text-label-caps text-accent-gold mb-6 border-b border-outline-variant/30 pb-4">
            INFORMASI PURA
          </h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
              <span class="text-sm text-on-surface-variant">Lokasi</span>
              <span class="text-sm font-semibold text-right">{{ article.lokasi }}</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
              <span class="text-sm text-on-surface-variant">Periode</span>
              <span class="text-sm font-semibold text-right">{{ article.periode }}</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
              <span class="text-sm text-on-surface-variant">Pendiri</span>
              <span class="text-sm font-semibold text-right">{{ article.pendiri }}</span>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="text-sm text-on-surface-variant">Dewa Utama</span>
              <span class="text-sm font-semibold text-right">{{ article.dewaUtama }}</span>
            </div>
          </div>
          <button class="w-full mt-6 bg-deep-green text-white py-3 rounded-lg font-label-caps text-label-caps hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">location_on</span>
            LIHAT DI PETA
          </button>
        </div>
        <div class="flex items-center gap-4">
          <button class="flex-1 flex items-center justify-center gap-2 py-3 border border-outline rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[18px]">bookmark</span>
            SIMPAN
          </button>
          <button class="flex-1 flex items-center justify-center gap-2 py-3 border border-outline rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[18px]">share</span>
            BAGIKAN
          </button>
        </div>
      </div>
    </main>

    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="gold-divider mb-12">
        <span class="gold-divider-dot" />
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Artikel Lainnya" subtitle="Jelajahi pura-pura bersejarah lainnya di Desa Pejeng" />
        <div class="flex flex-wrap justify-center gap-6">
          <router-link
            v-for="other in otherArticles"
            :key="other.slug"
            :to="`/artikel/${other.slug}`"
            class="w-full sm:w-[calc(50%-12px)] max-w-md flex flex-col"
          >
            <BaseCard hoverable class="group h-full w-full">
              <template #image>
                <div class="w-full h-full overflow-hidden">
                  <img
                    :src="other.image"
                    :alt="other.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </template>
              <span class="inline-block bg-gold/20 text-brown text-xs font-medium px-2.5 py-1 rounded-full mb-2 border border-gold/20">
                {{ other.lokasi }}
              </span>
              <h3 class="text-lg font-bold text-brown mb-2 group-hover:text-sage transition-colors">
                {{ other.title }}
              </h3>
              <p class="text-brown/70 text-sm leading-relaxed mb-4 flex-grow">
                {{ other.excerpt }}
              </p>
              <span class="text-sage font-medium text-sm hover:text-sage/80 transition-colors inline-flex items-center gap-1 group/link mt-auto">
                Baca selengkapnya
                <span class="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
              </span>
            </BaseCard>
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, shallowRef, watchEffect, onMounted, onUnmounted, nextTick } from 'vue'
import articles from '../data/articles.js'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import ArticleHero from '../components/article/ArticleHero.vue'
import ArticleContent from '../components/article/ArticleContent.vue'
import PlaceSidebar from '../components/article/PlaceSidebar.vue'
import BaseCard from '../components/common/BaseCard.vue'
import SectionHeading from '../components/common/SectionHeading.vue'
import PhotoGallery from '../components/article/PhotoGallery.vue'

const route = useRoute()
const article = computed(() => articles.find(a => a.slug === route.params.slug) || articles[0])
const contentHtml = shallowRef('')
const otherArticles = computed(() => articles.filter(a => a.slug !== article.value.slug).slice(0, 3))

const navbarTransparent = ref(true)
let navbarObserver = null

onMounted(() => {
  const heroEl = document.getElementById('article-hero')
  if (!heroEl) return

  navbarObserver = new IntersectionObserver(
    ([entry]) => {
      navbarTransparent.value = entry.isIntersecting
    },
    { threshold: 0 },
  )
  navbarObserver.observe(heroEl)
})

watchEffect(async () => {
  if (!article.value) return
  const module = await import(`../data/content/${article.value.slug}.js`)
  contentHtml.value = module.default
  await nextTick()
  initScrollEffects()
})

let progressBar = null
let tocObserver = null
let fadeObserver = null
let scrollListener = null

function initScrollEffects() {
  const existing = document.getElementById('progress-bar')
  if (existing) existing.remove()

  progressBar = document.createElement('div')
  progressBar.id = 'progress-bar'
  progressBar.className = 'fixed top-16 left-0 h-[2px] bg-accent-gold z-50 transition-all duration-100'
  progressBar.style.width = '0%'
  document.body.appendChild(progressBar)

  if (scrollListener) window.removeEventListener('scroll', scrollListener)
  scrollListener = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    progressBar.style.width = (winScroll / height) * 100 + '%'
  }
  window.addEventListener('scroll', scrollListener)

  if (tocObserver) tocObserver.disconnect()
  tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        document.querySelectorAll('aside nav a, .chip-scroll a').forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('text-primary', 'font-bold', 'border-l-2', 'border-primary')
            link.classList.remove('text-on-surface-variant')
          } else {
            link.classList.remove('text-primary', 'font-bold', 'border-l-2', 'border-primary')
            link.classList.add('text-on-surface-variant')
          }
        })
      }
    })
  }, { root: null, rootMargin: '0px', threshold: 0.5 })

  document.querySelectorAll('section[id], article section[id]').forEach((section) => {
    tocObserver.observe(section)
  })

  if (fadeObserver) fadeObserver.disconnect()
  fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.fade-in').forEach((el) => {
    fadeObserver.observe(el)
  })
}

onUnmounted(() => {
  if (progressBar) progressBar.remove()
  if (scrollListener) window.removeEventListener('scroll', scrollListener)
  if (tocObserver) tocObserver.disconnect()
  if (fadeObserver) fadeObserver.disconnect()
  if (navbarObserver) navbarObserver.disconnect()
})
</script>

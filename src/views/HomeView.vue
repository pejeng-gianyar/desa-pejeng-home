<template>
  <div class="">
    <Navbar :transparent="navbarTransparent" />

    <HeroSection />
    <AboutSection />
    <ArticlePreviewSection />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ArticlePreviewSection from '../components/home/ArticlePreviewSection.vue'
import Footer from '../components/layout/Footer.vue'

const navbarTransparent = ref(true)
let observer = null

onMounted(() => {
  const heroEl = document.getElementById('hero-section')
  if (!heroEl) return

  observer = new IntersectionObserver(
    ([entry]) => {
      navbarTransparent.value = entry.isIntersecting
    },
    { threshold: 0 },
  )
  observer.observe(heroEl)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

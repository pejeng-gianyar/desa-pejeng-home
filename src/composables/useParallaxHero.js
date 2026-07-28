import { computed, onMounted, onUnmounted, ref } from 'vue'

export function useParallaxHero(sectionId) {
  const progress = ref(0)

  let ticking = null
  const onScroll = () => {
    if (ticking) return
    ticking = requestAnimationFrame(() => {
      const el = document.getElementById(sectionId)
      if (!el) { ticking = null; return }

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = el.offsetHeight - vh
      const p = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0
      progress.value = p
      ticking = null
    })
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => {
    if (ticking) cancelAnimationFrame(ticking)
    window.removeEventListener('scroll', onScroll)
  })

  const contentStyle = computed(() => ({
    transform: `translateY(${progress.value * -25}%) scale(${1 - progress.value * 0.08})`,
    opacity: 1 - progress.value,
  }))

  const arrowStyle = computed(() => ({
    opacity: 1 - progress.value * 3,
  }))

  return { progress, contentStyle, arrowStyle }
}

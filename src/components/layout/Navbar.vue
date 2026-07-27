<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 h-16 transition-all duration-300',
      !transparent ? 'bg-surface/90 backdrop-blur-md border-b border-outline-variant/30' : '',
    ]"
  >
    <div class="flex justify-between items-center px-margin-mobile md:px-gutter max-w-7xl mx-auto h-full">
      <div
        :class="[
          'flex items-center gap-2.5 flex-1 transition-all duration-300',
          transparent ? 'opacity-0 pointer-events-none' : '',
        ]"
      >
        <router-link to="/" class="flex items-center gap-2.5 no-underline">
          <img :src="images.logo" alt="Logo KKN Desa Pejeng" class="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span class="font-display text-lg md:text-xl tracking-tighter text-primary font-bold">
            {{ $t('site.namaSitus') }}
          </span>
        </router-link>

        <nav class="hidden md:flex gap-8 items-center h-full ml-8">
          <router-link class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/">{{ $t('nav.beranda') }}</router-link>
          <router-link class="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/artikel/pura-kebo-edan">{{ $t('nav.artikel') }}</router-link>
        </nav>
      </div>

      <div class="flex items-center gap-2 flex-shrink-0">
        <button
          class="px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200"
          :class="$i18n.locale === 'en' ? 'bg-accent-gold text-primary border-accent-gold' : (transparent ? 'border-white/60 text-white hover:border-accent-gold' : 'border-outline text-on-surface-variant hover:border-accent-gold')"
          @click="$i18n.locale = 'en'; localStorage.setItem('locale', 'en')"
          :title="$t('nav.ubahBahasa')"
        >EN</button>
        <button
          class="px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200"
          :class="$i18n.locale === 'id' ? 'bg-accent-gold text-primary border-accent-gold' : (transparent ? 'border-white/60 text-white hover:border-accent-gold' : 'border-outline text-on-surface-variant hover:border-accent-gold')"
          @click="$i18n.locale = 'id'; localStorage.setItem('locale', 'id')"
          :title="$t('nav.ubahBahasa')"
        >ID</button>
      </div>

      <button
        :class="[
          'md:hidden p-2 hover:bg-surface-container rounded-full transition-colors transition-opacity duration-300',
          transparent ? 'opacity-0 pointer-events-none' : '',
        ]"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="material-symbols-outlined">{{ mobileOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <div v-show="mobileOpen" class="md:hidden bg-surface border-b border-outline-variant/30 px-margin-mobile py-4 flex flex-col gap-3">
      <router-link class="font-label-caps text-label-caps text-on-surface-variant py-2" to="/" @click="mobileOpen = false">{{ $t('nav.beranda') }}</router-link>
      <router-link class="font-label-caps text-label-caps text-on-surface-variant py-2" to="/artikel/pura-kebo-edan" @click="mobileOpen = false">{{ $t('nav.artikel') }}</router-link>
      <div class="flex gap-2 pt-2 border-t border-outline-variant/30">
        <button
          class="flex-1 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200"
          :class="$i18n.locale === 'en' ? 'bg-accent-gold text-primary border-accent-gold' : 'border-outline text-on-surface-variant'"
          @click="$i18n.locale = 'en'; localStorage.setItem('locale', 'en'); mobileOpen = false"
        >EN</button>
        <button
          class="flex-1 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200"
          :class="$i18n.locale === 'id' ? 'bg-accent-gold text-primary border-accent-gold' : 'border-outline text-on-surface-variant'"
          @click="$i18n.locale = 'id'; localStorage.setItem('locale', 'id'); mobileOpen = false"
        >ID</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import images from '../../data/images.js'

defineProps({
  transparent: { type: Boolean, default: false },
})

const { t } = useI18n()
const mobileOpen = ref(false)
</script>

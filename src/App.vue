<template>
  <router-view />
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

watch(locale, (val) => {
  document.documentElement.lang = val
  document.title = t('site.namaSitus')
}, { immediate: true })
</script>

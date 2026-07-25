<template>
  <div class="text-center max-w-2xl mx-auto mb-12">
    <h2
      :class="[
        'text-3xl md:text-4xl font-bold text-brown relative inline-block',
        withUnderline ? 'mb-4' : '',
      ]"
    >
      {{ title }}
    </h2>
    <div v-if="withUnderline" class="gold-divider mt-4">
      <span class="gold-divider-dot" />
    </div>
    <p v-if="subtitle" class="mt-5 text-brown/70 text-lg leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: String,
  withUnderline: { type: Boolean, default: true },
})
</script>

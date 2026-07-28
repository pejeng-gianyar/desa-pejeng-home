<template>
  <div
    :class="[
      'bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden transition-shadow duration-300 flex flex-col h-full',
      hoverable ? 'hover:shadow-lg cursor-pointer' : 'shadow-sm',
    ]"
  >
    <div v-if="$slots.image" class="aspect-[16/10] overflow-hidden flex-shrink-0 bg-brown/10">
      <slot name="image" />
    </div>
    <div :class="['p-5 flex-1 flex flex-col', !$slots.image ? 'pt-5' : '']">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  hoverable: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="[
      'bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden transition-shadow duration-300',
      hoverable ? 'hover:shadow-lg cursor-pointer' : 'shadow-sm',
    ]"
  >
    <div v-if="$slots.image" class="aspect-[16/10] overflow-hidden">
      <slot name="image" />
    </div>
    <div :class="['p-5', !$slots.image ? 'pt-5' : '']">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  hoverable: { type: Boolean, default: false },
})
</script>

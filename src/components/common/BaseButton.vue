<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200',
      variant === 'primary'
        ? 'bg-sage text-white hover:bg-sage/90'
        : variant === 'outline'
          ? 'border border-sage text-sage hover:bg-sage/10'
          : 'text-brown hover:text-gold',
      size === 'sm' ? 'px-4 py-1.5 text-sm' : size === 'lg' ? 'px-8 py-3 text-lg' : 'px-6 py-2.5 text-base',
      rounded ? 'rounded-lg' : '',
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: String,
  href: String,
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  rounded: { type: Boolean, default: true },
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>

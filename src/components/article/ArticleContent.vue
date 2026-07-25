<template>
  <article class="lg:col-span-8 stairway-line md:pl-8">
    <div class="max-w-[760px]">
      <div v-html="contentHtml"></div>
    </div>
  </article>
</template>

<script setup>
defineProps({ contentHtml: { type: String, required: true } })
</script>

<template>
  <NuxtLink v-if="to" class="button" :to="to">{{ label }}</NuxtLink>
  <button v-else class="button">{{ label }}</button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})
</script>

<style>
.button {
  @apply block;
  @apply p-4;
  @apply bg-fw-blue;
  @apply min-w-24;
  text-transform: uppercase;
  @apply text-sm;
  @apply font-semibold;
  @apply tracking-wide;
  @apply rounded-sm;
  @apply text-fw-white;

  &:hover,
  &:focus {
    @apply bg-fw-blue-2;
  }
}
</style>

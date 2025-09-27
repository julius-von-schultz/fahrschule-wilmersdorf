<template>
  <nuxt-icon
    v-if="name"
    :class="[
      { 'custom-svg--large': size === 'large' },
      { 'custom-svg--small': size === 'small' },
    ]"
    :name="`${name}`"
    filled
  />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'base',
    validator: (val) => ['small', 'base', 'large'].includes(val),
  },
})
</script>

<style lang="scss">
.custom-svg {
  @apply inline-flex items-center;

  &--small {
    svg {
      @apply h-[12px] w-[12px];
    }
  }

  &--base {
    svg {
      @apply h-[24px] w-[24px];
    }
  }

  &--large {
    svg {
      @apply h-[32px] w-[32px];

      @screen md {
        @apply h-[40px] w-[40px];
      }
    }
  }
}
</style>

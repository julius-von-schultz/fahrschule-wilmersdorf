<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 16"
    fill="none"
    class="burger-icon"
    :class="{ 'burger-icon--active': isActive }"
  >
    <g>
      <path
        d="M0 0H24V2H0V0Z"
        class="burger-icon__path burger-icon__path--top"
      />
      <path
        d="M0 7H24V9H0V7Z"
        class="burger-icon__path burger-icon__path--middle"
      />
      <path
        d="M0 14H24V16H0V14Z"
        class="burger-icon__path burger-icon__path--bottom"
      />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  /**
   * Control the burger icon form
   */
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss">
.burger-icon {
  @apply cursor-pointer;
  @apply w-6 h-6;

  &__path {
    @apply fill-fw-white;
    @apply duration-300;
    @apply ease-in-out;

    &--top {
      transform-origin: 14.5% 28%;

      .burger-icon--active & {
        @apply rotate-45;
      }
    }

    &--middle {
      @apply opacity-100;
      @apply duration-200;
      transition-property: opacity;

      .burger-icon--active & {
        @apply opacity-0;
      }
    }

    &--bottom {
      transform-origin: 15% 72%;

      .burger-icon--active & {
        @apply -rotate-45;
      }
    }
  }
}
</style>

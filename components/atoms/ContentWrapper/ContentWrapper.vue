<template>
  <div class="content-wrapper" :class="`content-wrapper--${props.width}`">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: 'wide',
    validator: (val) => ['full', 'wide', 'narrow'].includes(val),
  },
})
</script>

<style lang="scss">
.content-wrapper {
  @apply h-full;
  justify-self: center;

  @apply w-[210px];

  @screen md {
    @apply w-[704px];
  }

  &--wide {
    @screen lg {
      @apply w-[1064px];
    }
  }

  &--narrow {
    @screen lg {
      @apply w-[908px];
    }
  }
}
</style>

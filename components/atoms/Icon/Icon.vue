<template>
  <CustomSvg
    v-if="type === 'svg'"
    :name="icon"
    :class="['icon__svg', `icon--${size}`]"
    :aria-label="title ? title : undefined"
    :aria-hidden="!title"
    role="img"
    :size="size"
    @click="$emit('click')"
  />
  <span
    v-else
    class="material-icons"
    :class="['icon__material', `icon--${size}`]"
    :aria-label="title ? title : undefined"
    :aria-hidden="!title"
    role="img"
    @click="$emit('click')"
  >
    {{ icon }}
  </span>
</template>

<script setup>
defineProps({
  /**
   * The icon to display
   * @see [Icon List] (https://fonts.google.com/icons?selected=Material+Icons)
   */
  icon: {
    type: String,
    required: true,
  },
  /**
   * The alternative title of the icon visible to screen readers (for better accessibility)
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * The size of the icon
   * @values xsmall, small, base, large, xlarge, xxlarge, h3, paragraph
   */
  size: {
    type: String,
    default: 'base',
    validator: (val) =>
      [
        'xsmall',
        'small',
        'base',
        'large',
        'xlarge',
        'xxlarge',
        'h3',
        'paragraph',
      ].includes(val),
  },
  /**
   * Set the type of icon
   * @values material-icon, svg
   */
  type: {
    type: String,
    default: 'material-icon',
    validator: (val) => ['material-icon', 'svg'].includes(val),
  },
})

defineEmits(['click'])
</script>

<style lang="scss">
@import 'material-icons/iconfont/material-icons.css';

.icon {
  &__material {
    &.icon--xsmall {
      @apply text-base;
      @apply w-4;
    }

    &.icon--small {
      font-size: 1.125rem;
      @apply w-[18px];
    }

    &.icon--base {
      @apply text-xl;
      @apply w-6;
    }

    &.icon--large {
      @apply text-3xl;
      @apply w-8;
    }

    &.icon--xlarge {
      font-size: 4rem;
      @apply w-16;
    }

    &.icon--xxlarge {
      font-size: 6rem;
      @apply w-24;

      @screen lg {
        font-size: 8rem;
        @apply w-32;
      }
    }

    &.icon--h3 {
      @apply text-2xl;
      @apply w-7;

      @screen lg {
        @apply text-4xl;
        @apply w-9;
      }
    }

    &.icon--paragraph {
      @apply text-xl;
      @apply w-6;
    }
  }
}
</style>

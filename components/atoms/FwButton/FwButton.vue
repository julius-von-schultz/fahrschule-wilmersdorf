<template>
  <NuxtLink v-if="to" :class="buttonClasses" :to="to">
    <Icon v-if="icon" :icon="icon" :size="iconSize" class="fw-button__icon" />
    <span v-if="label" class="fw-button__label">{{ label }}</span>
  </NuxtLink>
  <button
    v-else
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :icon="icon"
      :size="iconSize"
      :type="iconType"
      class="fw-button__icon"
    />
    <span v-if="label" class="fw-button__label">{{ label }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (val) =>
      ['primary', 'secondary', 'outline', 'plain'].includes(val),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (val) => ['small', 'medium', 'large'].includes(val),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'button',
    validator: (val) => ['button', 'submit', 'reset'].includes(val),
  },
})

const emit = defineEmits(['click'])

const iconSize = computed(() => {
  const sizeMap = {
    small: 'small',
    medium: 'base',
    large: 'large',
  }
  return sizeMap[props.size]
})

const buttonClasses = computed(() => {
  const baseClasses = [
    'fw-button',
    `fw-button--${props.variant}`,
    `fw-button--${props.size}`,
  ]

  if (props.disabled) {
    baseClasses.push('fw-button--disabled')
  }

  if (props.icon && !props.label) {
    baseClasses.push('fw-button--icon-only')
  }

  return baseClasses.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style lang="scss">
.fw-button {
  @apply inline-flex items-center justify-center;
  @apply font-semibold tracking-wide;
  @apply rounded-sm;
  @apply transition-all duration-200;
  @apply cursor-pointer;
  @apply border-2 border-transparent;
  text-transform: uppercase;
  text-decoration: none;

  &:focus {
    @apply outline-none ring-2 ring-offset-2;
  }

  /* Variants */
  &--primary {
    @apply bg-fw-blue text-fw-white;
    @apply border-transparent;

    &:hover:not(.fw-button--disabled) {
      @apply bg-fw-yellow-4;
    }

    &:focus {
      @apply ring-fw-blue;
    }
  }

  &--secondary {
    @apply bg-fw-yellow-2 text-fw-dark-blue-1;
    @apply border-transparent;

    &:hover:not(.fw-button--disabled) {
      @apply bg-fw-yellow-3;
    }

    &:focus {
      @apply ring-fw-yellow-2;
    }
  }

  &--outline {
    @apply bg-transparent text-fw-white;
    @apply border-fw-white;

    &:hover:not(.fw-button--disabled) {
      @apply bg-fw-white text-fw-dark-blue-1;
    }

    &:focus {
      @apply ring-fw-white;
    }
  }

  &--plain {
    @apply bg-transparent text-fw-white;
    @apply border-transparent;

    &:hover:not(.fw-button--disabled) {
      @apply bg-fw-white bg-opacity-10;
    }

    &:focus {
      @apply ring-fw-white;
    }
  }

  /* Sizes */
  &--small {
    @apply py-2 px-3 text-xs;
    @apply gap-1;
  }

  &--medium {
    @apply py-4 px-5 text-sm;
    @apply gap-2;
  }

  &--large {
    @apply py-5 px-6 text-base;
    @apply gap-3;
  }

  /* Icon only buttons */
  &--icon-only {
    &.fw-button--small {
      @apply p-2;
    }

    &.fw-button--medium {
      @apply p-3;
    }

    &.fw-button--large {
      @apply p-4;
    }
  }

  /* Disabled state */
  &--disabled {
    @apply bg-fw-grey-14 text-fw-grey-4;
    @apply border-fw-grey-14;
    @apply cursor-not-allowed;
    @apply pointer-events-none;

    &:hover {
      @apply cursor-not-allowed;
    }
  }

  /* Icon and label spacing */
  &__icon {
    @apply flex-shrink-0;
  }

  &__label {
    @apply whitespace-nowrap;
  }
}
</style>

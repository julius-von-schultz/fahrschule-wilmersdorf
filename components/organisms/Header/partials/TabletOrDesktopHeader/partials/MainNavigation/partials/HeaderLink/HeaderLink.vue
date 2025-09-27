<template>
  <div
    class="header-entry"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <NuxtLink class="header-entry__opener" :to="props.link">
      <span>{{ props.label }}</span>
      <Icon v-if="props.hasSubmenu" :icon="props.icon" />
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '/',
  },
  hasSubmenu: {
    type: Boolean,
    default: false,
  },
  sectionKey: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['hover', 'leave'])

const handleMouseEnter = () => {
  if (props.hasSubmenu && props.sectionKey) {
    emit('hover', props.sectionKey)
  }
}

const handleMouseLeave = () => {
  if (props.hasSubmenu && props.sectionKey) {
    emit('leave')
  }
}
</script>

<style lang="scss">
.header-entry {
  &__opener {
    @apply flex justify-between items-center;
    @apply gap-x-3;
    @apply text-lg leading-6;
    @apply py-2;
    @apply font-medium;
    @apply text-fw-white;
    @apply no-underline;
    @apply transition-colors duration-200;

    @screen lg {
      @apply py-3;
    }

    &:hover {
      @apply cursor-pointer;
      @apply text-fw-blue-4;
    }
  }
}
</style>

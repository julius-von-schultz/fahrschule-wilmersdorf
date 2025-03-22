<template>
  <div class="header-entry">
    <div @mouseenter="changeActivated" @mouseleave="changeActivated">
      <NuxtLink class="header-entry__opener" :to="props.link">
        <span>{{ props.label }}</span>
        <Icon :icon="props.icon" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  icon: {
    type: String,
    default: '',
    required: true,
  },
  link: {
    type: String,
    default: '/',
  },
  subentries: {
    type: Array,
    default: () => [],
  },
})

const active = ref(false)

const changeActivated = () => {
  active.value = !active.value
}
</script>

<style lang="scss">
.header-entry {
  &__opener {
    @apply flex;
    @apply justify-between items-center;
    @apply text-[20px] font-semibold;

    &:hover {
      @apply cursor-pointer;
      @apply text-fw-yellow-1;
    }
  }
}
</style>

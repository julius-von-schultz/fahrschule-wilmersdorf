<template>
  <div class="header-entry">
    <div @mouseenter="changeActivated" @mouseleave="changeActivated">
      <NuxtLink class="header-entry__opener" :to="props.link">
        <span>{{ props.label }}</span>
        <Icon :icon="props.icon" />
      </NuxtLink>
    </div>
    <div
      v-show="subentries.length && active"
      class="header-entry__sub-menu"
      @mouseenter="changeActivated"
      @mouseleave="changeActivated"
    >
      <ul>
        <li
          v-for="entry in subentries"
          :key="entry.index"
          class="header-entry__sub-entry"
        >
          <NuxtLink :to="entry.link">
            {{ entry.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
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
    @apply text-[20px] font-medium;

    &:hover {
      @apply cursor-pointer;
      @apply text-fw-yellow-1;
    }
  }

  &__sub-menu {
    @apply absolute;
    @apply bg-fw-blue;
    @apply border-2;
    @apply border-fw-grey-6;
    @apply leading-5;
    @apply text-lg;
    z-index: 5;
    @apply rounded-sm;
  }

  &__sub-entry {
    @apply py-3 px-4;

    &:hover {
      @apply bg-fw-blue-2;
    }
  }
}
</style>

<template>
  <div class="mobile-nav" :class="'mobile-nav--open'">
    <div class="mobile-nav__content">
      <nav class="mobile-nav__links">
        <div
          v-for="entry in entries"
          :key="entry.index"
          class="mobile-nav__item"
        >
          <div class="mobile-nav__entry" @click="toggleSubmenu(entry.index)">
            <NuxtLink :to="entry.link" class="mobile-nav__link">
              {{ entry.label }}
            </NuxtLink>
            <Icon
              v-if="entry.subEntries && entry.subEntries.length > 0"
              :icon="
                expandedMenus.includes(entry.index)
                  ? 'expand_less'
                  : 'expand_more'
              "
            />
          </div>

          <div
            v-if="entry.subEntries && entry.subEntries.length > 0"
            class="mobile-nav__submenu"
            :class="{
              'mobile-nav__submenu--open': expandedMenus.includes(entry.index),
            }"
          >
            <NuxtLink
              v-for="subentry in entry.subEntries"
              :key="subentry.index"
              :to="subentry.link"
              class="mobile-nav__sublink"
            >
              {{ subentry.label }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { useCmsContentStore } from '~/stores/cmsContent/cmsContent'
import { storeToRefs } from 'pinia'

const cmsContentStore = useCmsContentStore()
const { header } = storeToRefs(cmsContentStore)

const entries = computed(() => header.value?.mainNavigation?.navigationEntries || [])

// Initialize all accordions as open based on entries that have subEntries
const expandedMenus = ref<number[]>([])

onBeforeMount(async () => {
  await cmsContentStore.fetchHeader()
  // Once data is loaded, set all entries with subEntries to be expanded
  if (header.value?.mainNavigation?.navigationEntries) {
    expandedMenus.value = header.value.mainNavigation.navigationEntries
      .filter(entry => entry.subEntries && entry.subEntries.length > 0)
      .map(entry => entry.index)
  }
})

const toggleSubmenu = (index: number) => {
  if (expandedMenus.value.includes(index)) {
    expandedMenus.value = expandedMenus.value.filter((i) => i !== index)
  } else {
    expandedMenus.value.push(index)
  }
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  @apply absolute;
  @apply left-0;
  @apply w-full;
  max-height: 100vh;
  @apply px-3 py-4;
  @apply z-0;
  @apply bg-fw-blue;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &__links {
    @apply flex flex-col;
    @apply w-full;
    @apply mt-4;
  }

  &__item {
    @apply pb-2;
    @apply mb-4;
    @apply border-b border-fw-blue-2;

    &:last-child {
      @apply border-0;
    }
  }

  &__entry {
    @apply flex justify-between items-center;
    @apply cursor-pointer;
  }

  &__link {
    @apply block;
    @apply text-fw-white;
    @apply font-medium;
    @apply py-1;
    @apply w-full;
    @apply cursor-pointer;
    @apply no-underline;
  }

  &__icon {
    @apply text-fw-white;
    transition: transform 0.3s;
  }

  &__submenu {
    max-height: 0;
    @apply overflow-hidden;
    transition: all 0.3s ease-in-out;
    @apply pl-4;

    &--open {
      max-height: 100vh;
      @apply py-2;
    }
  }

  &__sublink {
    @apply block;
    @apply py-1;
    @apply text-fw-white;
    @apply opacity-80;
    @apply cursor-pointer;
    @apply no-underline;

    &:hover {
      @apply opacity-100;
    }
  }

  &__language {
    @apply mt-4;
    @apply pt-2;
    @apply border-t border-fw-blue-2;
  }
}
</style>

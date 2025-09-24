<template>
  <div class="mobile-nav" :class="'mobile-nav--open'">
    <div class="mobile-nav__content">
      <nav class="mobile-nav__links">
        <div v-for="entry in entries" :key="entry.index" class="mobile-nav__item">
          <div class="mobile-nav__entry" @click="toggleSubmenu(entry.index)">
            <NuxtLink :to="entry.link" class="mobile-nav__link">
              {{ entry.label }}
            </NuxtLink>
            <Icon v-if="entry.subentries" :icon="expandedMenus.includes(entry.index) ? 'expand_less' : 'expand_more'" />
          </div>

          <div
              v-if="entry.subentries"
              class="mobile-nav__submenu"
              :class="{ 'mobile-nav__submenu--open': expandedMenus.includes(entry.index) }"
          >
            <NuxtLink
                v-for="subentry in entry.subentries"
                :key="subentry.index"
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
import { ref, computed } from 'vue'

  const { t } = useI18n()


  const expandedMenus = ref<number[]>([0,1,2,3,4])

  const toggleSubmenu = (index: number) => {
  if (expandedMenus.value.includes(index)) {
  expandedMenus.value = expandedMenus.value.filter(i => i !== index)
} else {
  expandedMenus.value.push(index)
}
}

  const entries = computed(() => [
  {
    index: 0,
    label: t('header.about'),
    link: '/über-uns',
    subentries: [
  {
    index: 5,
    label: t('header.location'),
    link: '/standort',
  },
  {
    index: 6,
    label: t('header.team'),
    link: '/unser-team',
  },
  {
    index: 7,
    label: t('header.philosophy'),
    link: '/unsere-philosophie',
  },
    ],
  },
  {
    index: 1,
    label: t('header.offer'),
    link: '/angebot',
    subentries: [
  {
    index: 8,
    label: t('header.drivingLicenceCategories'),
    link: '/fuehrerscheinklassen',
  },
  {
    index: 9,
    label: t('header.theoryLessons'),
    link: '/theorieunterricht',
  },
  {
    index: 10,
    label: t('header.compulsoryJourneys'),
    link: '/pflichtfahrten',
  },
  {
    index: 11,
    label: t('header.refresherLessons'),
    link: '/auffrischungsstunden',
  },
    ],
  },
  { index: 2, label: t('header.price'), link: '/preise' },
  {
    index: 3,
    label: t('header.contact'),
    link: '/kontakt',
    subentries: [
  {
    index: 12,
    label: t('header.contactForm'),
    link: '/kontakt',
  },
  {
    index: 13,
    label: t('header.contactLocation'),
    link: '/standort',
  },
    ],
  },
  ])
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

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
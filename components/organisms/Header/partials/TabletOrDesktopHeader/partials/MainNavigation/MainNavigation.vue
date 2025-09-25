<template>
  <div class="main-navigation-wrapper">
    <nav class="main-navigation">
      <HeaderLink
        v-for="entry in entries"
        :key="entry.index"
        :label="entry.label"
        :icon="entry.icon"
        :link="entry.link"
        :has-submenu="entry.subentries && entry.subentries.length > 0"
        :section-key="entry.sectionKey"
        @hover="handleHover"
        @leave="handleLeave"
      />
      <LanguageSwitcher />
    </nav>
    <!--
    <MegaMenu
        :is-visible="true"
        active-section="offer"
        @close="closeMegaMenu"
        @keep-open="keepMegaMenuOpen"
    />
    -->
    <MegaMenu
      :is-visible="megaMenuVisible"
      :active-section="activeSection"
      @close="closeMegaMenu"
      @keep-open="keepMegaMenuOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MegaMenu from '~/components/organisms/Header/partials/TabletOrDesktopHeader/partials/MegaMenu/MegaMenu.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const megaMenuVisible = ref(false)
const activeSection = ref<string | null>(null)
let closeTimeout: NodeJS.Timeout | null = null

const entries = computed(() => [
  {
    index: 0,
    label: t('header.about'),
    icon: 'expand_more',
    link: '/über-uns',
    sectionKey: 'about',
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
    icon: 'expand_more',
    link: '/angebot',
    sectionKey: 'offer',
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
    icon: 'expand_more',
    link: '/kontakt',
    sectionKey: 'contact',
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

const handleHover = (sectionKey: string) => {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }

  activeSection.value = sectionKey
  megaMenuVisible.value = true
}

const handleLeave = () => {
  closeTimeout = setTimeout(() => {
    closeMegaMenu()
  }, 150) // Small delay to allow moving to mega menu
}

const closeMegaMenu = () => {
  megaMenuVisible.value = false
  activeSection.value = null
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
}

const keepMegaMenuOpen = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
}
</script>

<style lang="scss">
.main-navigation-wrapper {
  @apply relative;
}

.main-navigation {
  @apply flex;
  @apply gap-x-8;
  align-items: center;
}
</style>

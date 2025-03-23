<template>
  <nav class="main-navigation">
    <HeaderLink
      v-for="entry in entries"
      :key="entry.index"
      :label="entry.label"
      :icon="entry.icon"
      :link="entry.link"
      :subentries="entry.subentries"
    />
    <LanguageSwitcher />
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n()

const entries = computed(() => [
  {
    index: 0,
    label: t('header.about'),
    icon: 'expand_more',
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
    icon: 'expand_more',
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
    icon: 'expand_more',
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

<style lang="scss">
.main-navigation {
  @apply flex;
  @apply gap-x-8;
  align-items: center;
}
</style>

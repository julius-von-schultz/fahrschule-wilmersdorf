<template>
  <div class="main-navigation">
    <HeaderLink
      v-for="entry in entries"
      :key="entry.index"
      :label="entry.label"
      :icon="entry.icon"
      :link="entry.link"
    />
  </div>
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
        label: t('header.about'),
        icon: 'expand_more',
        link: '/über-uns',
      },
    ],
  },
  {
    index: 1,
    label: t('header.offer'),
    icon: 'expand_more',
    link: '/angebot',
  },
  { index: 2, label: t('header.price'), icon: 'expand_more', link: '/preise' },
  {
    index: 3,
    label: t('header.contact'),
    icon: 'expand_more',
    link: '/kontakt',
  },
  { index: 4, label: t('header.language'), icon: 'expand_more', link: '/' },
])
</script>

<style lang="scss">
.main-navigation {
  @apply flex;
  @apply gap-x-8;
}
</style>

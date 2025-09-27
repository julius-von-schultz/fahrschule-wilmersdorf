<template>
  <ContentWrapper class="link-container" width="wide">
    <div class="link-container__link-menu">
      <FooterLinkList
          v-for="menu in linkColumns"
          :key="menu.title"
          v-bind="menu"
          class="link-container__link-menu-element"
      />
    </div>
    <div class="link-container__end">
      <div class="link-container__end-item">Fahrschule Wilmersdorf</div>
      <div class="link-container__end-item">Alle Rechte vorbehalten.</div>
      <div class="link-container__end-item">Designed by Julius Schultz.</div>
      <div class="link-container__icon-container">
        <SocialMedia class="link-container__social-media" />
        <Icon
            icon="lgbtq-flag"
            type="svg"
            size="large"
        />
      </div>
    </div>
  </ContentWrapper>
</template>

<script setup>
const { t } = useI18n()

const linkColumns = [
  {
    title: t('footer.general'),
    entries: [
      { label: t('footer.about'), link: '/über-uns' },
      { label: t('footer.price'), link: '/preise' },
      { label: t('footer.contact'), link: '/kontakt' },
    ],
  },
  {
    title: t('footer.offer'),
    entries: [
      {
        label: t('footer.drivingLicenceCategories'),
        link: '/fuehrerscheinklassen',
      },
      { label: t('footer.theoryLessons'), link: '/theorieunterricht' },
      { label: t('footer.compulsoryJourneys'), link: '/pflichtfahrten' },
      { label: t('footer.refresherLessons'), link: '/auffrischungsstunden' },
    ],
  },
  {
    title: t('footer.company'),
    entries: [
      { label: t('footer.jobs'), link: '/jobs' },
      { label: t('footer.location'), link: '/standort' },
      { label: t('footer.team'), link: '/unser-team' },
    ],
  },
  {
    title: t('footer.legal'),
    entries: [
      { label: t('footer.imprint'), link: '/impressum' },
      { label: t('footer.imageCredit'), link: '/bildnachweise' },
    ],
  },
]
</script>

<style lang="scss">
.link-container {
  @apply flex flex-col;

  &__link-menu {
    @apply mb-8;
    @apply flex flex-col;

    @screen md {
      @apply flex-row justify-between;
    }
  }

  &__end {
    @apply flex flex-col;

    @screen md {
      @apply flex-row justify-between;
    }
  }

  &__link-menu-element {
    @apply min-w-[200px];
  }

  &__end-item {
    @apply flex flex-row;
    @apply gap-x-1;
    @apply min-w-[200px];
  }

  &__icon-container {
    @apply flex gap-x-4;
    align-items: flex-start;
    @apply min-w-[200px];
  }

  &__social-media {
    @apply flex flex-col;
    @apply gap-y-2;

    @screen md {
      @apply flex-row;
      align-items: flex-start;
      @apply gap-x-4 gap-y-0;
    }
  }
}
</style>

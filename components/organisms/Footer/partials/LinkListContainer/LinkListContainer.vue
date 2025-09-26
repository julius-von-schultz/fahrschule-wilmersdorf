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
      <div class="link-container__end-item">
        <NuxtLink
            to="https://www.tiktok.com/@fahrschulewilmersdorf"
            title="Instagram"
            class="link-container__instagram"
        >
          <Icon
              class="link-container__social-media-link"
              icon="icons8-instagram-50"
              type="svg"
              size="small"
          />
        </NuxtLink>
        <NuxtLink
            href="https://www.instagram.com/fahrschulewilmersdorf/"
            title="Tiktok"
            class="link-container__tiktok"
        >
          <Icon
              class="link-container__social-media-link"
              icon="icons8-tiktok-50"
              type="svg"
              size="small"
          />
        </NuxtLink>
      </div>
      <div class="link-container__end-item">
        <span>Designed by</span>
        <NuxtLink
            class="link-container__website-julius"
            to="https://juliusschultz.com/"
        >Julius Schultz</NuxtLink
        >
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

  &__link-menu-element {
    @apply col-span-full;

    @screen md {
      @apply col-span-1;
    }
  }

  &__end {
    @apply grid gap-4;
    @apply col-span-full;
    grid-template-columns: repeat(4, 1fr);
  }

  &__end-item {
    @apply col-span-full;
    @apply flex flex-row;
    @apply gap-x-1;

    @screen md {
      @apply col-span-1;
    }
  }

  &__website-julius {
    &:hover {
      @apply underline;
    }
  }
}
</style>

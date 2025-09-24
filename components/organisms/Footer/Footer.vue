<template>
  <footer class="footer">
    <section class="footer__first-container">
      <ContactDetails />
    </section>
    <section class="footer__second-container">
      <ContentWrapper>
        <div class="footer__link-menu">
          <FooterLinkList
            v-for="menu in linkColumns"
            :key="menu.title"
            v-bind="menu"
            class="footer__link-menu-element"
          />
        </div>
        <div class="footer__end">
          <div class="footer__end-item">Fahrschule Wilmersdorf</div>
          <div class="footer__end-item">Alle Rechte vorbehalten.</div>
          <div class="footer__end-item">
            <NuxtLink
              to="https://www.tiktok.com/@fahrschulewilmersdorf"
              title="Instagram"
              class="footer__instagram"
            >
              <Icon
                class="footer__social-media-link"
                icon="icons8-instagram-50"
                type="svg"
                size="small"
              />
            </NuxtLink>
            <NuxtLink
              href="https://www.instagram.com/fahrschulewilmersdorf/"
              title="Tiktok"
              class="footer__tiktok"
            >
              <Icon
                class="footer__social-media-link"
                icon="icons8-tiktok-50"
                type="svg"
                size="small"
              />
            </NuxtLink>
          </div>
          <div class="footer__end-item">
            <span>Designed by</span>
            <NuxtLink
              class="footer__website-julius"
              to="https://juliusschultz.com/"
              >Julius Schultz</NuxtLink
            >
          </div>
        </div>
      </ContentWrapper>
    </section>
  </footer>
</template>

<script setup lang="ts">
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

<style>
.footer {
  @apply bg-fw-dark-blue;
  @apply text-fw-white;
  @apply pb-6;

  &__first-container {
    @apply py-8;
    @apply bg-fw-blue;
  }

  &__second-container {
    @apply pt-8;
    @apply bg-fw-dark-blue;
  }

  &__link-menu {
    @apply grid gap-4;
    @apply col-span-full;
    grid-template-columns: repeat(4, 1fr);
    @apply mb-8;

    @screen lg {
      @apply col-span-8;
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

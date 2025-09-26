<template>
  <ContentWrapper class="contact-details" width="wide">
      <section>
        <h2 class="contact-details__headline">
          {{ t('footer.openingHours') }}
        </h2>
        <p>🕔 Dienstag : 14:00 – 18:00</p>
        <p>🕔 Mittwoch : 14:00 – 18:00</p>
        <p>🕔 Donnerstag: 14:00 – 18:00</p>
        <p>🕔 Freitag: 15:00 – 18:00</p>
      </section>
      <address class="contact-details__address">
        <h2 class="contact-details__headline">
          {{ t('footer.contactLabel') }}
        </h2>
        <p>{{ t('footer.mailLabel') }}</p>
        <NuxtLink to="mailto:fahrschule-wilmersdorf@berlin.de"
        >fahrschule-wilmersdorf@berlin.de</NuxtLink
        >
        <p>{{ t('footer.telephoneLabel') }}</p>
        <NuxtLink to="tel:03027991827"
        >030 27991827</NuxtLink
        >
      </address>
      <address class="contact-details__address">
        <h2 class="contact-details__headline">
          {{ t('footer.location') }}
        </h2>
        <NuxtLink
            to="https://www.google.com/maps/search/Fahrschule+Wilmersdorf,Uhlandstr. 130,10717 Berlin"
        >
          Fahrschule Wilmersdorf<br />
          Uhlandstr. 30<br />
          10717 Berlin<br />
        </NuxtLink>
      </address>
  </ContentWrapper>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
.contact-details {
  @apply flex flex-col;
  @apply gap-y-4;
  @apply text-sm;

  @screen md {
    @apply flex flex-row justify-between;
    @apply text-base;
  }

  &__headline {
    @apply text-lg leading-7;
    @apply font-semibold;
    @apply mb-1;

    @screen lg {
      @apply mb-2;
    }
  }

  &__address {
    font-style: normal;
  }

  a {
    &:hover {
      @apply underline;
    }
  }
}
</style>

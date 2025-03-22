<template>
  <ContentWrapper class="contact-details">
    <section>
      <h2 class="contact-details__headline">
        {{ t('footer.openingHours') }}
      </h2>
      <p>{{t('footer.firstRow') }}: 14:00 - 17:00</p>
      <p>{{t('footer.secondRow') }}: 10:00 - 13:00</p>
    </section>
    <address class="contact-details__address">
      <h2 class="contact-details__headline">
        {{ t('footer.contactLabel') }}
      </h2>
      <NuxtLink to="mailto:fahrschule-wilmersdorf@berlin.de">{{ t('footer.mailLabel') }} fahrschule-wilmersdorf@berlin.de</NuxtLink>
      <br />
      <NuxtLink to="tel:03027991827">{{ t('footer.telephoneLabel') }} 030 27991827</NuxtLink>
    </address>
    <address class="contact-details__address">
      <h2 class="contact-details__headline">
        {{ t('footer.location') }}
      </h2>
      <NuxtLink to="https://www.google.com/maps/search/Fahrschule+Wilmersdorf,Uhlandstr. 130,10717 Berlin">
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
    @apply grid gap-4;
    @apply col-span-full;
    grid-template-columns: repeat(3, 1fr);
    @apply text-base;
  }

  &__headline {
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

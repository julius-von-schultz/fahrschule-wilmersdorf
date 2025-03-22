<template>
  <ContentWrapper class="contact-box">
    <h1 class="contact-box__headline">
      {{ t('contactBox.headline') }}
    </h1>
    <p class="contact-box__description">
      {{ t('contactBox.subline') }}
    </p>
    <FwButton
      class="contact-box__button"
      :label="t('contactBox.buttonLabel')"
      to="/kontakt"
    />
  </ContentWrapper>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
.contact-box {
  align-self: center;
  @apply text-center;
  @apply text-fw-dark-blue-1;

  &__headline {
    @apply text-5xl;
    @apply font-medium;
    @apply mb-9;

    @screen md {
      @apply text-6xl;
    }
  }

  &__description {
    @apply mb-9;
  }

  &__button {
    justify-self: center;
  }
}
</style>

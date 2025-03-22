<template>
  <div class="home-stage">
    <div class="home-stage__inner-wrapper">
      <div class="home-stage__img-wrapper">
        <NuxtImg
            src="/images/beautiful-female-women-driver-sitting-her-vehicle-holding-car-keys-ready-drive.webp"
            class="home-stage__img"
            format="webp"
        />
      </div>
      <div class="home-stage__text-container">
        <h1 class="home-stage__headline">
          {{ t('homeStage.headline') }}
        </h1>
        <p class="home-stage__description">
          {{ t('homeStage.subline') }}
        </p>
        <button>Hallo</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss">
$home-stage-width: 98vw;
$home-stage-height-xs: 450px;
$home-stage-height-md: 480px;
$home-stage-height-xl: 620px;

.home-stage {
  @apply w-full;
  @apply text-fw-white;
  height: $home-stage-height-xs;
  position: relative; // Ermöglicht absolute Positionierung der Kinder

  @screen md {
    height: $home-stage-height-md;
  }

  @screen xl {
    height: $home-stage-height-xl;
  }

  &__inner-wrapper {
    @apply relative;
    @apply w-full h-full;
    @apply flex;
    @apply items-center justify-center;
    @apply text-center;
    z-index: 2;
  }

  &__img-wrapper {
    @apply absolute;
    @apply w-full h-full;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__img {
    @apply object-cover;
    @apply w-full h-full;
  }

  &__img-wrapper::after {
    content: "";
    @apply absolute;
    top: 0;
    left: 0;
    @apply w-full h-full;
    background-color: rgba(16, 19, 35, 0.6); // Overlay mit 60% Deckkraft
    pointer-events: none;
  }

  &__text-container {
    @apply relative;
    z-index: 3;
    @apply px-6;

    @screen md {
      @apply px-24;
    }

    @screen lg {
      @apply px-40;
    }
  }

  &__headline {
    @apply text-5xl;
    @apply font-medium;
    @apply mb-9;

    @screen md {
      @apply text-6xl;
    }
  }
}
</style>
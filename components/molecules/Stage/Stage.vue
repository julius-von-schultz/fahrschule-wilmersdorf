<template>
  <div class="stage">
    <div class="stage__inner-wrapper">
      <div class="stage__img-wrapper">
        <NuxtImg
          :src="imageSrc"
          class="stage__img"
          format="webp"
        />
      </div>
      <div class="stage__text-container">
        <h1 class="stage__headline">
          {{ headline }}
        </h1>
        <p class="stage__description">
          {{ subline }}
        </p>
        <FwButton
            v-if="buttonLabel && buttonLink"
          class="stage__button"
          :label="buttonLabel"
          :to="buttonLink"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: '',
  },
  headline: {
    type: String,
    default: '',
  },
  subline: {
    type: String,
    default: '',
  },
  buttonLabel: {
    type: String,
    default: undefined,
  },
  buttonLink: {
    type: String,
    default: undefined,
  }
})
</script>

<style lang="scss">
$stage-width: 98vw;
$stage-height-xs: 300px;
$stage-height-md: 330px;
$stage-height-xl: 470px;

.stage {
  @apply w-full;
  @apply text-fw-white;
  height: $stage-height-xs;
  @apply relative;

  @screen md {
    height: $stage-height-md;
  }

  @screen xl {
    height: $stage-height-xl;
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
    content: '';
    @apply absolute;
    top: 0;
    left: 0;
    @apply w-full h-full;
    background-color: rgba(101, 106, 112, 0.5); // Overlay mit 60% Deckkraft
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

  &__description {
    @apply mb-9;
  }

  &__button {
    justify-self: center;
  }
}
</style>

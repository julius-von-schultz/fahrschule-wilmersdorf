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
      <ContentWrapper width="wide" class="home-stage__content">
        <Richtext :text="content.text" />
        <div class="home-stage__buttons">
          <FwButton
            v-for="(button, index) in content.buttons"
            :key="index"
            class="home-stage__button"
            :label="button.label"
            :to="button.link"
            :variant="button.variant"
          />
        </div>
      </ContentWrapper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
})

const { content } = toRefs(props)
</script>

<style lang="scss">
$home-stage-width: 98vw;
$home-stage-height-xs: 450px;
$home-stage-height-md: 480px;
$home-stage-height-xl: 620px;

.home-stage {
  @apply w-full;
  @apply text-fw-white;
  min-height: $home-stage-height-xs;
  @apply relative;

  @screen md {
    min-height: $home-stage-height-md;
  }

  @screen xl {
    min-height: $home-stage-height-xl;
  }

  &__inner-wrapper {
    @apply relative;
    @apply w-full h-full;
    @apply flex;
    @apply flex items-center justify-center;
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
    background-color: rgba(16, 19, 35, 0.6); // Overlay mit 60% Deckkraft
    pointer-events: none;
  }

  &__content {
    @apply relative;
    z-index: 3;
    @apply p-6;

    @screen md {
      @apply px-28;
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

  &__buttons {
    @apply flex flex-col gap-y-6;
    @apply items-center;
    @apply mt-6;

    @screen md {
      @apply flex-row justify-center gap-x-6;
    }
  }
}
</style>

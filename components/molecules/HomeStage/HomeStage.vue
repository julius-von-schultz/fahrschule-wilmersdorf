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
      <div class="home-stage__content">
        <Richtext :text="content.text" />
        <div v-for="(button, index) in content.buttons" :key="index">
          <FwButton
            class="home-stage__button"
            :label="button.label"
            :to="button.link"
          />
        </div>
      </div>
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

watch(content, () => {
  console.log('*** content', content.value)
})
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
  @apply relative;

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

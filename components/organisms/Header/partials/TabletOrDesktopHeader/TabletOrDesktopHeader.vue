<template>
  <div class="header">
    <ContentWrapper class="header__content-wrapper">
      <NuxtLink to="/">
        <NuxtImg
            width="275"
            src="/images/Logo-Fahrschule-Wilmersdorf.webp"
            class="header__logo"
        />
      </NuxtLink>
      <MainNavigation />
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  @apply bg-fw-blue;
  @apply text-fw-white;
  @apply py-6;

  &__content-wrapper {
    @apply flex flex-col;
    align-items: center;
    @apply gap-y-5;

    @screen lg {
      @apply flex-row;
      @apply justify-between;
    }
  }
}
</style>

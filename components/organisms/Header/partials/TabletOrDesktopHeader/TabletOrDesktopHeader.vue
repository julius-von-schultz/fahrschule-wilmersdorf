<template>
  <div class="header">
    <ContentWrapper class="header__content-wrapper">
      <NuxtImg src="/images/Logo-Fahrschule-Wilmersdorf.webp" />
      <MainNavigation />
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  @apply bg-fw-blue;
  @apply text-fw-white;
  @apply py-6;

  &__content-wrapper {
    @apply flex flex-col;
    @apply justify-between;

    @screen lg {
      @apply flex-row;
    }
  }
}
</style>

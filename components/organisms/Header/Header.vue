<template>
  <header class="header">
    <MobileHeader class="header__mobile" />
    <TabletOrDesktopHeader class="header__tablet-or-desktop" />
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.header {
  @apply block;

  &__mobile {
    @screen md {
      @apply hidden;
    }
  }

  &__tablet-or-desktop {
    @apply hidden;

    @screen md {
      @apply block;
    }
  }
}
</style>
<template>
  <div class="header">
    <div class="header__content-wrapper">
      <NuxtLink to="/" class="header__logo-link">
        <NuxtImg
          width="200"
          src="/images/Logo-Fahrschule-Wilmersdorf.webp"
          class="header__logo"
        />
      </NuxtLink>
      <button 
        class="header__menu-button" 
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <Icon :icon="isMenuOpen ? 'close' : 'menu'"/>
      </button>
    </div>

    <MobileNav v-if="isMenuOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style lang="scss" scoped>
.header {
  @apply bg-fw-blue;
  @apply text-fw-white;
  @apply py-6;
  @apply relative;
  @apply z-10;

  &__content-wrapper {
    @apply flex flex-row;
    @apply justify-between;
    @apply items-center;
    @apply px-3;
  }

  &__logo {
    @apply max-h-12;
    @apply object-contain;
  }

  &__menu-button {
    @apply text-fw-white;
    @apply flex justify-center;
    @apply items-center;
    @apply p-2;
    transition: color 0.3s;
    
    &:hover {
      @apply bg-fw-dark-blue;
    }
    
    .material-icons {
      font-size: 1.5rem;
    }
  }
}
</style>

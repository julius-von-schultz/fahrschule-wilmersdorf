<template>
  <div>
    <Transition name="page">
      <div v-show="true" class="layout">
        <Header />
        <div class="layout__content">
          <slot />
        </div>
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout {
  @apply flex flex-col;
  min-height: 100vh;

  &__content {
    flex: 1;
  }
}
</style>

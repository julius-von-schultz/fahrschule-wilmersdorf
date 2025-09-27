<template>
  <footer class="footer">
    <section class="footer__first-container">
      <ContactDetails />
    </section>
    <section class="footer__second-container">
      <LinkListContainer />
    </section>
  </footer>
</template>

<style lang="scss">
.footer {
  @apply bg-fw-dark-blue;
  @apply text-fw-white;
  @apply pb-6;

  &__first-container {
    @apply flex;
    @apply py-8;
    @apply bg-fw-blue;

    @screen md {
      @apply block;
    }
  }

  &__second-container {
    @apply flex;
    @apply pt-8;
    @apply bg-fw-dark-blue;

    @screen md {
      @apply block;
    }
  }
}
</style>

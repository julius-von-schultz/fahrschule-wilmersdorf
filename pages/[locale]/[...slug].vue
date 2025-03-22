<template>
  <div class="index-page">
    <HomeStage />
    <StudentReview class="index-page__student-review" />
    <ContactBox class="index-page__contact-box" />
  </div>
</template>

<style lang="scss">
.index-page {
  @apply mb-10;

  &__student-review {
    @apply py-12;
    @apply bg-fw-grey-3;
  }

  &__contact-box {
    @apply pt-12;
  }
}
</style>

<template>
  <div class="student-review">
    <ContentWrapper>
      <div class="student-review__subline">
        {{ t('studentReview.subline') }}
      </div>
      <h2 class="student-review__headline">
        {{ t('studentReview.headline') }}
      </h2>
      <div class="student-review__description">
        {{ t('studentReview.description') }}
      </div>
      <StudentReviewGrid class="student-review__grid" />
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style>
.student-review {
  align-self: center;
  @apply text-center;
  @apply text-fw-dark-blue-1;
  @apply bg-fw-grey-4;

  &__subline {
    @apply text-fw-grey-14;
    @apply tracking-wide;
    @apply leading-5;
    text-transform: uppercase;
    @apply font-bold;
    @apply mb-9;
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
}
</style>

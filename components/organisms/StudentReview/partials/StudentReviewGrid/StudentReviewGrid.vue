<template>
  <div class="student-review-grid">
    <StudentReviewCard
      v-for="(review, index) in reviews"
      v-bind="review"
      :key="index"
    />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const reviews = [
  {
    headline: t('studentReview.review1.headline'),
    text: t('studentReview.review1.text'),
    author: t('studentReview.review1.author'),
    authorRole: t('studentReview.review1.authorRole'),
    authorImage: '/images/person_girl.webp',
  },
  {
    headline: t('studentReview.review2.headline'),
    text: t('studentReview.review2.text'),
    author: t('studentReview.review2.author'),
    authorRole: t('studentReview.review2.authorRole'),
    authorImage: '/images/person_girl.webp',
  },
  {
    headline: t('studentReview.review3.headline'),
    text: t('studentReview.review3.text'),
    author: t('studentReview.review3.author'),
    authorRole: t('studentReview.review3.authorRole'),
    authorImage: '/images/person_girl.webp',
  },
  {
    headline: t('studentReview.review4.headline'),
    text: t('studentReview.review4.text'),
    author: t('studentReview.review4.author'),
    authorRole: t('studentReview.review4.authorRole'),
    authorImage: '/images/person-boy.webp',
  },
  {
    headline: t('studentReview.review5.headline'),
    text: t('studentReview.review5.text'),
    author: t('studentReview.review5.author'),
    authorRole: t('studentReview.review5.authorRole'),
    authorImage: '/images/person-boy.webp',
  },
  {
    headline: t('studentReview.review6.headline'),
    text: t('studentReview.review6.text'),
    author: t('studentReview.review6.author'),
    authorRole: t('studentReview.review6.authorRole'),
    authorImage: '/images/person-boy.webp',
  },
]
</script>

<style>
.student-review-grid {
  @apply grid gap-4;
  @apply col-span-full;
  grid-template-columns: 1fr; /* Default to 1 column for mobile */

  @screen sm {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for small screens */
  }

  @screen lg {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 columns for medium screens and up */
  }
}
</style>

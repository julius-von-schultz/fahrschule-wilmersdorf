<template>
  <div class="student-review-card">
    <h3 class="student-review-card__headline">{{ headline }}</h3>
    <p class="student-review-card__text">{{ text }}</p>
    <div class="student-review-card__author">
      <NuxtImg
        width="50"
        class="student-review-card__image"
        :src="authorImage"
      />
      <div class="student-review-card__author-text">
        <p class="student-review-card__author-name">{{ author }}</p>
        <p class="student-review-card__author-role">{{ authorRole }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  headline: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  authorRole: {
    type: String,
    default: '',
  },
  authorImage: {
    type: String,
    default: '',
  },
})
</script>

<style>
.student-review-card {
  @apply bg-fw-white;
  text-align: left;
  @apply p-6;
  @apply rounded-md;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__headline {
    @apply text-2xl;
    @apply font-semibold;
    @apply pb-2;
  }

  &__text {
    font-style: italic;
    flex-grow: 1;
  }

  &__image {
    align-self: center;
    @apply rounded-sm;
  }

  &__author {
    @apply flex flex-row;
    @apply gap-x-4;
    margin-top: auto;
    padding-top: 24px;
  }

  &__author-name {
    @apply font-bold;
  }
}
</style>

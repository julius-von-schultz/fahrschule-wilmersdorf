<template>
  <div class="index-page">
    <HomeStage :content="homePageContent.homeStage" />
    <StudentReview class="index-page__student-review" />
    <ContactBox class="index-page__contact-box" />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useCmsContentStore } from '~/stores/cmsContent/cmsContent.js'
import { storeToRefs } from 'pinia'

const cmsContentStore = useCmsContentStore()
const { homePageContent } = storeToRefs(cmsContentStore)

onBeforeMount(async () => {
  await cmsContentStore.fetchHomePageContent()
})
</script>

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

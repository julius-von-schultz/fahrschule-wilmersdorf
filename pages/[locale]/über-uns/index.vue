<template>
  <ContentWrapper>
    <span> Diese Seite ist in Bearbeitung </span>
    <pre>{{ aboutPageContent }}</pre>
  </ContentWrapper>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useCmsContentStore } from '~/stores/cmsContent/cmsContent'

const cmsContentStore = useCmsContentStore()
const { aboutPageContent } = storeToRefs(cmsContentStore)

onBeforeMount(async () => {
  await cmsContentStore.fetchAboutPageContent()
})
</script>

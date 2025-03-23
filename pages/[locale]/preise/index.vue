<template>
  <div>
    <Stage
        image-src="/images/close-up-view-driving-instructor-holding-checklist-while-background-female-student-steering-driving.webp"
        :headline="t('prices.stage.headline')"
        :subline="t('prices.stage.text')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

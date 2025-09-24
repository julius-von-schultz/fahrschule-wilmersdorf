<template>
  <div>
    <Stage
      image-src="/images/people-office-working-late.jpg"
      :headline="t('theoryLessons.stage.headline')"
      :subline="t('theoryLessons.stage.text')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

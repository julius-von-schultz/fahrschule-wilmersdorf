<template>
  <div>
    <Stage
      image-src="/images/bfaad-group-friends-doing-road-trip.jpg"
      :headline="t('jobs.stage.headline')"
      :subline="t('jobs.stage.text')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

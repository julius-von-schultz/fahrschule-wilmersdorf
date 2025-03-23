<template>
  <div>
    <Stage
        image-src="/images/blurred-nightlights-city.jpg"
        :headline="t('compulsoryJourneys.stage.headline')"
        :subline="t('compulsoryJourneys.stage.text')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <Stage
        image-src="/images/side-view-woman-using-smartphone-car-winter-road-trip.jpg"
        :headline="t('refresherLesson.stage.headline')"
        :subline="t('refresherLesson.stage.text')"
    />
  </div>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

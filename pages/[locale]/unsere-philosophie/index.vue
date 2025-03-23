<template>
  <div>
    <Stage
        image-src="/images/women-in-camping-car.jpg"
        :headline="t('philosophy.stage.headline')"
        :subline="t('philosophy.stage.text')"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>


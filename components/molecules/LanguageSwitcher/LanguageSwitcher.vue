<template>
  <div ref="target" class="language-switcher">
    <button class="language-switcher__button" @click="isActive = !isActive">
      <span class="language-switcher__label">
        {{ $t('header.languageSwitcherLabel') }}
      </span>
      <Icon :size="size" icon="language" class="language-switcher__icon" />
    </button>
    <div v-if="isActive" class="language-switcher__content">
      <ul class="language-switcher__list">
        <NuxtLink
          v-for="lang in locales"
          :key="lang.code"
          :to="switchLocale(lang.code)"
        >
          <li class="language-switcher__option">{{ lang.name }}</li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { switchLocale } from '~/utils/switchLocale'
import { useLanguageSwitch } from '~/composables/useLanguageSwitch'
import { useI18n } from 'vue-i18n'

defineProps({
  size: {
    type: String,
    default: 'base',
    validator: (val) => ['base', 'large'].includes(val),
  },
})

const { locales } = useI18n()

const target = ref(null)
const isActive = ref(false)

onClickOutside(target, () => (isActive.value = false))

const { onLanguageSwitched } = useLanguageSwitch()
onLanguageSwitched('switcher', () => {
  isActive.value = false
})
</script>

<style lang="scss">
.language-switcher {
  z-index: 5;

  &__button {
    @apply flex flex-row;
    @apply gap-x-3;
    @apply cursor-pointer;
    @apply text-xl;
    @apply font-medium;

    @screen lg {
      @apply text-fw-white;
    }

    &:hover {
      @apply text-fw-blue-4;
    }
  }

  &__icon {
    align-content: center;
  }

  &__content {
    @apply absolute;
    width: 11rem;
    @apply pt-3;

    @screen lg {
      width: 12.75rem;
    }
  }

  &__list {
    @apply overflow-hidden;
    @apply h-full;
    @apply p-0;
    @apply rounded-sm;
    @apply bg-fw-blue;
    @apply relative;
    @apply border-2;
    @apply border-fw-grey-6;
    right: 4.5rem;

    @screen lg {
      @apply bottom-0;
      right: 4.5rem;
    }
  }

  &__option {
    @apply pl-2.5;
    @apply text-lg;
    @apply leading-5;
    @apply py-3 px-4;
    @apply text-fw-white;

    &:hover {
      @apply text-fw-white;
    }
  }
}
</style>

<template>
  <div
    ref="target"
    class="language-switcher"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <button class="language-switcher__button">
      <span class="language-switcher__label">
        {{ t('header.languageSwitcherLabel') }}
      </span>
      <Icon :size="size" icon="language" class="language-switcher__icon" />
    </button>
    <div v-if="isActive" class="language-switcher__content">
      <ul class="language-switcher__list">
        <li
          v-for="lang in locales"
          :key="lang.code"
          class="language-switcher__option"
          @click="handleLanguageSwitch(lang.code)"
        >
          <span class="language-switcher__name">{{ lang.name }}</span>
          <Icon
            class="language-switcher__flag"
            :icon="lang.code === 'de' ? 'DE' : 'EN'"
            type="svg"
            size="small"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const { locales, t } = useI18n()

const target = ref(null)
const isActive = ref(false)
let hoverTimeout = null

const handleMouseEnter = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
  isActive.value = true
}

const handleMouseLeave = () => {
  hoverTimeout = setTimeout(() => {
    isActive.value = false
  }, 150) // Small delay to prevent flickering when moving between elements
}

onClickOutside(target, () => (isActive.value = false))

const { onLanguageSwitched } = useLanguageSwitch()
onLanguageSwitched('switcher', () => {
  isActive.value = false
})

const handleLanguageSwitch = (langCode: string) => {
  // Perform hard reload to the new locale URL
  window.location.href = switchLocale(langCode)
}
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
    animation: slideDown 0.3s ease-out;

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
    @apply border-t-2 border-l-2 border-r-2 border-b;
    @apply border-fw-grey-6;
    right: 4.5rem;

    @screen lg {
      @apply bottom-0;
      right: 4.5rem;
    }
  }

  &__option {
    @apply flex items-center;
    @apply gap-y-3;
    @apply p-4;
    @apply text-lg leading-5;
    @apply text-fw-white;
    @apply cursor-pointer;
    @apply transition-colors duration-200;
    @apply border-b border-fw-blue-4;

    &:hover {
      @apply text-fw-grey-18;
      @apply bg-fw-blue-4;
    }
  }

  &__flag {
    @apply w-6 h-4;
    @apply flex-shrink-0;
    @apply object-cover;
    @apply rounded-sm;
  }

  &__name {
    @apply flex-1;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

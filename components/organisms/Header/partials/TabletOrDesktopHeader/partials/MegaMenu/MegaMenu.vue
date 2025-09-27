<template>
  <div
    v-if="isVisible"
    class="mega-menu"
    @mouseenter="keepOpen"
    @mouseleave="closeMenu"
  >
    <div class="mega-menu__content">
      <div class="mega-menu__grid">
        <div v-if="currentHeaderEntry" class="mega-menu__section">
          <h3 class="mega-menu__section-title">
            {{ currentHeaderEntry.label }}
          </h3>
          <div class="mega-menu__links">
            <NuxtLink
              v-for="subEntry in currentHeaderEntry.subEntries"
              :key="subEntry.index"
              :to="subEntry.link"
              class="mega-menu__link"
              @click="closeMenu"
            >
              <div class="mega-menu__link-content">
                <span class="mega-menu__link-title">{{ subEntry.label }}</span>
                <span class="mega-menu__link-description">{{
                  subEntry.description
                }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Additional Info Section (always visible when menu is open) -->
        <div class="mega-menu__info">
          <div class="mega-menu__highlight">
            <h4 class="mega-menu__highlight-title">{{ ctaBox.headline }}</h4>
            <p class="mega-menu__highlight-text">
              {{ ctaBox.description }}
            </p>
            <FwButton
              :to="ctaBox.button.link"
              :label="ctaBox.button.label"
              :variant="ctaBox.button.variant"
              :size="ctaBox.button.size"
            />
          </div>

          <!-- Social Media Section -->
          <div class="mega-menu__social">
            <h5 class="mega-menu__social-title">{{ t('header.socialMedia') }}</h5>
            <SocialMedia :show-lgbtq-flag="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import { useCmsContentStore } from '~/stores/cmsContent/cmsContent.js'
import { storeToRefs } from 'pinia'
import SocialMedia from '~/components/molecules/SocialMedia/SocialMedia.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  activeSection: {
    type: String,
    default: '',
  },
})

const { t } = useI18n()

const { activeSection } = toRefs(props)

const emit = defineEmits(['close', 'keepOpen'])

const cmsContentStore = useCmsContentStore()
const { header } = storeToRefs(cmsContentStore)

const currentHeaderEntry = computed(() => {
  return header.value?.mainNavigation?.navigationEntries?.find(
    (entry) => entry.sectionKey === activeSection.value,
  )
})

const ctaBox = computed(() => {
  return header.value?.mainNavigation?.ctaBox
})

const closeMenu = () => {
  emit('close')
}

const keepOpen = () => {
  emit('keepOpen')
}
</script>

<style lang="scss" scoped>
.mega-menu {
  @apply absolute left-0 right-0;
  @apply bg-fw-white;
  @apply shadow-2xl;
  @apply border-t-4 border-fw-blue;
  @apply z-50;
  animation: slideDown 0.3s ease-out;

  &__content {
    @apply p-10;
    @apply max-w-7xl mx-auto;
  }

  &__grid {
    @apply grid grid-cols-1;

    @screen lg {
      @apply grid-cols-8;
    }
  }

  &__section {
    @apply space-y-6;
    @apply col-start-1 col-end-5;
    @apply flex flex-col;
  }

  &__section-title {
    @apply text-2xl font-bold text-fw-blue;
    @apply border-b-2 border-fw-blue-4 pb-3 mb-6;
  }

  &__links {
    @apply space-y-2;
  }

  &__link {
    @apply block p-4;
    @apply transition-all duration-200;
    @apply border border-transparent;
    @apply no-underline;
    @apply mr-8;

    &:hover {
      @apply bg-fw-grey-1 border-fw-blue-4;
      transform: translateX(4px);
      @apply shadow-sm;

      .mega-menu__link-title {
        @apply text-fw-blue;
      }
    }
  }

  &__link-content {
    @apply space-y-1;
  }

  &__link-title {
    @apply block text-lg font-semibold text-fw-dark-blue;
    @apply transition-colors duration-200;
  }

  &__link-description {
    @apply block text-sm text-fw-grey-12;
    @apply leading-relaxed;
  }

  &__info {
    @screen lg {
      @apply flex flex-col;
      @apply col-start-5 col-end-9;
    }
  }

  &__highlight {
    @apply bg-gradient-to-br from-fw-blue to-fw-blue-2;
    @apply text-fw-white p-8;
    @apply space-y-4;
    @apply shadow-lg;
  }

  &__highlight-title {
    @apply text-xl font-bold;
  }

  &__highlight-text {
    @apply text-fw-grey-3;
    @apply leading-relaxed;
    @apply opacity-90;
  }

  &__social {
    @apply mt-8 pt-6;
    @apply border-t border-fw-blue-4;
  }

  &__social-title {
    @apply text-sm font-semibold text-fw-dark-blue;
    @apply mb-3;
  }

  &__social-links {
    @apply flex gap-3;
  }

  &__social-link {
    @apply flex items-center justify-center;
    @apply w-12 h-12;
    @apply bg-transparent;
    @apply rounded-lg;
    @apply transition-all duration-200;

    &--instagram,
    &--tiktok,
    &--linkedin {
      @apply bg-transparent;
    }

    &:hover {
      @apply scale-110;
      @apply bg-fw-grey-1;
      @apply bg-opacity-10;
    }

    .mega-menu__social-icon {
      @apply w-8 h-8;
      @apply transition-transform duration-200;
    }
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

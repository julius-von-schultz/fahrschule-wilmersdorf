<template>
  <div
    v-if="isVisible"
    class="mega-menu"
    @mouseenter="keepOpen"
    @mouseleave="closeMenu"
  >
    <div class="mega-menu__content">
      <div class="mega-menu__grid">
        <!-- About Section -->
        <div v-if="activeSection === 'about'" class="mega-menu__section">
          <h3 class="mega-menu__section-title">{{ $t('header.about') }}</h3>
          <div class="mega-menu__links">
            <NuxtLink
              v-for="item in aboutLinks"
              :key="item.index"
              :to="item.link"
              class="mega-menu__link"
              @click="closeMenu"
            >
              <div class="mega-menu__link-content">
                <span class="mega-menu__link-title">{{ item.label }}</span>
                <span class="mega-menu__link-description">{{
                  item.description
                }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Offer Section -->
        <div v-if="activeSection === 'offer'" class="mega-menu__section">
          <h3 class="mega-menu__section-title">{{ $t('header.offer') }}</h3>
          <div class="mega-menu__links">
            <NuxtLink
              v-for="item in offerLinks"
              :key="item.index"
              :to="item.link"
              class="mega-menu__link"
              @click="closeMenu"
            >
              <div class="mega-menu__link-content">
                <span class="mega-menu__link-title">{{ item.label }}</span>
                <span class="mega-menu__link-description">{{
                  item.description
                }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Contact Section -->
        <div v-if="activeSection === 'contact'" class="mega-menu__section">
          <h3 class="mega-menu__section-title">{{ $t('header.contact') }}</h3>
          <div class="mega-menu__links">
            <NuxtLink
              v-for="item in contactLinks"
              :key="item.index"
              :to="item.link"
              class="mega-menu__link"
              @click="closeMenu"
            >
              <div class="mega-menu__link-content">
                <span class="mega-menu__link-title">{{ item.label }}</span>
                <span class="mega-menu__link-description">{{
                  item.description
                }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Additional Info Section (always visible when menu is open) -->
        <div class="mega-menu__info">
          <div class="mega-menu__highlight">
            <h4 class="mega-menu__highlight-title">Fahrschule Wilmersdorf</h4>
            <p class="mega-menu__highlight-text">
              Ihre moderne Fahrschule in Berlin-Wilmersdorf. Professionelle
              Ausbildung mit erfahrenen Fahrlehrern.
            </p>
            <FwButton 
              to="/kontakt" 
              label="Jetzt anmelden" 
              variant="secondary" 
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  activeSection: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close', 'keepOpen'])

const aboutLinks = computed(() => [
  {
    index: 5,
    label: t('header.location'),
    link: '/standort',
    description: 'Unser Standort in Wilmersdorf',
  },
  {
    index: 6,
    label: t('header.team'),
    link: '/unser-team',
    description: 'Lernen Sie unser Team kennen',
  },
  {
    index: 7,
    label: t('header.philosophy'),
    link: '/unsere-philosophie',
    description: 'Unsere Ausbildungsphilosophie',
  },
])

const offerLinks = computed(() => [
  {
    index: 8,
    label: t('header.drivingLicenceCategories'),
    link: '/fuehrerscheinklassen',
    description: 'Alle verfügbaren Führerscheinklassen',
  },
  {
    index: 9,
    label: t('header.theoryLessons'),
    link: '/theorieunterricht',
    description: 'Theorieunterricht Termine',
  },
  {
    index: 10,
    label: t('header.compulsoryJourneys'),
    link: '/pflichtfahrten',
    description: 'Sonderfahrten und Pflichtfahrten',
  },
  {
    index: 11,
    label: t('header.refresherLessons'),
    link: '/auffrischungsstunden',
    description: 'Auffrischung für erfahrene Fahrer',
  },
])

const contactLinks = computed(() => [
  {
    index: 12,
    label: t('header.contactForm'),
    link: '/kontakt',
    description: 'Kontaktieren Sie uns direkt',
  },
  {
    index: 13,
    label: t('header.contactLocation'),
    link: '/standort',
    description: 'Besuchen Sie uns vor Ort',
  },
])

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

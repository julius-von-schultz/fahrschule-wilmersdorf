<template>
  <div class="main-navigation-wrapper">
    <nav class="main-navigation">
      <HeaderLink
        v-for="entry in navigationEntries"
        :key="entry.index"
        :label="entry.label"
        :icon="entry.icon"
        :link="entry.link"
        :has-submenu="entry.subEntries && entry.subEntries.length > 0"
        :section-key="entry.sectionKey"
        @hover="handleHover"
        @leave="handleLeave"
      />
      <LanguageSwitcher />
    </nav>
    <MegaMenu
      :is-visible="megaMenuVisible"
      :active-section="activeSection"
      @close="closeMegaMenu"
      @keep-open="keepMegaMenuOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { useCmsContentStore } from '~/stores/cmsContent/cmsContent'
import { storeToRefs } from 'pinia'

const cmsContentStore = useCmsContentStore()
const { header } = storeToRefs(cmsContentStore)

const navigationEntries = computed(
  () => header.value?.mainNavigation?.navigationEntries,
)

onBeforeMount(async () => {
  await cmsContentStore.fetchHeader()
})

const megaMenuVisible = ref(false)
const activeSection = ref<string | null>(null)
let closeTimeout: NodeJS.Timeout | null = null
let openTimeout: NodeJS.Timeout | null = null

const handleHover = (sectionKey: string) => {
  // Clear any existing timeouts
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }

  // If menu is already open, switch sections immediately
  if (megaMenuVisible.value) {
    activeSection.value = sectionKey
  } else {
    // Add small delay before opening to prevent flickering when quickly moving between items
    openTimeout = setTimeout(() => {
      activeSection.value = sectionKey
      megaMenuVisible.value = true
      openTimeout = null
    }, 100)
  }
}

const handleLeave = () => {
  // Clear any pending open timeout
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }

  // Set longer delay for closing to prevent flickering
  closeTimeout = setTimeout(() => {
    closeMegaMenu()
  }, 300) // Increased delay for better UX
}

const closeMegaMenu = () => {
  megaMenuVisible.value = false
  activeSection.value = null

  // Clear all timeouts
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
}

const keepMegaMenuOpen = () => {
  // Clear all timeouts when hovering over mega menu
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
}
</script>

<style lang="scss">
.main-navigation-wrapper {
  @apply relative;
}

.main-navigation {
  @apply flex;
  @apply gap-x-5;
  align-items: center;

  @screen lg {
    @apply gap-x-7;
  }
}
</style>

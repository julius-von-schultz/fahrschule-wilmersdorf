import { defineNuxtPlugin } from "#app";
import { useViewport } from "#imports";

export default defineNuxtPlugin(() => {
  const viewport = useViewport()
  const current = computed(() => viewport.breakpoint)
  const isMobile = computed(() => viewport.isLessThan('tablet'))
  const isTablet = computed(() => viewport.match('tablet'))
  const isMobileOrTablet = computed(() => isMobile.value || isTablet.value)
  const isDesktopOrTablet = computed(() => viewport.isGreaterOrEquals('tablet'))
  const isDesktop = computed(() => viewport.isGreaterOrEquals('desktop'))
  const isLargeDesktop = computed(() => viewport.match('desktopWide'))

  return {
    provide: {
      breakpoints: {
        current,
        isMobile,
        isTablet,
        isMobileOrTablet,
        isDesktopOrTablet,
        isDesktop,
        isLargeDesktop,
      },
    },
  }
})

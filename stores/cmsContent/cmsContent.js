import { defineStore } from 'pinia'
import { useStrapi, useI18n } from '#imports'

export const useCmsContentStore = defineStore('cmsContent', () => {
  const strapi = useStrapi()
  const { locale } = useI18n()

  const isLoadingHomePageContent = ref(false)
  const homePageContent = ref({})
  const isLoadingAboutPageContent = ref(false)
  const aboutPageContent = ref({})
  const isLoadingHeader = ref(false)
  const header = ref({})

  const fetchAboutPageContent = async () => {
    isLoadingAboutPageContent.value = true
    try {
      aboutPageContent.value = await strapi.find('about', {
        locale: locale.value,
        populate: '*',
      })
      return aboutPageContent.value
    } catch (e) {
      return e
    } finally {
      isLoadingAboutPageContent.value = false
    }
  }

  const fetchHomePageContent = async () => {
    isLoadingHomePageContent.value = true
    try {
      const data = await strapi.find('home-page', {
        locale: locale.value,
        populate: ['homeStage', 'homeStage.image', 'homeStage.buttons'],
      })
      homePageContent.value = data.data
      return homePageContent.value
    } catch (e) {
      return e
    } finally {
      isLoadingHomePageContent.value = false
    }
  }

  const fetchHeader = async () => {
    isLoadingHeader.value = true
    try {
      const data = await strapi.find('header', {
        locale: locale.value,
        populate: [
          'mainNavigation',
          'mainNavigation.navigationEntries',
          'mainNavigation.navigationEntries.subEntries',
          'mainNavigation.ctaBox',
          'mainNavigation.ctaBox.button',
        ],
      })
      console.log('*** data', data)
      header.value = data.data
      return header.value
    } catch (e) {
      return e
    } finally {
      isLoadingHeader.value = false
    }
  }

  return {
    aboutPageContent,
    fetchAboutPageContent,
    homePageContent,
    fetchHomePageContent,
    header,
    fetchHeader,
  }
})

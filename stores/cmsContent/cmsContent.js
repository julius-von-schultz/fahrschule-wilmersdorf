import { defineStore } from 'pinia'
import { useStrapi } from '#imports'

export const useCmsContentStore = defineStore('cmsContent', () => {
  const strapi = useStrapi()

  const isLoadingHomePageContent = ref(false)
  const homePageContent = ref({})
  const isLoadingAboutPageContent = ref(false)
  const aboutPageContent = ref({})

  // TODO: Get locale from i18n
  const locale = 'de'

  const fetchAboutPageContent = async () => {
    isLoadingAboutPageContent.value = true
    try {
      aboutPageContent.value = await strapi.find('about', {
        locale,
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
        locale,
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

  return {
    aboutPageContent,
    fetchAboutPageContent,
    homePageContent,
    fetchHomePageContent,
  }
})

import {defineStore} from "pinia";

export const useCmsContentStore = defineStore('cmsContent', () => {
    const strapi = useStrapi();

    const isLoadingAboutPageContent = ref(false);
    const aboutPageContent = ref(null);

    const fetchAboutPageContent = async () => {
        isLoadingAboutPageContent.value = true;
        try {
            aboutPageContent.value = await strapi.find('about', {
                locale: 'en',
                populate: '*',
            });
            return aboutPageContent.value;
        } catch (e) {
            return e;
        } finally {
            isLoadingAboutPageContent.value = false;
        }
    }

    return {
        aboutPageContent,
        fetchAboutPageContent
    }
})

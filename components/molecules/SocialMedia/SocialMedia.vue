<template>
  <div class="social-media">
    <NuxtLink
      v-for="socialLink in socialLinks"
      :key="socialLink.name"
      :to="socialLink.url"
      :title="socialLink.name"
      class="social-media__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        :icon="getIconName(socialLink.icon)"
        type="svg"
        :size="socialLink.size || 'small'"
        class="social-media__icon"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  colorful: {
    type: Boolean,
    default: true
  }
});

const getIconName = (icon) => {
  if (props.colorful) {
    return icon;
  }
  return `${icon}-simple`;
};

const socialLinks = computed(() => [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/fahrschulewilmersdorf/',
    icon: 'instagram-new',
    size: 'large'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@fahrschulewilmersdorf',
    icon: 'tiktok',
    size: 'large'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/fahrschule-wilmersdorf/',
    icon: 'linkedin',
    size: 'large'
  }
]);
</script>

<style lang="scss">
.social-media {
  @apply flex flex-row gap-x-4;

  .icon__svg {
    width: unset;
    height: unset;
  }

  &__link {
    @apply flex items-center justify-center;
    @apply transition-transform duration-300 hover:scale-110;
  }
}
</style>

<template>
  <div class="link-list">
    <h2 v-if="title" class="link-list__title">{{ title }}</h2>
    <ul class="link-list__list">
      <li
        v-for="(linkItem, index) in entries"
        :key="index"
        class="link-list__item"
        :class="{ 'link-list__item--with-hover': linkItem.link }"
      >
        <NuxtLink v-if="linkItem.link" :to="linkItem.link">{{
          linkItem.label
        }}</NuxtLink>
        <span v-else>{{ linkItem.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  /**
   * title
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * list of navigation entries
   */
  entries: {
    type: Array,
    require: true,
    default: /* istanbul ignore next */ () => [],
  },
})
</script>

<style lang="scss">
.link-list {
  &__title {
    @apply font-semibold;
    @apply mb-1;
    @apply text-base leading-6;

    @screen md {
      @apply text-lg leading-7;
    }

    @screen lg {
      @apply mb-2;
    }
  }

  &__item {
    @apply mb-1;
    @apply text-sm leading-5;

    @screen md {
      @apply mb-1.5;
    }

    @screen lg {
      @apply text-base;
      @apply mb-2;
    }

    &--with-hover {
      &:hover {
        @apply underline;
      }
    }
  }
}
</style>

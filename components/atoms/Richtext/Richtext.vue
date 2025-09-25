<template>
  <div class="richtext">
    <StrapiBlocks :content="text" :blocks="userBlocks" />
  </div>
</template>

<script setup lang="ts">
import {
  StrapiBlocks,
  type BlocksContent,
  type BlocksComponents,
} from 'vue-strapi-blocks-renderer'

defineProps({
  text: {
    type: Array as PropType<BlocksContent>,
    default: () => [],
  },
})

// @ts-expect-error: Ignore missing properties warning for userBlocks
const userBlocks: BlocksComponents = {
  heading: ({ level, children }: { level: number; children?: any }) => {
    const Tag = `h${level}`
    return h(Tag, { class: `heading-${level}` }, children)
  },
}
</script>

<style lang="scss">
.richtext {
  .heading-1 {
    @apply text-2xl mb-2;
  }

  .heading-2 {
    @apply text-xl mb-2;
  }

  .heading-3 {
    @apply text-lg mb-2;
  }

  em {
    // @apply font-bold not-italic;
  }

  a {
    @apply underline;
  }

  ul {
    // @apply list-disc my-2 pl-4 text-sm;
  }

  ol {
    // @apply list-decimal mb-2 pl-4 text-base;
  }

  code {
    // @apply bg-purple-5/40  px-2 py-1 rounded-md;
  }
}
</style>

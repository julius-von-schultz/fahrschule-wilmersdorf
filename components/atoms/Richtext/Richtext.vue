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
  /* Paragraphs and body text */
  p {
    @apply text-base;
    @apply leading-6;
    @apply mb-4;
    font-weight: 400;

    @screen md {
      @apply text-lg;
      @apply leading-7;
      @apply mb-5;
    }

    @screen lg {
      @apply leading-8;
      @apply mb-6;
    }
  }

  /* Lists */
  ul, ol {
    @apply mb-4;

    @screen md {
      @apply mb-5;
    }

    @screen lg {
      @apply mb-6;
    }

    li {
      @apply text-base;
      @apply leading-6;
      @apply mb-2;
      font-weight: 400;

      @screen md {
        @apply text-lg;
        @apply leading-7;
        @apply mb-3;
      }

      @screen lg {
        @apply leading-8;
      }
    }
  }

  /* Blockquotes */
  blockquote {
    @apply text-lg;
    @apply leading-7;
    @apply mb-6;
    @apply pl-6;
    @apply border-l-4;
    @apply border-fw-blue;
    @apply italic;
    font-weight: 400;

    @screen md {
      @apply text-xl;
      @apply leading-8;
      @apply mb-8;
      @apply pl-8;
    }

    @screen lg {
      @apply text-2xl;
      @apply leading-9;
      @apply mb-10;
    }
  }

  /* Links */
  a {
    @apply text-fw-white;
    @apply underline;
    @apply transition-colors;
    font-weight: 500;

    &:hover {
      @apply text-fw-blue-2;
    }

    &:focus {
      @apply outline-none;
      @apply ring-2;
      @apply ring-fw-blue;
      @apply ring-offset-2;
    }
  }

  /* Strong and emphasis */
  strong, b {
    font-weight: 700;
  }

  em, i {
    font-style: italic;
  }

  /* Code elements */
  code {
    @apply text-sm;
    @apply bg-fw-grey-4;
    @apply px-2;
    @apply py-1;
    @apply rounded-sm;
    @apply font-mono;
    font-weight: 500;

    @screen md {
      @apply text-base;
    }
  }
}
</style>

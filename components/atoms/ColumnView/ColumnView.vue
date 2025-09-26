<template>
  <div class="column-view" :class="stylingClassesForColumnView">
    <div
      class="column-view__column1"
      :class="[
        getStylingClassesForColumn(1),
        {
          'column-view__column1--with-horizontal-distance':
            hasMarginOnDesktop && variant === '66',
        },
      ]"
    >
      <slot name="description" />
      <component
        v-bind="item"
        :is="item.component"
        v-for="item in column1"
        :key="item._uid"
      />
    </div>
    <div
      v-if="variant !== '66'"
      class="column-view__column2"
      :class="getStylingClassesForColumn(2)"
    >
      <component
        v-bind="item"
        :is="item.component"
        v-for="item in column2"
        :key="item._uid"
      />
    </div>
    <div
      v-if="variant === '33'"
      class="column-view__column3"
      :class="getStylingClassesForColumn(3)"
    >
      <component
        v-bind="item"
        :is="item.component"
        v-for="item in column3"
        :key="item._uid"
      />
    </div>
  </div>
</template>

<script setup>
import { toRefs, computed } from 'vue'

const props = defineProps({
  /**
   * Array of content rendered in column 1
   */
  column1: {
    type: Array,
    default: () => [],
  },
  /**
   * Array of content rendered in column 2
   */
  column2: {
    type: Array,
    default: () => [],
  },
  /**
   * Array of content rendered in column 3
   */
  column3: {
    type: Array,
    default: () => [],
  },
  /**
   * Selectable variants of the columns spacing (33:33:33, 50:50, 66, 66:33, 33:66)
   */
  variant: {
    type: String,
    default: '66',
    validator: (val) => ['66', '50', '33', '66-33', '33-66'].includes(val),
  },
  useReverseOnColumns: {
    type: Boolean,
    default: false,
  },
  hasMarginOnDesktop: {
    type: Boolean,
    default: true,
  },
})

const { useReverseOnColumns, variant } = toRefs(props)

const stylingClassesForColumnView = computed(() => {
  return [
    useReverseOnColumns.value
      ? 'column-view__reverse'
      : 'column-view__not-reverse',
  ]
})

const getStylingClassesForColumn = (column) => {
  return `column-view__column${column}--${variant.value}`
}
</script>

<style lang="scss" scoped>
.column-view {
  @apply tw-flex tw-gap-4;

  &__not-reverse {
    @apply tw-flex-col;
  }

  &__reverse {
    @apply tw-flex-col-reverse;
  }

  @screen md {
    @apply tw-flex-row;
  }

  .column-view__column1,
  .column-view__column2,
  .column-view__column3 {
    @apply tw-flex tw-flex-col tw-gap-y-4;

    .button {
      @screen md {
        @apply tw-w-fit;
      }
    }

    .tw-default-vertical-distance {
      @apply tw-my-0;
    }
  }

  &__column1--66 {
    @apply tw-flex-auto;
  }

  &__column1--with-horizontal-distance {
    @screen lg {
      @apply tw-mx-[17%];
    }
  }

  &__column2--66,
  &__column3--66 {
    @apply tw-hidden;
  }

  &__column1--50,
  &__column2--50 {
    @apply tw-basis-2/4;
  }

  &__column1--33,
  &__column2--33,
  &__column3--33 {
    @apply tw-basis-4/12;
  }

  &__column1--66-33 {
    @apply tw-basis-8/12;
  }

  &__column2--66-33 {
    @apply tw-basis-4/12;
  }

  &__column1--33-66 {
    @apply tw-basis-4/12;
  }

  &__column2--33-66 {
    @apply tw-basis-8/12;
  }
}
</style>

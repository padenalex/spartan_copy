<script>
export default {
  name: 's-list-item',

  props: {
    to: {
      default: '',
      required: false,
      type: [String, Object]
    }
  }
}
</script>

<template>
  <div class="s-list-item">
    <router-link
      v-if="to"
      class="s-list-item__link"
      :to="to"
    >
      <slot />
    </router-link>
    <span
      v-else
      class="s-list-item__text"
    >
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.s-list-item {
  color: inherit;
  font-size: inherit;

  &__link {
    color: inherit;
    font-size: inherit;
  }

  &__text {
    color: inherit;
    font-size: inherit;
  }
}
</style>

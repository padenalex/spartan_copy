<script>
export default {
  name: 's-list',

  props: {
    gap: {
      default: '6px',
      required: false,
      type: String
    }
  }
}
</script>

<template>
  <div
    :style="`gap: ${gap}`"
    class="s-list"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.s-list {
  color: inherit;
  display: grid;
  gap: var(--space) 0;
}
</style>

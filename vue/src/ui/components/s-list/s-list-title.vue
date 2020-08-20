<script>
export default {
  name: 's-list-title'
}
</script>

<template>
  <div class="s-list__title">
    <h5 class="s-list__title-heading">
      <slot />
    </h5>
  </div>
</template>

<style lang="scss" scoped>

.s-list__title {
  color: inherit;
  font-size: var(--font-h6);

  &-heading {
    color: inherit;
    font-size: inherit;
  }
}
</style>

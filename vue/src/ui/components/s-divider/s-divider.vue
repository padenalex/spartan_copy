<script>
export default {
  name: 's-divider',

  props: {},

  computed: {
    classes () {
      return {
        's-divider': true
      }
    }
  }
}
</script>

<template>
  <div :class="classes" />
</template>

<style lang="scss" scoped>
.s-divider {
  height: 1px;
  width: 100%;
  background: var(--accent-1);
}
</style>

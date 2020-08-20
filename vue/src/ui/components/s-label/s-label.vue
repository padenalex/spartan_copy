<script>
export default {
  name: 's-label',

  props: {
    htmlFor: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    }
  },

  computed: {
    classes () {
      return {
        's-label': true
      }
    }
  }
}
</script>

<template>
  <label
    :class="classes"
    :for="htmlFor"
  >
    {{ value }}
  </label>
</template>

<style lang="scss" scoped>
.s-label {
  user-select: none;
  pointer-events: none;
}
</style>

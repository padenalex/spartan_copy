<script>
export default {
  name: 's-icon',

  props: {
    name: {
      default: '',
      required: false,
      type: String
    },
    size: {
      default: '30px',
      required: false,
      type: String
    },
    strokeWidth: {
      default: '32px',
      required: false,
      type: String
    }
  }
}
</script>

<template>
  <ion-icon
    :name="name"
    :style="`--ionicon-stroke-width: ${strokeWidth}; font-size: ${size};`"
    class="s-icon"
    @click="$emit('click', $event)"
  />
</template>

<style lang="scss" scoped>
.s-icon {
  user-select: none;
}
</style>

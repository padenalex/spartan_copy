<script>
export default {
  name: 's-messages',

  props: {
    messages: {
      default: () => [],
      required: true,
      type: Array
    }
  },

  computed: {
    classes () {
      return {
        's-messages': true
      }
    }
  }
}
</script>

<template>
  <div :class="classes">
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="s-messages__message"
    >
      {{ message }}
    </div>
  </div>
</template>

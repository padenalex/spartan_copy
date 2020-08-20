<script>
export default {
  name: 'overview-page',

  props: {
    isLoaded: {
      default: false,
      required: true,
      type: Boolean
    }
  },

  computed: {
    users () {
      return this.$store.getters['overview/users']
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Overview</h1>
    <ul v-if="isLoaded">
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{ user.name }}
        {{ user.status }}
        {{ user.email }}
        {{ user.location }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>

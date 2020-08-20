<script>
import { STextField } from '@/ui/components'

export default {
  name: 'overview-page',

  components: {
    STextField
  },

  computed: {
    users () {
      return this.$store.getters['dashboard/users']
    }
  },

  methods: {
    focusInput () {
      console.log(this.$refs)
      this.$refs.input.focus()
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Overview Page</h1>
    <s-text-field
      name="email"
      label="Email"
      prepend-icon="sunny-outline"
    />
    <ul>
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

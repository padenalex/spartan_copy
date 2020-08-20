<script>
import { SButton, SInput } from '@/ui/components'

export default {
  name: 'register-page',

  components: {
    SButton,
    SInput
  },

  data () {
    return {
      formData: {
        email: '',
        name: '',
        password: ''
      }
    }
  },

  methods: {
    handleSubmit (e) {
      this.$store.dispatch('auth/REGISTER', this.formData)
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Register Page</h1>
    <form @submit.prevent="handleSubmit">
      <s-input
        v-model="formData.name"
        label="Name"
        name="name"
      />
      <s-input
        v-model="formData.email"
        label="Email"
        name="email"
        type="email"
      />
      <s-input
        v-model="formData.password"
        label="Password"
        name="password"
        type="password"
      />
      <s-button primary>
        Register
      </s-button>
      <span>Already have an account? <router-link :to="{ name: 'auth.login' }">Login</router-link></span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { LoginLayout } from '@/app/_common/layouts/login-layout'
import { SInput, SButton } from '@/ui/components'
import { AppLogo } from '@/app/_common/components/app-logo'

export default {
  name: 'login-page',

  components: {
    AppLogo,
    LoginLayout,
    SButton,
    SInput
  },

  data () {
    return {
      checked: null,
      formData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    handleSubmit (e) {
      this.$store.dispatch('auth/LOGIN', this.formData)
    }
  }
}
</script>

<template>
  <login-layout>
    <div class="container">
      <app-logo />
      <h1>Sign in to Swish</h1>
      <form @submit.prevent="handleSubmit">
        <s-input
          v-model="formData.email"
          name="email"
          label="Email address"
          type="email"
        />
        <s-input
          v-model="formData.password"
          name="password"
          label="Password"
          type="password"
        />
        <s-button primary>
          Login
        </s-button>
      </form>
    </div>
  </login-layout>
</template>

<style lang="scss" scoped>
.container {
  max-width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 900px) {
    padding: 0;
  }
}

#app-logo {
  width: 75px;
  height: 75px;
}

h1 {
  font-size: var(--font-h4);
  margin: var(--space-4x) 0 var(--space-8x) 0;
  text-align: center;
}

form {
  width: 100%;

  button {
    margin-top: var(--space-4x);
  }
}
</style>

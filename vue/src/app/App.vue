<template>
  <s-app>
    <router-view />
  </s-app>
</template>

<script>
import { SApp } from '@/ui/components'
import { appLocalStorage } from '@/app/_common/services/storage'

export default {
  name: 'swish',

  components: { SApp },

  created () {
    this.bootstrap()
  },

  methods: {
    async bootstrap () {
      // Load/setup theme
      this.theme = appLocalStorage.getItem('theme')
      const html = document.documentElement
      html.setAttribute('theme', appLocalStorage.getItem('theme'))

      // Set user if token is present
      const isAuthenticated = this.$store.getters['auth/isAuthenticated']

      if (isAuthenticated) {
        await this.$store.dispatch('auth/SET_USER')
      }
    }
  }
}
</script>

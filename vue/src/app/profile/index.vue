<script>
import { SettingsLayout } from '@/app/_common/layouts'
import { store } from './store'

export default {
  name: 'profile-module',

  components: { SettingsLayout },

  computed: {
    isLoaded () {
      return true
    }
  },

  created () {
    this.$store.registerModule('profile', store)
  },

  mounted () {
    this.bootstrap()
  },

  beforeDestroy () {
    this.$store.unregisterModule('profile')
  },

  methods: {
    async bootstrap () {
      //
    }
  }
}
</script>

<template>
  <settings-layout>
    <router-view :is-loaded="isLoaded" />
  </settings-layout>
</template>

<style lang="scss" scoped>
</style>

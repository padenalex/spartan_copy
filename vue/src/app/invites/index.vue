<script>
import { SettingsLayout } from '@/app/_common/layouts'
import { store } from './store'

export default {
  name: 'invites-module',

  components: { SettingsLayout },

  computed: {
    isLoaded () {
      return true
    }
  },

  created () {
    this.$store.registerModule('invites', store)
  },

  mounted () {
    this.bootstrap()
  },

  beforeDestroy () {
    this.$store.unregisterModule('invites')
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

<script>
import { SettingsLayout } from '@/app/_common/layouts'
import { store } from './store'

export default {
  name: 'developers-module',

  components: { SettingsLayout },

  computed: {
    isLoaded () {
      return true
    }
  },

  created () {
    this.$store.registerModule('developers', store)
  },

  mounted () {
    this.bootstrap()
  },

  beforeDestroy () {
    this.$store.unregisterModule('developers')
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

<script>
import { SettingsLayout } from '@/app/_common/layouts'
import { store } from './store'

export default {
  name: 'managers-module',

  components: { SettingsLayout },

  computed: {
    isLoaded () {
      return true
    }
  },

  created () {
    this.$store.registerModule('managers', store)
  },

  mounted () {
    this.bootstrap()
  },

  beforeDestroy () {
    this.$store.unregisterModule('managers')
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

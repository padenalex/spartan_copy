<script>
import { DashboardLayout } from '@/app/_common/layouts'
import { store } from './store'

export default {
  name: 'services-module',

  components: { DashboardLayout },

  computed: {
    isLoaded () {
      return true
    }
  },

  created () {
    this.$store.registerModule('services', store)
  },

  mounted () {
    this.bootstrap()
  },

  beforeDestroy () {
    this.$store.unregisterModule('services')
  },

  methods: {
    async bootstrap () {
      //
    }
  }
}
</script>

<template>
  <dashboard-layout>
    <router-view :is-loaded="isLoaded" />
  </dashboard-layout>
</template>

<style lang="scss" scoped>
</style>

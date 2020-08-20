<script>
import { DashboardLayout } from '@/app/_common/layouts'
import { store } from './store'

export default {
  name: 'overview-module',

  components: { DashboardLayout },

  computed: {
    users () {
      return this.$store.getters['overview/users']
    },

    isLoaded () {
      return !!this.users
    }
  },

  created () {
    this.$store.registerModule('overview', store)
  },

  mounted () {
    this.bootstrap()
  },

  beforeDestroy () {
    this.$store.unregisterModule('overview')
  },

  methods: {
    async bootstrap () {
      await this.$store.dispatch('overview/fetchUsers')
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

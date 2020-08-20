<script>
import { StaticLayout } from '@/app/_common/layouts'

export default {
  name: 'static-module',

  components: { StaticLayout }
}
</script>

<template>
  <static-layout>
    <router-view />
  </static-layout>
</template>

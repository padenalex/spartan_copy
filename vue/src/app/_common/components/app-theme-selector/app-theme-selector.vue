<script>
import { SSelect } from '@/ui/components'
import { appLocalStorage } from '@/app/_common/services/storage'

export default {
  name: 'app-theme-selector',

  components: {
    SSelect
  },

  data () {
    return {
      theme: 'light',
      themes: [
        {
          value: 'light',
          content: 'Light'
        },
        {
          value: 'dark',
          content: 'Dark'
        },
        {
          value: 'system',
          content: 'System'
        }
      ]
    }
  },

  watch: {
    theme () {
      const html = document.documentElement

      if (this.theme === 'light') {
        appLocalStorage.setItem('theme', 'light')
        html.setAttribute('theme', 'light')
      } else if (this.theme === 'dark') {
        appLocalStorage.setItem('theme', 'dark')
        html.setAttribute('theme', 'dark')
      } else {
        appLocalStorage.setItem('theme', 'system')
        html.setAttribute('theme', 'system')
      }
    }
  },

  created () {
    this.theme = appLocalStorage.getItem('theme')
  }
}
</script>

<template>
  <s-select
    v-model="theme"
    :options="themes"
    :value="theme"
    append-icon="sunny-outline"
    name="theme-selector"
    secondary
  />
</template>

<script>
import { AppFooter, AppNav } from '@/app/_common/components'

export default {
  name: 'static-layout',

  components: {
    AppFooter,
    AppNav
  }
}
</script>

<template>
  <div class="app-layout">
    <app-nav />
    <main>
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  gap: var(--space-8x) 0;
  grid: minmax(1, 70px) repeat(2, 1fr) / repeat(12, 1fr);
  grid-template-areas:
  'nv nv nv nv nv nv nv nv nv nv nv nv'
  'mn mn mn mn mn mn mn mn mn mn mn mn'
  'ft ft ft ft ft ft ft ft ft ft ft ft';
}

.app-nav { grid-area: nv; }

.app-sidebar { grid-area: sb; }

main { grid-area: mn; }

.app-footer { grid-area: ft; }
</style>

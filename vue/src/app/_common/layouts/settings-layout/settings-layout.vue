<script>
import { AppFooter, AppNav, AppSidebar } from '@/app/_common/components'

export default {
  name: 'settings-layout',

  components: {
    AppFooter,
    AppNav,
    AppSidebar
  }
}
</script>

<template>
  <div class="app-layout">
    <app-nav />
    <div class="container content">
      <app-sidebar />
      <main>
        <slot />
      </main>
    </div>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  gap: var(--space-8x) 0;
  grid: minmax(1, 70px) repeat(2, auto) / repeat(12, 1fr);
  grid-template-areas:
  'nv nv nv nv nv nv nv nv nv nv nv nv'
  'cn cn cn cn cn cn cn cn cn cn cn cn'
  'ft ft ft ft ft ft ft ft ft ft ft ft';

  .content {
    display: grid;
    grid: auto / repeat(12, 1fr);
    grid-template-areas:
    'mn mn mn mn mn mn mn mn mn mn mn mn';

    @media(min-width: 900px) {
      grid-template-areas:
      'sb sb mn mn mn mn mn mn mn mn mn mn';
    }
  }
}

.app-nav { grid-area: nv; }

.container { grid-area: cn; }

.app-sidebar {
  display: none;
  grid-area: sb;

  @media(min-width: 900px) { display: grid; }
}

main { grid-area: mn; }

.app-footer { grid-area: ft; }
</style>

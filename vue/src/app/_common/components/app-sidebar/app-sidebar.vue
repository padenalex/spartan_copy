<script>
export default {
  name: 'app-sidebar',

  data () {
    return {
      links: [
        { name: 'Account', path: 'settings.account' },
        { name: 'Profile', path: 'settings.profile' },
        { name: 'Managers', path: 'settings.managers' },
        { name: 'Invites', path: 'settings.invites' },
        { name: 'Notifications', path: 'settings.notifications' },
        { name: 'Developers', path: 'settings.developers' },
        { name: 'Activity', path: 'settings.activity' }
      ]
    }
  }
}
</script>

<template>
  <aside class="app-sidebar">
    <ul class="app-sidebar__list">
      <li
        v-for="(link, index) in links"
        :key="`link-${index}`"
        class="app-sidebar__item"
      >
        <router-link
          :to="{ name: link.path, params: { ...link.params } }"
          class="app-sidebar__link"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.app-sidebar {
  &__list {
    display: grid;
    gap: var(--space-2x);
    grid: auto / 1fr;
  }

  &__item {

  }

  &__link {
    color: var(--accent-3);

    &:hover { color: var(--foreground); }
  }

  .router-link-exact-active {
    color: var(--foreground);
    padding-bottom: 2px;
    border-bottom: 1px solid var(--foreground);
  }
}
</style>

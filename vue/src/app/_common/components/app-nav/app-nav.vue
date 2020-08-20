<script>
import { AppLogo } from '../app-logo'
import { SButton, SDivider, SList, SListItem, SListTitle } from '@/ui/components'

export default {
  name: 'app-nav',

  components: {
    AppLogo,
    SButton,
    SDivider,
    SList,
    SListItem,
    SListTitle
  },

  data () {
    return {
      mobileMenuState: false,
      links: [
        { name: 'Overview', path: 'dashboard.overview' },
        { name: 'Services', path: 'dashboard.services' },
        { name: 'Statistics', path: 'dashboard.statistics' },
        { name: 'Settings', path: 'settings.account' }
      ]
    }
  },

  methods: {
    toggleMobileMenu () {
      const body = document.querySelector('body')

      if (this.mobileMenuState) {
        this.mobileMenuState = false
        body.style.overflow = 'unset'
      } else {
        this.mobileMenuState = true
        body.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<template>
  <nav class="app-nav">
    <div class="container">
      <ul class="app-nav__list">
        <li class="app-nav__item">
          <router-link
            to="/"
            class="app-nav__logo"
          >
            <app-logo />
          </router-link>
        </li>
        <router-link
          v-for="(link, index) in links"
          :key="`link-${index}`"
          v-slot="{ href, navigate, isActive, isExactActive }"
          :to="{ name: link.path, params: { ...link.params }}"
          class="app-nav__item"
        >
          <li
            :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
          >
            <a
              :href="href"
              class="app-nav__link"
              @click="navigate"
            >
              {{ link.name }}
            </a>
          </li>
        </router-link>
      </ul>
      <div class="app-nav__actions">
        <s-button
          to="/settings/invites"
          secondary
        >
          Invite
        </s-button>
        <s-button
          icon-size="30px"
          icon="notifications-outline"
        />
        <s-button
          icon-size="30px"
          icon="person-circle-outline"
        />
      </div>
      <s-button
        class="app-nav__mobile-menu-toggle"
        icon-size="30px"
        icon="ellipsis-horizontal"
        @click="toggleMobileMenu"
      />
    </div>
    <div
      v-show="mobileMenuState"
      class="app-nav__mobile-menu"
    >
      <div class="container">
        <s-list
          class="app-nav__mobile-list"
          gap="24px"
        >
          <s-list-title>Dashboard</s-list-title>
          <s-divider />
          <s-list-item
            :to="{ name: 'dashboard.overview' }"
            @click.native="toggleMobileMenu"
          >
            Overview
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'dashboard.services' }"
            @click.native="toggleMobileMenu"
          >
            Services
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'dashboard.statistics' }"
            @click.native="toggleMobileMenu"
          >
            Statistics
          </s-list-item>
          <s-divider />
          <s-list-item>Logout</s-list-item>
          <s-divider />
          <s-list-title>Settings</s-list-title>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.account' }"
            @click.native="toggleMobileMenu"
          >
            General
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.profile' }"
            @click.native="toggleMobileMenu"
          >
            Profile
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.managers' }"
            @click.native="toggleMobileMenu"
          >
            Managers
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.invites' }"
            @click.native="toggleMobileMenu"
          >
            Invites
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.notifications' }"
            @click.native="toggleMobileMenu"
          >
            Notifications
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.developers' }"
            @click.native="toggleMobileMenu"
          >
            Developers
          </s-list-item>
          <s-divider />
          <s-list-item
            :to="{ name: 'settings.activity' }"
            @click.native="toggleMobileMenu"
          >
            Activity
          </s-list-item>
          <s-divider />
        </s-list>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {
  align-items: center;
  outline: 1px solid var(--accent-1);
  outline-offset: -1px;
  display: flex;
  height: 70px;
  justify-content: space-between;
  width: 100%;

  & > .container {
    align-items: center;
    display: flex;
    justify-content: space-between;

    @media(min-width: 900px) {
      display: flex;
      height: 100%;
    }
  }

  &__list {
    align-items: center;
    display: flex;
    height: 100%;
    list-style: none;

    .router-link-exact-active {
      color: var(--foreground);
      padding-top: 2px;
      border-bottom: 2px solid var(--foreground);
      z-index: 3;
    }

    .app-nav__logo { border: none; }
  }

  &__item {
    align-items: center;
    color: var(--accent-3);
    display: flex;
    height: 100%;
    width: 100%;

    &:not(:first-child) { display: none; }

    &:not(:last-child) { margin-right: var(--space-4x); }

    @media(min-width: 900px) {
      &:not(:first-child) { display: flex; }
    }
  }

  &__link {
    color: inherit;

    &:hover {
      color: var(--foreground);
    }
  }

  &__actions {
    display: none;

    @media(min-width: 900px) { display: flex; }

    .s-button {
      &:not(:last-child) { margin-right: var(--space-4x); }
    }
  }

  &__mobile-menu-toggle {
    @media(min-width: 900px) { display: none; }
  }

  &__mobile-menu {
    width: 100%;
    max-width: 100vw;
    background: var(--background);
    color: var(--foreground);
    z-index: 10;
    position: fixed;
    top: calc(70px - 1px);
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
  }

  &__mobile-list {
    color: var(--foreground);

    .s-list__title {
      &-heading {
        font-size: 12px;
      }
    }

    .s-list__item {
      &__heading {
        font-size: 15px;
      }
    }
  }
}
</style>

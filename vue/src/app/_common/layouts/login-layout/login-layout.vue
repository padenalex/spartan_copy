<script>
import AppLogo from '@/app/_common/components/app-logo'

export default {
  name: 'login-layout',

  components: {
    AppLogo
  }
}
</script>

<template>
  <div class="app-layout">
    <nav>
      <div class="container">
        <app-logo />
      </div>
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <div class="container">
        <span>
          Don't have an account?
          <router-link :to="{ name: 'auth.register' }">Register</router-link>
        </span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

nav {
  height: 70px;

  .container {
    align-items: center;
    display: flex;
    height: 100%;
  }
}

footer {
  height: 70px;

  .container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;

    a {
      color: var(--success);

      &:hover {
        color: var(--success-dark);
      }
    }
  }
}
</style>

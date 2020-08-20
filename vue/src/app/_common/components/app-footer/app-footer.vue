<script>
import { AppLogo } from '../app-logo'
import { AppThemeSelector } from '../app-theme-selector'
import { SButton } from '@/ui/components'

export default {
  name: 'app-footer',

  components: {
    AppLogo,
    SButton,
    AppThemeSelector
  }
}
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__top">
      <div class="container">
        <div class="app-footer__section-top">
          <router-link
            :to="{ name: 'home' }"
            class="app-footer__logo"
          >
            <app-logo />
          </router-link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra neque, purus posuere.</p>
          <app-theme-selector />
        </div>
        <ul class="app-footer__section-top">
          <li>
            <h5>Company</h5>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'company.about' }">
              About
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'company.careers' }">
              Careers
            </router-link>
          </li>
        </ul>
        <ul class="app-footer__section-top">
          <li>
            <h5>Product</h5>
          </li>
          <li>
            <router-link :to="{ name: 'product.support' }">
              Support
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'product.use-cases' }">
              Use Cases
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'product.docs' }">
              Documentation
            </router-link>
          </li>
        </ul>
        <ul class="app-footer__section-top">
          <li>
            <h5>Legal</h5>
          </li>
          <li>
            <router-link :to="{ name: 'legal.privacy' }">
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'legal.tos' }">
              Terms of Service
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="app-footer__bottom">
      <div class="container">
        <span class="app-footer__section-bottom">
          © {{ new Date().getFullYear() }} Swish. All rights reserved.
        </span>
        <div class="app-footer__section-bottom">
          <s-button
            href="https://twitter.com/swishidentity"
            icon-size="20px"
            icon="logo-twitter"
            target="_blank"
          />
          <s-button
            href="https://www.linkedin.com/company/swish-id"
            icon-size="20px"
            icon="logo-linkedin"
            target="_blank"
          />
        </div>
        <a
          class="app-footer__section-bottom"
          href="mailto:swishidentity@gmail.com"
          target="_top"
        >
          info@swishid.com
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
a {
  color: var(--accent-3);

  &:hover { color: var(--foreground); }

  svg { fill: var(--foreground); }
}

.app-footer {
  border-top: 1px solid var(--accent-1);
  background: var(--accent);
  color: var(--accent-3);
  width: 100%;

  &__top {

    .container {
      display: grid;
      gap: var(--space-4x);
      grid: repeat(4, 1fr);
      padding-top: var(--space-8x);

      @media(min-width: 900px) {
        grid: 1fr / 2fr repeat(3, 1fr);
        padding: var(--space-8x);
      }
    }
  }

  &__section-top {
    /* border-bottom: 1px solid var(--accent-3); */

    &:nth-child(1) {
      grid-area: 4 / 1 / 4 / 1;

      p { display: none; }
      .s-select { display: none; }
    }

    @media(min-width: 900px) {
      &:nth-child(1) {
        grid-area: auto;

        p {
          display: block;
          max-width: 290px;
        }

        .s-select { display: flex; }
      }
    }

    li {
      margin-bottom: var(--space);

      &:last-child { margin-bottom: 0; }

      h5 {
        color: var(--foreground);
        font-size: var(--font-base);
      }
    }
  }

  &__bottom {
    padding: 0 0 var(--space-4x) 0;

    @media(min-width: 900px) {
      border-top: 1px solid var(--accent-1);
      padding: var(--space-4x) 0;
    }

    .container {
      display: flex;
      flex-flow: column;

      @media(min-width: 900px) {
        flex-flow: row;
        justify-content: space-between;
      }
    }
  }

  &__section-bottom {
    padding: var(--space) 0;

    &:nth-child(1) { order: 3; }

    &:nth-child(2) {
      display: flex;

      a:not(:last-child) { margin-right: var(--space); }
    }

    @media(min-width: 900px) {
      &:nth-child(1) { order: initial; }
    }
  }
}
</style>

# Swish

## Architecture
Feature first (module) architecture.

For simplicity sake <ins>**utils**</ins> = components, directives, filters, mixins, models, pages, routes, services, store, etc...

Three layers:
- UI Layer       - Must be reusable and hold no application/business related logic and content, with its own <ins>**utils**</ins>. Primarily consists of reusable components.
- Business Layer - Self contained modules with their own private <ins>**utils**</ins> related to the application/business logic and content.
- State Layer    - Vuex.

Guideline:
1. Each feature is split in a separate module, can be nested and as small or as large as required.
2. Each module has a single entry point and private <ins>**utils**</ins>. Nested modules can have shared `_common` <ins>**utils**</ins> scoped to only them.
3. Each module's entry point performs all actions its children require before rendering (e.g. fetching data and setting state).

## Directory structure
### Common
This directory contains the global scope application related <ins>**utils**</ins>:
```bash
.
└── src
    └── app
        ├── App.vue
        └── _common
            ├── README.md
            ├── components
            ├── layouts
            ├── registerServiceWorker.js
            ├── router
            ├── services
            └── store
```

### Modules
The root of each module can have its own private <ins>**utils**</ins>.
```bash
.
└── src
    └── app
        ├── App.vue
        ├── _common
        └── managers
            ├── index.vue
            ├── pages
            ├── routes
            ├── services
            └── store
```

### Nested modules
When there are nested modules they can have their own private `_common` <ins>**utils**</ins> folder shared only between themselves while each module has its own private <ins>**utils**</ins> in the root of their directory as well.
```bash
.
└── src
    └── app
        ├── App.vue
        ├── _common
        └── profile
            ├── index.vue
            ├── _common
            │   ├── components
            │   ├── index.js
            │   ├── routes
            │   └── store
            ├── profile-edit
            │   ├── index.vue
            │   ├── pages
            │   ├── routes
            │   ├── services
            │   └── store
            ├── profile-history
            │   ├── index.vue
            │   ├── pages
            │   ├── routes
            │   ├── services
            │   └── store
            └── profile-view
                ├── index.vue
                ├── pages
                ├── routes
                ├── services
                └── store
```

The `ui` directory holds reusable <ins>**utils**</ins> with no application/business logic or content.
```bash
.
└── src
    ├── app
    ├── main.js
    └── ui
        ├── assets
        ├── components
        └── directives
```

## Code style and conventions

Module entry point responsibilities:
1. (Un)register store modules inside their respective modules to leverage code-splitting and avoid unnecessary vuex module loading.
2. Have a `bootstrap()` method which performs all actions required by its children such as fetching data, settings state and pass an `isLoaded` prop down to them once loaded.
```js
// src/app/admin/index.vue
import store from './store'

computed: {
  users () {
    return this.$store.getters['admin/users']
  },

  isLoaded () {
    return !!this.users
  }
},

methods: {
  async bootstrap () {
    await this.$store.dispatch('admin/fetchUsers')
  }
},

mounted () {
  this.$store.registerModule('admin', store)
},

beforeDestroy () {
  this.$store.unregisterModule('admin')
}
```

Module routes responsibility:
1. Always load the entry point of the module first.
1. Utilize lazy-loaded routes.
2. Use a `webpackChunkName` comment to bundle related routes in the same chunk when necessary.
Does not require end user to download unnecessary code due to code-splitting.
4. Import the routes in the global router `/src/app/_common/router/routes.js`
```js
// Bad
import AccountPage from '../pages/account-page'

const AccountRoutes = [
  {
    path: '/settings/account',
    name: 'settings.account',
    component: AccountPage
  }
]

// Good
const AccountRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    children: [
      {
        path: 'account',
        name: 'settings.account',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/account-page')
      }
    ]
  }
]

export { AccountRoutes }
```

Use `<keep-alive>` for tabs and similar. Saves code in memory to avoid unnecessary re-renders of the UI.
```html
// Bad
<component :is="currentTab" :key="currentTab.name" />

// Good
<keep-alive>
  <component :is="currentTab" :key="currentTab.name" />
</keep-alive>
```

## Project setup
```
# Install dependencies
yarn install

# Compiles and hot-reloads for development
yarn serve

# Compiles and minifies for production
yarn build

# Run your unit tests
yarn test:unit

# Run your end-to-end tests
yarn test:e2e

# Lints and fixes files
yarn lint
```

### Vue documentation
[Docs](https://vuejs.org/v2/guide/) | [Mixins](https://vuejs.org/v2/guide/mixins.html) | [Directives](https://vuejs.org/v2/guide/custom-directive.htmll) | [Filters](https://vuejs.org/v2/guide/filters.html) | [Store](https://vuex.vuejs.org/guide/) | [Router](https://router.vuejs.org/)

[Configuration Reference](https://cli.vuejs.org/config/)

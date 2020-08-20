import { auth } from '@/app/_common/middleware'

const AccountRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: '/',
        name: 'settings.account',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/account-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { AccountRoutes }

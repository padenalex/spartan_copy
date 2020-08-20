import { auth } from '@/app/_common/middleware'

const ManagersRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'managers',
        name: 'settings.managers',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/managers-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { ManagersRoutes }

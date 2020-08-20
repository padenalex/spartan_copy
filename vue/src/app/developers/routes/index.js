import { auth } from '@/app/_common/middleware'

const DevelopersRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'developers',
        name: 'settings.developers',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/developers-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { DevelopersRoutes }

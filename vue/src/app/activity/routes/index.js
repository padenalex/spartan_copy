import { auth } from '@/app/_common/middleware'

const ActivityRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'activity',
        name: 'settings.activity',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/activity-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { ActivityRoutes }

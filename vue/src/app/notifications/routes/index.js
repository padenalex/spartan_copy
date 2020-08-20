import { auth } from '@/app/_common/middleware'

const NotificationsRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'notifications',
        name: 'settings.notifications',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/notifications-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { NotificationsRoutes }

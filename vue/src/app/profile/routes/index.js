import { auth } from '@/app/_common/middleware'

const ProfileRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'profile',
        name: 'settings.profile',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/profile-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { ProfileRoutes }

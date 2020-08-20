import { auth } from '@/app/_common/middleware'

const InvitesRoutes = [
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: 'routes-settings' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'invites',
        name: 'settings.invites',
        component: () => import(/* webpackChunkName: 'routes-settings' */ '../pages/invites-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { InvitesRoutes }

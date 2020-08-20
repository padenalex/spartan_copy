import { auth } from '@/app/_common/middleware'

const OverviewRoutes = [
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: 'routes-dashboard' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: '/',
        name: 'dashboard.overview',
        component: () => import(/* webpackChunkName: 'routes-dashboard' */ '../pages/overview-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { OverviewRoutes }

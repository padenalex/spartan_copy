import { auth } from '@/app/_common/middleware'

const StatisticsRoutes = [
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: 'routes-dashboard' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'statistics',
        name: 'dashboard.statistics',
        component: () => import(/* webpackChunkName: 'routes-dashboard' */ '../pages/statistics-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { StatisticsRoutes }

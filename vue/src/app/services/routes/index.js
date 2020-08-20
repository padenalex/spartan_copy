import { auth } from '@/app/_common/middleware'

const ServicesRoutes = [
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: 'routes-dashboard' */ '../index'),
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: 'services',
        name: 'dashboard.services',
        component: () => import(/* webpackChunkName: 'routes-dashboard' */ '../pages/services-page'),
        meta: {
          middleware: [auth]
        }
      }
    ]
  }
]

export { ServicesRoutes }

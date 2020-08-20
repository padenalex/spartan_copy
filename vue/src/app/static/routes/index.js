const StaticRoutes = [
  {
    path: '/',
    component: () => import('../index'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'routes-company' */ '../pages/home-page')
      },
      {
        path: 'about',
        name: 'company.about',
        component: () => import(/* webpackChunkName: 'routes-company' */ '../pages/about-page')
      },
      {
        path: 'careers',
        name: 'company.careers',
        component: () => import(/* webpackChunkName: 'routes-company' */ '../pages/careers-page')
      }
    ]
  },
  {
    path: '/product',
    component: () => import('../index'),
    children: [
      {
        path: 'support',
        name: 'product.support',
        component: () => import(/* webpackChunkName: 'routes-product' */ '../pages/support-page')
      },
      {
        path: 'use-cases',
        name: 'product.use-cases',
        component: () => import(/* webpackChunkName: 'routes-product' */ '../pages/use-cases-page')
      },
      {
        path: 'docs',
        name: 'product.docs',
        component: () => import(/* webpackChunkName: 'routes-product' */ '../pages/documentation-page')
      }
    ]
  },
  {
    path: '/legal',
    component: () => import('../index'),
    children: [
      {
        path: 'privacy',
        name: 'legal.privacy',
        component: () => import(/* webpackChunkName: 'routes-legal' */ '../pages/privacy-policy-page')
      },
      {
        path: 'tos',
        name: 'legal.tos',
        component: () => import(/* webpackChunkName: 'routes-legal' */ '../pages/terms-of-service-page')
      }
    ]
  }
]

export { StaticRoutes }

const NotFoundRoutes = [
  {
    path: '*',
    name: '404',
    component: () => import('../index')
  }
]

export { NotFoundRoutes }

const AuthRoutes = [
  {
    path: '/auth',
    component: () =>
      import(/* webpackChunkName: 'routes-auth' */ '../index'),
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () =>
          import(/* webpackChunkName: 'routes-auth' */ '../pages/login-page')
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () =>
          import(/* webpackChunkName: 'routes-auth' */ '../pages/register-page')
      }
    ]
  }
]

export { AuthRoutes }

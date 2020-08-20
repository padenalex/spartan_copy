import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from '../store'
import middlewarePipeline from './middleware-pipeline'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) return next()

  const middleware = to.meta.middleware

  const context = { to, from, next, store }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router

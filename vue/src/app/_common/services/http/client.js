import axios from 'axios'
import store from '@/app/_common/store'
import { appLocalStorage } from '../storage'
import { env } from '@/app/_common/env'
import { log } from '@/app/_common/services'

/**
 * Axios base configuration.
 * https://github.com/axios/axios
 */
const config = {
  'Content-Type': 'application/json',
  baseURL: env.API_BASE_URL,
  timeout: 1000
}

/**
 * Create an Axios instance.
 * More instances with separate configurations may be required in the future.
 */
const http = axios.create(config)

/**
 * Interceptors can be attached to each axios request and/or response.
 */
const authInterceptor = config => {
  if (config.baseURL === env.API_BASE_URL && !config.headers.Authorization) {
    const accessToken = appLocalStorage.getItem('access_token')

    if (accessToken) {
      config.headers.Authorization = accessToken
    }
  }

  return config
}

const logInterceptor = config => {
  config.meta = config.meta || {}
  config.meta.requestStartedAt = new Date().getTime()
  log.info(`.. ${ config.method.toUpperCase() } ${ config.baseURL }/${ config.url } | ${ new Date().getTime() }`)
  return config
}

/** Request interceptors. */
http.interceptors.request.use(authInterceptor)
http.interceptors.request.use(logInterceptor)

/** Response interceptors. */
http.interceptors.response.use(
  response => {
    log.info(`-> ${ response.config.method.toUpperCase() } ${ response.config.baseURL }/${ response.config.url } (${ response.status }) [${ new Date().getTime() - response.config.meta.requestStartedAt } ms] | ${ new Date().getTime() }`)
    return response
  },

  error => {
    if (error.response.status === 401) {
      store.dispatch('auth/LOGOUT')
    }

    log.info(`-> ${ error.config.method.toUpperCase() } ${ error.config.baseURL }/${ error.config.url } (${ error.status }) [${ new Date().getTime() - error.config.meta.requestStartedAt } ms] | ${ new Date().getTime() }`)
    return Promise.reject(error)
  }
)

export { http }

import router from '@/app/_common/router'
import { authService } from '../services'
import { mutationTypes } from './types'
import { appLocalStorage } from '@/app/_common/services'

const {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_USER
} = mutationTypes

const state = () => ({
  isAuthenticated: !!appLocalStorage.getItem('access_token'),
  status: null,
  user: null
})

const mutations = {
  [LOGIN_ERROR] (state) {
    state.status = 'error'
  },

  [LOGIN_REQUEST] (state) {
    state.status = 'loading'
  },

  [LOGIN_SUCCESS] (state, user) {
    state.isAuthenticated = true
    state.status = 'success'
    state.user = user
  },

  [LOGOUT] (state) {
    state.isAuthenticated = false
    state.user = null
  },

  [REGISTER_ERROR] (state) {
    state.status = 'error'
  },

  [REGISTER_REQUEST] (state) {
    state.status = 'loading'
  },

  [REGISTER_SUCCESS] (state) {
    state.status = 'success'
  },

  [SET_USER] (state, user) {
    state.user = user
  }
}

const actions = {
  async SET_USER ({ commit, dispatch }) {
    await authService.getUser()
      .then(user => commit(SET_USER, user.user))
      .catch(() => dispatch('LOGOUT'))
  },

  async LOGIN ({ commit, dispatch }, payload) {
    commit(LOGIN_REQUEST, payload.email)

    await authService.login(payload)
      .then(user => {
        commit(LOGIN_SUCCESS, user)
        router.push({ name: 'dashboard.overview' })
      })
      .catch(error => {
        commit(LOGIN_ERROR, error)
        dispatch('LOGOUT')
      })
  },

  LOGOUT ({ commit }) {
    authService.logout()
    commit(LOGOUT)
  },

  async REGISTER ({ commit }, payload) {
    commit(REGISTER_REQUEST, payload.email)

    authService.register(payload)
      .then(user => {
        commit(REGISTER_SUCCESS, user)
        router.push({ name: 'auth.login' })
      })
      .catch(error => commit(REGISTER_ERROR, error))
  }
}

const getters = {
  isAuthenticated: ({ isAuthenticated }) => isAuthenticated,
  status: ({ status }) => status,
  user: ({ user }) => user
}

export const auth = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

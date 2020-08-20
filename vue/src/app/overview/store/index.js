import { UsersService } from '../services/users'

const store = {
  namespaced: true,

  state: () => ({
    users: null
  }),

  mutations: {
    SET_USERS (state, { users }) {
      state.users = users
    }
  },

  actions: {
    fetchUsers ({ commit }) {
      commit('SET_USERS', { users: null })

      return new Promise(resolve => {
        setTimeout(() => {
          const users = UsersService.getUsers()
          resolve(users)
        }, 1000)
      }).then(users => {
        commit('SET_USERS', { users })
        return users
      })
    }
  },

  getters: {
    users: state => state.users
  }
}

export { store }

import { http, appLocalStorage } from '@/app/_common/services'

const login = (payload) => {
  return http.post('auth/login', payload)
    .then(response => {
      appLocalStorage.setItem('access_token', response.data.token.token)
      return response.data.user
    })
}

const logout = () => {
  appLocalStorage.removeItem('access_token')
}

const getUser = () => {
  return http.get('auth/me')
    .then(response => response.data)
}

const register = (data) => {
  return http.post('auth/register', data)
    .then(response => response.data)
}

export const authService = {
  getUser,
  login,
  logout,
  register
}

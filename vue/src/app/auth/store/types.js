import { reflect } from '@/app/_common/services'

const prefix = '[AUTH]'

const mutationTypes = reflect(
  [
    'LOGIN_ERROR',
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGOUT',
    'REGISTER_ERROR',
    'REGISTER_REQUEST',
    'REGISTER_SUCCESS',
    'SET_USER'
  ],
  prefix
)

export { mutationTypes }

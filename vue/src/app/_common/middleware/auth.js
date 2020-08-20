const auth = ({ next, store }) => {
  if (!store.getters['auth/isAuthenticated']) {
    return next({ name: 'auth.login' })
  }

  return next()
}

export default auth

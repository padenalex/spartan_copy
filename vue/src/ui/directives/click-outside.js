function directive (e, el, binding) {
  if (el.contains(e.target)) return

  if (('isTrusted' in e && !e.isTrusted) ||
      ('pointerType' in e && !e.pointerType)
  ) return

  binding.value(e)
}

const ClickOutside = {
  bind (el, binding) {
    const handleClick = (e) => directive(e, el, binding)

    const app = document.querySelector('[s-app]')
    app.addEventListener('click', handleClick, true)
    el._clickOutside = handleClick
  },

  unbind (el) {
    if (!el._clickOutside) return

    const app = document.querySelector('[s-app]')
    app.removeEventListener('click', el._clickOutside, true)
    delete el._clickOutside
  }
}

export { ClickOutside }

export default ClickOutside

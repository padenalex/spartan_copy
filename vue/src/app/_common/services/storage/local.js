/**
 * App Storage class
 @description Abstraction over local/session application storage.
 */
class Storage {
  constructor (storage) {
    this.storage = storage || window.localStorage

    if (!this.isSupported()) {
      throw new Error('Storage is not supported by browser!')
    }
  }

  setItem (key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem (key) {
    return JSON.parse(this.storage.getItem(key))
  }

  removeItem (key) {
    this.storage.removeItem(key)
  }

  clear () {
    this.storage.clear()
  }

  isSupported () {
    let supported = true

    if (!this.storage) supported = false

    return supported
  }
}

const appLocalStorage = new Storage()
const appSessionStorage = new Storage(window.sessionStorage)

export { Storage, appLocalStorage, appSessionStorage }

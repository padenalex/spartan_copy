import { env } from '@/app/_common/env'

class AppLogger {
  constructor () {
    this.initialize()
  }

  initialize () {
    if (env.NODE_ENV !== 'production') {
      this.log = console.log.bind(console)

      this.debug = console.debug.bind(console)

      this.info = console.info.bind(console)

      this.warn = console.warn.bind(console)

      this.error = console.error.bind(console)

      this.logToServer = this.error
    } else {
      this.log = this.debug = this.info = this.warn = this.error = () => {}

      this.logToServer = err => {
        console.error(err) //
        /** TODO: API integration for logging to server or any custom logic in case of Production environment */
      }
    }
  }
}

const log = new AppLogger()

export { log }

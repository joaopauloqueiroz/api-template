import Pino from 'pino'
import Env from './env.js'

const Logger = Pino({
  level: Env('LOG_LEVEL')
})

export default Logger
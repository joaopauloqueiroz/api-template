import Fastify from 'fastify'
import Env from './src/helpers/env.js';
import UserRoutes from './src/routes/user.js';
import Terminate from './src/utils/terminate.js';

const app = Fastify({ logger: { level: 'info' } })


app.register(UserRoutes, { prefix: '/api/user'})

const callbackServer = () => {
  const exitHandler = Terminate(app, {
    coredump: false,
    timeout: 500
  })

  //exit on errors 
  process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
  process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
  process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
  process.on('SIGINT', exitHandler(0, 'SIGINT'))
}

app.listen({ port: Env('PORT') }, callbackServer)
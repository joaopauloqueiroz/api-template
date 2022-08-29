import UserController from "../controllers/user/userController.js";

export default (app, options, done) => {
  app.get('/', UserController.index)
  app.post('/', UserController.create)
  app.put('/', UserController.update)
  app.delete('/:id', UserController.delete)
  app.get('/:id', UserController.findOne)
  done();
}
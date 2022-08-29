import { CreateUserUseCase, FindUserByIdUseCase } from '../../usecase/user/index.js'

class UserController {
  async index(req, res) {
    const response = await CreateUserUseCase.execute(req.body)
    return res.send(response)
  }
  
  async create(req, res) {
    const response = await CreateUserUseCase.execute(req.body)
    return res.send(response)
  }

  async update() {}

  async delete() {}

  async findOne(req, res) {
    const response = await FindUserByIdUseCase.execute(req.params.id)
    return res.send(response)
  }

}

export default new UserController()
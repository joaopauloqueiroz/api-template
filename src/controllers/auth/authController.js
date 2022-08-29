import { AuthUseCase } from "../../usecase/auth/index"

class AuthController {
  authenticate(req, res) {
    const response = await AuthUseCase.execute(req.body)
    return res.send(response)
  }
}

export default new AuthController()
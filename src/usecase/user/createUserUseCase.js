import ApiError from "../../helpers/apiError.js"
import ErrorCode from "../../const/errors.js"

class CreateUserUseCase {
  async execute(user) {
    try {
      return 'Sucesso criando usuario'
    } catch (error) {
      throw new ApiError(ErrorCode.ErrorCreateUser)
    }
  }
}

export default new CreateUserUseCase()
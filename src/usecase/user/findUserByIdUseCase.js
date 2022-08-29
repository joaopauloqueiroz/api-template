import ApiError from "../../helpers/apiError.js"
import ErrorCode from "../../const/errors.js"

class FindUserByIdUseCase {
  async execute(id) {
    try {
      return 'Sucesso buscando usuario ' + id
    } catch (error) {
      throw new ApiError(ErrorCode.ErrorLookingUser)
    }
  }
}

export default new FindUserByIdUseCase()
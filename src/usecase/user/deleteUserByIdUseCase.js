import ErrorCode from "../../const/errors.js"
import ApiError from "../../helpers/apiError.js"

class DeleteUserByIdUseCase {
  async execute(id) {
    try {
      return 'deletado com sucesso ' + id
    } catch (error) {
      throw new ApiError(ErrorCode.ErrorDeeletingUser)
    }
  }
}

export default new DeleteUserByIdUseCase()
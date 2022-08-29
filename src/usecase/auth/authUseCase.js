import ErrorCode from "../../const/errors.js"
import ApiError from "../../helpers/apiError.js"

class AuthUseCase {
  async execute(data) {
    try {
      return 'Sucesso autehnticando' + data
    } catch (error) {
      throw new ApiError(ErrorCode.ErrorAuthenticatingUser)
    }
  }
}
export default new AuthUseCase()
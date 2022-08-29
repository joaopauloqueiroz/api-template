const ErrorCode = {
  ErrorCreateUser: {
    status: 400,
    code: 5000,
    message: 'Error creating user'
  },
  ErrorLookingUser: {
    code: 5002,
    status: 400,
    message: 'Error finding user'
  },
  ErrorDeeletingUser: {
    code: 5003,
    status: 400,
    message: 'Error deleting user'
  },
  ErrorUpdatingUser: {
    code: 5004,
    status: 400,
    message: 'Error updating user'
  },
  ErrorFindingUser: {
    code: 5005,
    status: 404,
    message: 'User not fount'
  },
  ErrorAuthenticatingUser: {
    code: 5006,
    status: 401,
    message: 'Forbiden'
  },
}

export default  ErrorCode
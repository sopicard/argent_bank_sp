import * as types from '../types'

export const loginRequest = () => ({ type: types.LOGIN_REQUEST })
export const loginSuccess = (token) => ({ type: types.LOGIN_SUCCESS, payload: { token } })
export const loginFailure = (error) => ({ type: types.LOGIN_FAILURE, payload: { error } })

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(loginRequest())

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      })

      if (response.ok) {
        const data = await response.json()

        console.log('Response data:', data)
        console.log('Token retrieved:', data.body.token)

        dispatch(loginSuccess(data.body.token))
      } else {
        const errorData = await response.json()
        dispatch(loginFailure(errorData.error))
      }
    } catch (error) {
      dispatch(loginFailure('Une erreur s\'est produite lors de la connexion.'))
    }
  }
}

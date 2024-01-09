// authActions.js

import * as types from '../types'

export const loginRequest = () => ({ type: types.LOGIN_REQUEST })
export const updateUsername = (username) => ({ type: types.UPDATE_USERNAME, payload: { username } })
export const updatePassword = (password) => ({ type: types.UPDATE_PASSWORD, payload: { password } })
export const loginSuccess = (token) => ({ type: types.LOGIN_SUCCESS, payload: { token } })
export const loginFailure = (error) => ({ type: types.LOGIN_FAILURE, payload: { error } })
export const updateUserProfile = (userData) => ({ type: types.UPDATE_USER_PROFILE, payload: { userData } })
export const updateToken = (token) => ({ type: types.UPDATE_TOKEN, payload: { token } })
export const updateRememberMe = (rememberMe) => ({ type: types.UPDATE_REMEMBER_ME, payload: {rememberMe} })
export const loginUser = (username, password, rememberMe) => async (dispatch) => {
  try {
    dispatch(loginRequest())

    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: username, password }),
    })

    if (response.ok) {
      const data = await response.json()
      const { token } = data.body

      console.log('Token retrieved:', token)

      console.log('Checking rememberMe:', rememberMe)
      // Stocke le token dans le localStorage si "Remember me" est coché
      if (rememberMe) {
        console.log('Adding token to localStorage:', token)
        localStorage.setItem('token', token)
        dispatch(updateToken(token))
      }

      // Dispatch l'action pour mettre à jour le state Redux
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { token },
      })

    } else {
      const errorData = await response.json()
      console.error('Échec de la connexion. Message du serveur :', errorData.error)
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: { error: 'Échec de la connexion. Veuillez vérifier vos informations d\'identification.' },
      })
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la connexion.', error)
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: { error: 'Une erreur s\'est produite lors de la connexion.' },
    })
  }
}

export const logoutUser = () => (dispatch) => {
  // Supprime le token du localStorage lors de la déconnexion
  localStorage.removeItem('token')

  // Dispatch l'action de déconnexion pour mettre à jour le state Redux
  dispatch({
    type: types.LOGOUT,
  })
}

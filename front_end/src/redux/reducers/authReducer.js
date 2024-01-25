import * as types from '../types'

// Etat initial
const initialState = {  
  token: null,
  error: null,
  userData: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, error: null }
    case types.LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, error: null }
    case types.LOGIN_FAILURE:
      return { ...state, error: action.payload.error }
    case types.UPDATE_USER_PROFILE:
      return { ...state, userData: action.payload.userData }
    case types.UPDATE_TOKEN:
      return { ...state, token: action.payload.token }  
    default:
      return state   
  }
}

export default authReducer

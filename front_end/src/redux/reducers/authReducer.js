import * as types from '../types'

// Etat initial
const initialState = {
  username: '',  
  password: '',
  token: null,
  error: null,
  loading: false,
  userData: null,
  rememberMe: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USERNAME:
      return { ...state, username: action.payload.username }
    case types.UPDATE_PASSWORD:
      return { ...state, password: action.payload.password }
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null }
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token, error: null }
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    case types.UPDATE_USER_PROFILE:
      return { ...state, userData: action.payload.userData }
    case types.UPDATE_REMEMBER_ME:
      return { ...state, rememberMe: action.payload.rememberMe }  
    case types.UPDATE_TOKEN:
      return { ...state, token: action.payload.token }  
    default:
      return state   
  }
}

export default authReducer

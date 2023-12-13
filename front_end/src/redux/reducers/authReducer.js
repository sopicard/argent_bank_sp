import * as types from '../types'

const initialState = {
  username: '',  
  password: '',
  token: null,
  error: null,
  loading: false,
  userData: null
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
    default:
      return state
  }
};

export default authReducer

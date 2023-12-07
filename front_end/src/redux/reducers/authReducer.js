import * as types from '../types'

const initialState = {
  token: null,
  error: null,
  loading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null }
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token, error: null }
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
};

export default authReducer

import {login} from '../api'

// action types
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE'
export const FB_LOG_IN = 'FB_LOG_IN'
export const GOOGLE_LOG_IN = 'GOOGLE_LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const NAME_SIGNUP = 'NAME_SIGNUP'
export const EMAIL_SIGNUP = 'EMAIL_SIGNUP'
export const SIGNUP_CREATE_ACCOUNT = 'SIGNUP_CREATE_ACCOUNT'

// action creators
export const storeNames = (names) => ({
  type: NAME_SIGNUP,
  payload: names,
})
export const storeEmail = (emailPassword) => ({
  type: EMAIL_SIGNUP,
  payload: emailPassword,
})

export const logOutUser = () => ({
  type: LOG_OUT,
  payload: null,
})
export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
  payload: null,
})

// async action creators
export const fbLoginAction = (token) => async dispatch => {
  dispatch({type: FB_LOG_IN, payload: token})
}
export const googleLoginAction = (token) => async dispatch => {
  dispatch({type: GOOGLE_LOG_IN, payload: token})
}
export const logInUser = (username, password) => async dispatch => {
  // dispatch({type: LOG_IN_SENT})
  try {
    const token = await login(username, password)
    dispatch({type: LOG_IN_FULFILLED, payload: token})
  } catch (err) {
    dispatch({type: LOG_IN_REJECTED, payload: err.message})
  }
}

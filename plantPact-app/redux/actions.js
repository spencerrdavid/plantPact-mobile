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
export const UPDATE_BEANS = 'UPDATE_BEANS'
export const UPDATE_CHOCOLATE = 'UPDATE_CHOCOLATE'
export const UPDATE_FLOUR = 'UPDATE_FLOUR'
export const UPDATE_FRUIT = 'UPDATE_FRUIT'
export const UPDATE_GRAINS = 'UPDATE_GRAINS'
export const UPDATE_NUTS = 'UPDATE_NUTS'
export const UPDATE_PASTA = 'UPDATE_PASTA'

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

export const updateBeans = (update) => ({
  type: UPDATE_BEANS,
  payload: update,
})
export const updateChocolate = (update) => ({
  type: UPDATE_CHOCOLATE,
  payload: update,
})
export const updateFlour = (update) => ({
  type: UPDATE_FLOUR,
  payload: update,
})
export const updateFruit = (update) => ({
  type: UPDATE_FRUIT,
  payload: update,
})
export const updateGrains = (update) => ({
  type: UPDATE_GRAINS,
  payload: update,
})
export const updateNuts = (update) => ({
  type: UPDATE_NUTS,
  payload: update,
})
export const updatePasta = (update) => ({
  type: UPDATE_PASTA,
  payload: update,
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

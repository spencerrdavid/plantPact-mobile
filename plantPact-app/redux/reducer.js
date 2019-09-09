import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import {
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  CLEAR_ERROR_MESSAGE,
  FB_LOG_IN,
  GOOGLE_LOG_IN,
  LOG_OUT,
  NAME_SIGNUP,
  EMAIL_SIGNUP,
  SIGNUP_CREATE_ACCOUNT,
  UPDATE_BEANS,
  UPDATE_CHOCOLATE,
  UPDATE_FLOUR,
  UPDATE_FRUIT,
  UPDATE_GRAINS,
  UPDATE_NUTS,
  UPDATE_PASTA,
} from './actions'

const initialState = {
  user: {
    loginErr: null,
    token: null,
  },
  signUp: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  profile: {
    picture: null,
  },
  data: {
    beans: [],
    chocolate: [],
    flour: [],
    fruit: [],
    grains: [],
    nuts: [],
    pasta: [],
  },
}

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOG_IN_FULFILLED:
      return { ...state, loginErr: null, token: action.payload }
    case LOG_IN_REJECTED:
      return { ...state, loginErr: action.payload }
    case CLEAR_ERROR_MESSAGE:
      return { ...state, loginErr: action.payload }
    case FB_LOG_IN:
      return { ...state, loginErr: null, token: action.payload }
    case GOOGLE_LOG_IN:
      return { ...state, loginErr: null, token: action.payload }
    case LOG_OUT:
      console.log('logged out!')
      return { ...state, loginErr: null, token: null }
    default:
      return state
  }
}

const signUpReducer = (state = initialState.signUp, action) => {
  switch (action.type) {
    case NAME_SIGNUP:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName }
    case EMAIL_SIGNUP:
      return { ...state, email: action.payload.email, password: action.payload.password }
    default:
      return state
  }
}

const profileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const productsReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case UPDATE_BEANS:
      return { ...state, beans: action.payload }
    case UPDATE_CHOCOLATE:
      return { ...state, chocolate: action.payload }
    case UPDATE_FLOUR:
      return { ...state, flour: action.payload }
    case UPDATE_FRUIT:
      return { ...state, fruit: action.payload }
    case UPDATE_GRAINS:
      return { ...state, grains: action.payload }
    case UPDATE_NUTS:
      return { ...state, nuts: action.payload }
    case UPDATE_PASTA:
      return { ...state, pasta: action.payload }
    default:
      return state
  }
}

const appReducer = combineReducers({
  user: userReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  data: productsReducer,
})

const reducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    storage.removeItem('persist:root')
    state = undefined
  }
  return appReducer(state, action)
}

export default reducer

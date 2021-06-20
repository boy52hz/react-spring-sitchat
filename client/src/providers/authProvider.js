import React, { createContext, useContext, useMemo, useReducer } from 'react'
import AuthService from '../services/authService'

const AuthState = createContext()
const AuthDispatch = createContext()

const actions = {
  LOGIN_SUCCESS: 'LOGGIN_SUCCESS',
  LOGIN_FALURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  LOAD_USER_SUCCESS: 'LOAD_USER_SUCCESS',
  LOAD_USER_FAILURE: 'LOAD_USER_FAILURE',
  CLEAR_ERROR: 'CLEAR_ERROR',
  REGISTER_FAILURE: 'REGISTER_FAILURE'
}

const initialState = {
  isLoggedIn: AuthService.isLoggedIn(),
  token: AuthService.getToken(),
  userData: undefined,
  error: ''
}

const authReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    case actions.LOAD_USER_SUCCESS: {
      const { userData } = action.payload
      return {
        ...state,
        userData
      }
    }
    case actions.LOGIN_FALURE: {
      const { error } = action.payload
      return {
        ...state,
        isLoggedIn: false,
        error
      }
    }
    case actions.LOGOUT: {
      return {
        name: '',
        password: '',
        error: '',
        isLoggedIn: false
      }
    }
    case actions.REGISTER_FAILURE: {
      const { error } = action.payload
      return {
        ...state,
        error
      }
    }
    case actions.LOAD_USER_FAILURE: {
      const { error } = action.payload
      return {
        ...state,
        error
      }
    }
    case actions.CLEAR_ERROR: {
      return {
        ...state,
        error: ''
      }
    }
    default: {
      return state
    }
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const helpers = useMemo(() => ({
    register: (username, email, password, studentId, firstName, lastName) => {
      AuthService.register(username, email, password, studentId, firstName, lastName)
        .then(() => {
          this.login(username, password)
        })
        .catch(({ message }) => {
          dispatch({
            type: actions.REGISTER_FAILURE,
            payload: { error: message }
          })
        })
    },

    login: (username, password) => {
      AuthService.login(username, password)
        .then(() => {
          dispatch({ type: actions.LOGIN_SUCCESS })
        })
        .catch(({ message }) => {
          dispatch({
            type: actions.LOGIN_FALURE,
            payload: { error: message }
          })
        })
    },

    logout: () => {
      AuthService.logout()
        .then(() => {
          dispatch({ type: actions.LOGOUT })
        })
    },

    clearError: () => {
      dispatch({ type: actions.CLEAR_ERROR })
    },

    loadUser: () => {
      AuthService.retrieveUser()
        .then((userData) => {
          dispatch({
            type: actions.LOAD_USER_SUCCESS,
            payload: { userData }
          })
        })
        .catch(({ message }) => {
          dispatch({
            type: actions.LOAD_USER_FAILURE,
            payload: { error: message }
          })
        })
    }
  }), [])

  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={helpers}>
        {children}
      </AuthDispatch.Provider>
    </AuthState.Provider>
  )
}

const useAuthState = () => {
  const context = useContext(AuthState)

  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

const useAuthDispatch = () => {
  const context = useContext(AuthDispatch)

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }

  return context
}

export { AuthProvider, useAuthState, useAuthDispatch }

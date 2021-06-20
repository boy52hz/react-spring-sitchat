import { useEffect } from 'react'
import { Route, useHistory, Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuthState, useAuthDispatch } from './providers/authProvider'
import { StyledApp } from './StyledApp'

import PrivateRoute from './components/PrivateRoute'

import Broadcast from './containers/Broadcast'
import Login from './containers/Login'
import Register from './containers/Register'

import 'react-toastify/dist/ReactToastify.css'
import { ERROR_TYPES } from './types'

const App = () => {
  const { clearError, loadUser, logout } = useAuthDispatch()
  const { error, isLoggedIn, userData } = useAuthState()

  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((a) => {
      error && clearError()
    })
    return () => unlisten()
  }, [history, error, clearError])

  useEffect(() => {
    if (isLoggedIn && !userData) {
      loadUser()
    }
  }, [isLoggedIn, loadUser, userData])

  useEffect(() => {
    if (error === ERROR_TYPES.INVALID_TOKEN) {
      logout()
    }
  }, [error, logout])

  return (
    <StyledApp>
      <Switch>
        <PrivateRoute exact path='/' redirectTo='/login'>
          <Broadcast/>
        </PrivateRoute>
        <Route exact path='/login'>
          { isLoggedIn ? <Redirect to='/'/> : <Login/> }
        </Route>
        <Route exact path='/register'>
         { isLoggedIn ? <Redirect to='/'/> : <Register/> }
        </Route>
      </Switch>
      <ToastContainer />
    </StyledApp>
  )
}

export default App
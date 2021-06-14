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

const App = () => {
  const { onClearErrors, onLoadUserData } = useAuthDispatch()
  const { error, isLoggedIn, userData } = useAuthState()

  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      error && onClearErrors()
    })

    if (isLoggedIn && !userData) {
      onLoadUserData()
    }

    return () => unlisten()
  },[history, error, onClearErrors, isLoggedIn, userData, onLoadUserData])

  return (
    <StyledApp>
      <Switch>
        <PrivateRoute exact path='/' redirectTo='/login'>
          <Broadcast/>
        </PrivateRoute>
        <Route exact path='/login'>
          { isLoggedIn ? <Redirect from='/login' to='/'/> : <Login/> }
        </Route>
        <Route path='/register' component={ Register }/>
      </Switch>
      <ToastContainer />
    </StyledApp>
  )
}

export default App
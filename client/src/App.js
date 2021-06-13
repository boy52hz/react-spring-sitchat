import { useEffect } from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'
import { useAuthState, useAuthDispatch } from './providers/authProvider'
import { StyledApp } from './StyledApp'

import PrivateRoute from './components/PrivateRoute'

import Broadcast from './containers/Broadcast'
import Login from './containers/Login'
import Register from './containers/Register'

const App = () => {
  const { onClearErrors } = useAuthDispatch()
  const { error } = useAuthState()

  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      error && onClearErrors()
    })

    return () => unlisten()
  },[history, error, onClearErrors])

  return (
    <StyledApp>
      <Switch>
        <PrivateRoute exact path='/' redirectTo='/login'>
          <Broadcast/>
        </PrivateRoute>
        <Route path='/login' component={ Login }/>
        <Route path='/register' component={ Register }/>
      </Switch>
    </StyledApp>
  )
}

export default App
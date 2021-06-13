import { Route } from 'react-router-dom'

import { StyledApp } from './StyledApp'

import Broadcast from './containers/Broadcast'
import Login from './containers/Login'
import Register from './containers/Register'

const App = () => {
  return (
    <StyledApp>
      <Route path='/' component={ Broadcast }/>
      <Route path='/login' component={ Login }/>
      <Route path='/register' component={ Register }/>
    </StyledApp>
  );
}

export default App
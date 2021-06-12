import './App.css';

import { Route } from 'react-router-dom'
import { Login } from './containers/Login'
import { Register } from './containers/Register'

function App() {
  return (
    <div className="App">
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
    </div>
  );
}

export default App;

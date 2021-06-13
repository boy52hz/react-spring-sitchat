import React from 'react'
import { Link } from 'react-router-dom'

import { StyledLogin, FormGroup, MainBody } from './style.js'
import Input  from '../../components/Input'
import Button from '../../components/Button'

const Login = () => {
  return (
    <StyledLogin>
      <MainBody>
        <h1>SIT CHAT</h1>
        <FormGroup>
          <div>
            <Input type='text' placeholder='Username'/>
            <Input type='password' placeholder='Password'/>
          </div>
          <Button>Login</Button>
          <Link to='/register'>I don't have an account yet.</Link>
        </FormGroup>
      </MainBody>
    </StyledLogin>
  )
}

export default Login

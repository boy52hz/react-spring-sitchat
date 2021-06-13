import React from 'react'
import { Link } from 'react-router-dom'

import { StyledLogin, FormGroup, MainBody } from './style.js'
import Input  from '../../components/Input'
import Button from '../../components/Button'

import { useAuthState, useAuthDispatch } from '../../providers/authProvider'

const Login = () => {
  const { onUpdate, onLogin } = useAuthDispatch()
  const { username, password } = useAuthState()

  const onSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <StyledLogin>
      <MainBody>
        <h1>SIT CHAT</h1>
        <FormGroup onSubmit={ onSubmit }>
          <div>
            <Input name='username' value={ username || '' }type='text' placeholder='Username' onChange={ onUpdate }/>
            <Input name='password' value={ password || '' }type='password' placeholder='Password' onChange={ onUpdate }/>
          </div>
          <Button type='submit'>Login</Button>
          <Link to='/register'>I don't have an account yet.</Link>
        </FormGroup>
      </MainBody>
    </StyledLogin>
  )
}

export default Login

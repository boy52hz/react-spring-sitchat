import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { StyledLogin, FormGroup, MainBody } from './style.js'
import Input  from '../../components/Input'
import Button from '../../components/Button'

import { useAuthState, useAuthDispatch } from '../../providers/authProvider'

const Login = () => {
  const { onUpdate, onLogin } = useAuthDispatch()
  const { username, password, isLoggedIn } = useAuthState()
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  useEffect(() => {
    if (isLoggedIn) {
			history.push('/')
		}
  }, [isLoggedIn, history])

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

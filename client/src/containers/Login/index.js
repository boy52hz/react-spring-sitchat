import React from 'react'
import { Link } from 'react-router-dom'

import { BaseContainer, FormGroup, MainBody, ErrorMessage } from '../../globalStyles'
import Input  from '../../components/Input'
import Button from '../../components/Button'

import { useAuthState, useAuthDispatch } from '../../providers/authProvider'

const Login = () => {
  const { onUpdate, onLogin } = useAuthDispatch()
  const { username, password, error } = useAuthState()
  const invalidForm = (error ? error : '' )

  const onSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <BaseContainer>
      <MainBody>
        <h1>SIT CHAT</h1>
        <ErrorMessage>{ invalidForm }</ErrorMessage>
        <FormGroup onSubmit={ onSubmit } autoComplete='off'>
          <div>
            <Input name='username' value={ username || '' }type='text' placeholder='Username' onChange={ onUpdate } required/>
            <Input name='password' value={ password || '' }type='password' placeholder='Password' onChange={ onUpdate } required/>
          </div>
          <Button type='submit'>Login</Button>
          <Link to='/register'>I don't have an account yet.</Link>
        </FormGroup>
      </MainBody>
    </BaseContainer>
  )
}

export default Login

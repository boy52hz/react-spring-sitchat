import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { BaseContainer, FormGroup, MainBody, ErrorMessage } from '../../globalStyles'
import Input  from '../../components/Input'
import Button from '../../components/Button'

import { useAuthState, useAuthDispatch } from '../../providers/authProvider'

const Login = () => {
  const { login } = useAuthDispatch()
  const { error } = useAuthState()
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    login(inputs.username, inputs.password)
  }

  const handleChange = (e) => {
    setInputs(inputs => {
      const { name, value } = e.target
      return {
        ...inputs,
        [name]: value
      }
    })
  }

  return (
    <BaseContainer>
      <MainBody>
        <h1>SIT CHAT</h1>
        {error && <ErrorMessage>{ error }</ErrorMessage>}
        <FormGroup onSubmit={ handleSubmit } autoComplete='off'>
          <div>
            <Input name='username' value={ inputs.username } type='text' placeholder='Username' onChange={ handleChange } required/>
            <Input name='password' value={ inputs.password } type='password' placeholder='Password' onChange={ handleChange } required/>
          </div>
          <Button type='submit'>Login</Button>
          <Link to='/register'>I don't have an account yet.</Link>
        </FormGroup>
      </MainBody>
    </BaseContainer>
  )
}

export default Login

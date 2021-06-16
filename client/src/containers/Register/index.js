import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { StyledRegister, FormGroup, MainBody } from './style.js'
import Input  from '../../components/Input'
import Button from '../../components/Button'

import { useAuthState, useAuthDispatch } from '../../providers/authProvider'

const Register = () => {
  const { onUpdate, onRegister } = useAuthDispatch()
  const { username, password, email } = useAuthState()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const confirmPasswordRef = useRef()
  const studentIdRef = useRef()

  const onSubmit = function(e) {
    e.preventDefault()
    if (confirmPasswordRef.current.value !== password) return
    onRegister(studentIdRef.current.value, firstNameRef.current.value, lastNameRef.current.value)
  }

  return (
    <StyledRegister>
      <MainBody>
        <h1>REGISTER</h1>
        <FormGroup onSubmit={ onSubmit }>
          <div style={{marginBottom: "8px"}}>
            <Input name='username' value={ username || '' } type='text' placeholder='Username' onChange={ onUpdate } required/>
            <Input name='password' value={ password || ''} type='password' placeholder='Password' onChange={ onUpdate } required/>
            <Input name='confirmPassword' innerRef={confirmPasswordRef} type='password' placeholder='Confirm Password' required/>
          </div>
          <div>
            <Input name='firstName' innerRef={firstNameRef} type='text' placeholder='First Name' required/>
            <Input name='lastName' innerRef={lastNameRef} type='text' placeholder='Last Name' required/>
            <Input name='studentId' innerRef={studentIdRef} type='number' placeholder='Student ID' required/>
            <Input name='email' value={ email || '' } type='email' placeholder='Email' onChange={ onUpdate } required/>
          </div>
          <Button type='submit'>Register</Button>
          <Link to='/login'>Already have an account? Login</Link>
        </FormGroup>
      </MainBody>
    </StyledRegister>
  )
}

export default Register

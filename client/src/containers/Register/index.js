import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { BaseContainer, FormGroup, MainBody, ErrorMessage } from '../../globalStyles'
import Input  from '../../components/Input'
import Button from '../../components/Button'

import { useAuthState, useAuthDispatch } from '../../providers/authProvider'

const Register = () => {
  const { onRegister } = useAuthDispatch()
  const { error } = useAuthState()
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputs.confirmPassword !== inputs.password) return
    onRegister(inputs.username, inputs.email, inputs.password, inputs.studentId, inputs.firstName, inputs.lastName)
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
        <h1>REGISTER</h1>
        {error && <ErrorMessage>{ error }</ErrorMessage>}
        <FormGroup onSubmit={ handleSubmit }>
          <div style={{marginBottom: "8px"}}>
            <Input name='username' type='text' placeholder='Username' value={inputs.username} onChange={ handleChange } required/>
            <Input name='password' type='password' placeholder='Password' value={inputs.password} onChange={ handleChange } required/>
            <Input name='confirmPassword' type='password' placeholder='Confirm Password' value={inputs.confirmPassword} onChange={ handleChange } required/>
          </div>
          <div>
            <Input name='firstName' type='text' placeholder='First Name' value={inputs.firstName} onChange={ handleChange } required/>
            <Input name='lastName' type='text' placeholder='Last Name' value={inputs.lastName} onChange={ handleChange } required/>
            <Input name='studentId' type='number' placeholder='Student ID' value={inputs.studentId} onChange={ handleChange } required/>
            <Input name='email' type='email' placeholder='Email' value={inputs.email} onChange={ handleChange } required/>
          </div>
          <Button type='submit'>Register</Button>
          <Link to='/login'>Already have an account? Login</Link>
        </FormGroup>
      </MainBody>
    </BaseContainer>
  )
}

export default Register

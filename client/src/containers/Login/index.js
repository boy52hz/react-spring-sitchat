import React from 'react'

import { StyledLogin, InputGroup } from './style.js'
import Input  from '../../components/Input'

export const Login = () => {
  return (
    <StyledLogin>
      <h1>SIT CHAT</h1>
      <InputGroup>
        <Input type='text' placeholder='Username'/>
        <Input type='password' placeholder='Password'/>
      </InputGroup>
    </StyledLogin>
  )
}

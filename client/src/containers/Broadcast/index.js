import React, { useState, useRef, Fragment} from 'react'
import SockJsClient from 'react-stomp'
import { toast } from 'react-toastify'

import { useAuthState } from '../../providers/authProvider'
import { StyledBroadcast, MainBody, MainBox, MainHeader, FormGroup } from './style'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

const SOCKET_URL = 'http://localhost:8080/ws'
const TOPIC_PATH = '/topic/message/main'

const Broadcast = () => {
  const client = useRef()
  const [clientMsg, setClientMsg] = useState('')
  const [messages, setMessages] = useState([])
  const { userData, token } = useAuthState()

  const onConnected = () => {
    toast.info('You are now connected to chat session.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
    })
  }

  const onMessageReceived = (msg) => {
    setMessages([...messages, msg])
  }

  const onConnectFailure = (err) => {
    console.log('Cannot connect to server. please try to reconnect again.')
    throw err
  }

  const handleChange = (e) => {
    const message = e.target.value
    setClientMsg(message)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    client.current.sendMessage('/app/message/main', JSON.stringify({
      from: 'A',
      to: 'main',
      content: clientMsg
    }))
    setClientMsg('')
  }

  return !userData ? <Fragment/> : (
    <StyledBroadcast>
      <SockJsClient
        headers={{ Authorization: `Bearer ${token}` }}
        url={ SOCKET_URL }
        topics={[ TOPIC_PATH ]}
        onConnect={ onConnected }
        onMessage={ msg => onMessageReceived(msg) }
        onConnectFailure={ onConnectFailure }
        debug={ false }
        ref={ client }
      />
      <MainBox>
        <MainHeader>SIT CHAT - { userData.username }</MainHeader>
        <MainBody>
          <ul>
            { messages.map((msg, index) => (
              <li key={ index }>{ msg.content }</li>
            )) }
          </ul>
          <FormGroup onSubmit={ onSubmit }>
            <TextField cols='60' rows='5' placeholder='Enter your message' onChange={ handleChange } value={ clientMsg }></TextField>
            <Button type='submit'>Send</Button>
          </FormGroup>
        </MainBody>
      </MainBox>
    </StyledBroadcast>
  )
}

export default Broadcast
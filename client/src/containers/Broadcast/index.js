import React, { useState } from 'react'
import SockJsClient from 'react-stomp'

import { useAuthState } from '../../providers/authProvider'
import { StyledBroadcast, MainBody, MainBox, MainHeader, InputGroup } from './style'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

const SOCKET_URL = 'http://localhost:8080/ws'
const TOPIC_PATH = '/topic/message/main'

const Broadcast = () => {
  const [messages, setMessages] = useState([])
  const { username, token } = useAuthState()

  const onConnected = () => {
    console.log("Connected!!")
  }

  const onMessageReceived = (msg) => {
    setMessages([...messages, msg])
  }

  const onConnectFailure = (err) => {
    console.log('Cannot connect to server. please try to reconnect again.')
    throw err
  }

  return (
    <StyledBroadcast>
      <SockJsClient
        headers={{ Authorization: `Bearer ${token}` }}
        url={ SOCKET_URL }
        topics={[ TOPIC_PATH ]}
        onConnect={ onConnected }
        onMessage={ msg => onMessageReceived(msg) }
        onConnectFailure={ onConnectFailure }
        debug={ false }
      />
      <MainBox>
        <MainHeader>SIT CHAT - { username }</MainHeader>
        <MainBody>
          <ul>
            { messages.map((msg, index) => (
              <li key={ index }>{ msg.content }</li>
            )) }
          </ul>
          <InputGroup>
            <TextField cols='60' rows='5' placeholder='Enter your message'></TextField>
            <Button>Send</Button>
          </InputGroup>
        </MainBody>
      </MainBox>
    </StyledBroadcast>
  )
}

export default Broadcast
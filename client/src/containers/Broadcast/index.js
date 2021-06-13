import React, { useState } from 'react'
import SockJsClient from 'react-stomp'

import { StyledBroadcast } from './style'

const SOCKET_URL = 'http://localhost:8080/ws'
const TOPIC_PATH = '/topic/message/main'

const Broadcast = () => {
  const [messages, setMessages] = useState([])

  const onConnected = () => {
    console.log("Connected!!")
  }

  const onMessageReceived = (msg) => {
    setMessages([...messages, msg])
  }

  return (
    <StyledBroadcast>
      <SockJsClient
        url={ SOCKET_URL }
        topics={[ TOPIC_PATH ]}
        onConnect={ onConnected }
        onMessage={ msg => onMessageReceived(msg) }
        debug={ false }
      />
      <ul>
        { messages.map((msg, index) => (
          <li key={ index }>{ msg.content }</li>
        )) }
      </ul>
    </StyledBroadcast>
  )
}

export default Broadcast
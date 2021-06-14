import React, { useState, useRef, useEffect, Fragment} from 'react'
import SockJsClient from 'react-stomp'
import { toast } from 'react-toastify'
import moment from 'moment'

import { useAuthState  } from '../../providers/authProvider'
import { StyledBroadcast, MainBody, MainBox, MainHeader, FormGroup } from './style'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useChatDispatch, useChatState } from '../../providers/chatProvider'

const SOCKET_URL = 'http://localhost:8080/ws'
const TOPIC_PATH = '/topic/message/main'

const Broadcast = () => {
  const client = useRef()
  const [clientMsg, setClientMsg] = useState('')
  const { chatHistory, isChatLoaded } = useChatState()
  const { onLoadChat } = useChatDispatch()
  const { userData, token } = useAuthState()

  useEffect(() => {
    if (!isChatLoaded) {
      onLoadChat()
    }
  }, [onLoadChat, isChatLoaded])

  const isMe = (msg) => (msg.from.split(' ')[0] === userData.firstName)

  const onConnected = () => {
    toast.info('You are now connected to chat session.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
    })
  }

  const onMessageReceived = (msg) => {
    onLoadChat()
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
      from: userData.firstName + ' ' + userData.lastName,
      to: 'main',
      content: clientMsg,
      dateTime: new Date().getTime().toString()
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
            { chatHistory.map((msg, index) => (
              <li key={ index }>
                <div>
                  <h4>{ msg.from } { isMe(msg) ? '(Me)' : '' }:</h4>
                  <p>{ msg.content }</p>
                </div>
                <p style={{ textAlign: 'right', fontSize: '14px' }}>{ moment(parseInt(msg.dateTime)).fromNow() }</p>
              </li>
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
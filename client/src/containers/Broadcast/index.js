import React, { useState, useRef, useEffect, Fragment} from 'react'
import SockJsClient from 'react-stomp'
import { toast } from 'react-toastify'
import moment from 'moment'

import { useAuthDispatch, useAuthState  } from '../../providers/authProvider'
import { StyledBroadcast, MainBody, MainBox, MainHeader, FormGroup, CustomLi, ChatBox } from './style'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useChatDispatch, useChatState } from '../../providers/chatProvider'
import { Redirect } from 'react-router-dom'
import { ERROR_TYPES } from '../../types';

const SOCKET_URL = `${process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : window.location.origin}/ws`
const TOPIC_PATH = '/topic/message/main'

const Broadcast = () => {
  const client = useRef()
  const [clientMsg, setClientMsg] = useState('')
  const { chatHistory } = useChatState()
  const { onLoadChat, onMessageReceive } = useChatDispatch()
  const { onLogout, onLoadUserData } = useAuthDispatch()
  const { userData, error } = useAuthState()

  useEffect(() => {
    if (!userData) {
      onLoadUserData()
    }
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
      })
      onLogout()
    }
    onLoadChat()
  }, [error, userData, onLogout, onLoadChat, onLoadUserData])

  const isMe = userData ? (msg) => (msg.from.username === userData.username) : () => false;
  const getFullName = (data) => (data ? data.firstName + ' ' + data.lastName : '')

  const onConnected = () => {
    toast.info('You are now connected to chat session.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
    })
  }

  const onConnectFailure = (err) => {
    console.log('Cannot connect to server. please try to reconnect again.')
    throw err
  }

  const handleChange = (e) => {
    const message = e.target.value
    setClientMsg(message)
  }

  const handleKeyPress = (e) => {
    if ((e.which === 13 || e.charCode === 13) && !e.shiftKey) {
      onSubmit(e)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (clientMsg.trim() === '') return
    client.current.sendMessage('/app/message/main', JSON.stringify({
      from: userData,
      to: 'main',
      content: clientMsg,
      dateTime: new Date().getTime().toString()
    }))
    setClientMsg('')
  }

  return !userData && <Fragment/> || error === ERROR_TYPES.INVALID_TOKEN && <Redirect to={"/"}/> || (
    <StyledBroadcast>
      <SockJsClient
        headers={{ Authorization: `Bearer ${sessionStorage.getItem('token')}` }}
        url={ SOCKET_URL }
        topics={[ TOPIC_PATH ]}
        onConnect={ onConnected }
        onMessage={ msg => onMessageReceive(msg) }
        onConnectFailure={ onConnectFailure }
        debug={ false }
        ref={ client }
      />
      <MainBox>
        <MainHeader>
          <div style={{ flex: '10' }}>SIT CHAT - { getFullName(userData) }</div>
          <Button style={{ flex: '1' }} onClick={ onLogout }>Logout</Button>
        </MainHeader>
        <MainBody>
          <ul>
            { chatHistory.map((msg, index, arr) => (
              <CustomLi key={ msg.dateTime } isMe={ isMe(msg) } newGrouping={ index + 1 < arr.length && (moment(parseInt(msg.dateTime)) - moment(parseInt(arr[index + 1].dateTime))) > 1000 * 10 } >
                <ChatBox isMe={ isMe(msg)} >
                  { !isMe(msg) ? <h4>({ msg.from.studentId }) { getFullName(msg.from) }:</h4> : '' }
                  <p>{ msg.content }</p>
                  <p style={{ textAlign: (isMe(msg) ? 'left' : 'right'), fontSize: '14px' }}>{ moment(parseInt(msg.dateTime)).fromNow() }</p>
                </ChatBox>
              </CustomLi>
            )) }
          </ul>
          <FormGroup onSubmit={ onSubmit }>
            <TextField cols='60' rows='5' placeholder='Enter your message' onChange={ handleChange } value={ clientMsg } onKeyPress={ handleKeyPress }></TextField>
            <Button type='submit'>Send</Button>
          </FormGroup>
        </MainBody>
      </MainBox>
    </StyledBroadcast>
  )
}

export default Broadcast
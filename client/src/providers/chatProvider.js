import { createContext, useContext, useMemo, useReducer } from 'react'
import ChatService from '../services/chatService'

const ChatState = createContext()
const ChatDispatch = createContext()

const actions = {
  LOAD_CHAT_SUCCESS: 'LOAD_CHAT_SUCCESS',
  LOAD_CHAT_FAILURE: 'LOAD_CHAT_FAILURE',
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE'
}

const INITIAL_STATE = {
  chatHistory: [],
  isChatLoaded: false
}

const chatReducer = (state, action) => {
  switch (action.type) {
    case actions.LOAD_CHAT_SUCCESS: {
      const { chatHistory } = action.payload
      return {
        ...state,
        chatHistory,
        isChatLoaded: true
      }
    }
    case actions.LOAD_CHAT_FAILURE: {
      const { error } = action.payload
      return {
        ...state,
        error
      }
    }
    case actions.RECEIVE_MESSAGE: {
      const { newMessage } = action.payload
      return {
        ...state,
        chatHistory: [newMessage, ...state.chatHistory]
      }
    }
    default: {
      return state
    }
  }
}

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

  const helpers = useMemo(() => ({
    loadChat: (room) => {
      ChatService.loadChat(room)
        .then((chatHistory) => {
          dispatch({
            type: actions.LOAD_CHAT_SUCCESS,
            payload: { chatHistory }
          })
        })
        .catch(({ message }) => {
          dispatch({
            type: actions.LOAD_CHAT_FAILURE,
            payload: { error: message }
          })
        })
    },

    handleNewMessage: (newMessage) => {
      dispatch({
        type: actions.RECEIVE_MESSAGE,
        payload: { newMessage }
      })
    }
  }), [])

  return (
    <ChatState.Provider value={state}>
      <ChatDispatch.Provider value={helpers}>
        {children}
      </ChatDispatch.Provider>
    </ChatState.Provider>
  )
}

const useChatState = () => {
  const context = useContext(ChatState)

  if (context === undefined) {
    throw new Error('useChatState must be used within a ChatProvider')
  }

  return context
}

const useChatDispatch = () => {
  const context = useContext(ChatDispatch)

  if (context === undefined) {
    throw new Error('useChatDispatch must be used within a ChatProvider')
  }

  return context
}

export { ChatProvider, useChatState, useChatDispatch }

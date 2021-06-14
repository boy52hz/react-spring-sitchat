import { createContext, useContext, useReducer } from 'react'
import ChatService from '../services/chatService'

const ChatState = createContext()
const ChatDispatch = createContext()

const EVENT_TYPES = {
  CHAT_LOADED: 'chat_loaded',
  CHAT_LOAD_FAILED: 'chat_load_failed'
}

const INITIAL_STATE = {
  chatHistory: [],
  isChatLoaded: false
}

const EVENTS = {

  [EVENT_TYPES.CHAT_LOADED]: (state, event) => {
    return {
      ...state,
      chatHistory: event.payload.chatHistory,
      isChatLoaded: true
    }
  },
  [EVENT_TYPES.CHAT_LOAD_FAILED]: (state, event) => {
    const { error } = event.payload
    return {
        ...state,
        error
    }
  }
}

const ChatReducer = (state, event) => {
  return EVENTS[event.type](state, event) || state
}

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE)

  const handleChatLoading = event => {
    ChatService.loadChat('main', sessionStorage.getItem('token')).then(chatHistory => {
      dispatch({ 
        type: EVENT_TYPES.CHAT_LOADED,
        payload: { chatHistory }
       })
    }).catch(({ message }) => {
      dispatch({
        type: EVENT_TYPES.CHAT_LOAD_FAILED,
        payload: { error: message }
      })
    })
  }

  const events = {
    onLoadChat: handleChatLoading
  }

  return (
    <ChatState.Provider value={state}>
      <ChatDispatch.Provider value={events}>
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

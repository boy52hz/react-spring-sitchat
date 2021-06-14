const ChatService = {
  _url: 'http://localhost:8080',
  loadChat(room, token) {
    return fetch(`${this._url}/history/${room}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${ token }`
      }
    })
    .then(res => {
      if (res.status === 200) {
        return res
      }

      return res.json().then(({ message }) => {
        throw Error(message)
      })
    })
    .then(res => res.json())
    .then(historyChat => historyChat)
  }
}

export default ChatService
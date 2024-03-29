import validateEmail from '../utils/validateEmail'

const AuthService = {
  _url: process.env.REACT_APP_API_URL || '',

  _validateStringField(field, value) {
    if (typeof value !== 'string' || !value.trim().length)
      throw Error(`${field[0].toUpperCase()} is not valid`)
  },

  _validateEmail(email) {
    if (!validateEmail(email)) throw Error(`${email} is not a valid email`)
  },

  setUsername(username) {
    if (username) {
      sessionStorage.setItem('username', username)
    }
  },

  getUsername() {
    return sessionStorage.getItem('username')
  },

  setToken(token) {
    if (token) {
      sessionStorage.setItem('token', token)
    }
  },

  getToken() {
    return sessionStorage.getItem('token')
  },

  isLoggedIn() {
    const res = !!(this.getUsername() && this.getToken())

    return res
  },

  register(username, email, password, studentId, firstName, lastName) {
    return Promise.resolve().then(() => {
      this._validateStringField('username', username)
      this._validateEmail(email)
      this._validateStringField('password', password)
      this._validateStringField('studentId', studentId)
      this._validateStringField('firstName', firstName)
      this._validateStringField('lastName', lastName)

      return fetch(`${this._url}/register`, {
        method: 'POST',
        body: JSON.stringify({ username, email, password, studentId, firstName, lastName }),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => {
          if (res.status === 201) {
            return res
          }

          return res.json().then(({ message }) => {
            throw Error(message)
          })
        })
        .then(res => res.json())
        .then(() => true)
    })
  },

  login(username, password) {
    return Promise.resolve().then(() => {
      this._validateStringField('username', username)
      this._validateStringField('password', password)

      return fetch(`${this._url}/authenticate`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
          if (res.status === 200) {
            return res
          }

          return res.json().then(({ message }) => {
            throw Error(message)
          })
        })
        .then(res => res.json())
        .then((data) => {
          this.setToken(data.jwt)
          this.setUsername(data.username)

          return true
        })
    })
  },

  logout() {
    return Promise.resolve().then(() => {
      sessionStorage.clear()

      return true
    })
  },

  retrieveUser() {
    return fetch(`${this._url}/user/${this.getUsername()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.getToken()}`
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
    .then(userData => userData)
  }
}

export default AuthService
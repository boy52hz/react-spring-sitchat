import validateEmail from '../utils/validateEmail'

const AuthService = {
  _url: 'http://localhost:8080',

  _validateStringField(field, value) {
    if (typeof value !== 'string' || !value.trim().length)
      throw Error(`${field} is not valid`)
  },

  _validateEmail(email) {
    if (!validateEmail(email)) throw Error(`${email} is not a valid email`)
  },

  _username(username) {
    if (typeof username !== 'undefined') {
      sessionStorage.setItem('username', username)

      return
    }

    return sessionStorage.getItem('username')
  },

  _token(token) {
    if (typeof token !== 'undefined') {
      sessionStorage.setItem('token', token)

      return
    }

    return sessionStorage.getItem('token')
  },

  isLoggedIn() {
    const res = !!(this._username() && this._token())

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
          console.log(data.jwt)
          this._token(data.jwt)
          this._username(data.username)

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
    return fetch(`${this._url}/user/${this._username()}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this._token()}`
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
    .then(({ user }) => user)
  }
}

export default AuthService
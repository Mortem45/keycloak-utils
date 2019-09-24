'use strict'
const Token = require('./token')

class JWT {
  constructor (config, request) {
    this.config = config
    this.request = request
  }

  /**
   *@description decode token
   * @param token AccessToken
   */
  decode (token) {
    return new Promise((resolve, reject) => {
      resolve(new Token(token))
    })
  }

  /**
   * @description returns true if the token is verify and false otherwise
   * @param token AccessToken
   */
  async verify (token) {
    let verify = null
    await this.request
      .get(`/auth/realms/${this.config.realm}/protocol/openid-connect/userinfo`, {
        headers: {
          // eslint-disable-next-line quote-props
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => verify = true)
      .catch(err => verify = false)

    return verify
  }
}

module.exports = JWT

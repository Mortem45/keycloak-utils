'use strict'

class JWT {
  constructor (config, request){
    this.config = config
    this.request = request
  }

  async verify (token) {
    let verify = null
    await this.request
      .get(`/auth/realms/${this.config.realm}/protocol/openid-connect/userinfo`, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => verify = true)
      .catch(err => verify = false)

    return verify
  }
}

module.exports = JWT

'use strict'

const qs = require('query-string')

class AccessToken {
  constructor (config, request) {
    this.config = config
    this.request = request
  }

  async info (token) {
    const response = await this.request.get(`/auth/realms/${this.config.realm}/protocol/openid-connect/userinfo`, {
      headers: {
        // eslint-disable-next-line quote-props
        'Authorization': 'Bearer ' + token
      }
    })
    return response.data
  }

  refresh (refreshToken) {
    const config = this.config

    return this.request.post(`/auth/realms/${config.realm}/protocol/openid-connect/token`, qs.stringify({
      grant_type: 'refresh_token',
      client_id: config.client_id,
      client_secret: config.client_secret,
      refresh_token: refreshToken
    }))
  }

  async getToken (username, password) {
    const config = this.config

    if (!this.data) {
      try {
        const response = await this.request.post(`/auth/realms/${config.realm}/protocol/openid-connect/token`, qs.stringify({
          grant_type: 'password',
          username: username,
          password: password,
          client_id: config.clientId,
          client_secret: config.clientSecret
        }))
        this.data = response.data
        return {
          success: true,
          data: this.data
        }
      } catch (error) {
        return {
          success: false,
          error: error
        }
      }
    }
  }
}

module.exports = AccessToken

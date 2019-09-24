'use strict'

const axios = require('axios')
const Jwt = require('./lib/jwt')
const Token = require('./lib/token')
const AccessToken = require('./lib/AccessToken')

function Utils (config) {
  const request = axios.create({
    // eslint-disable-next-line dot-notation
    baseURL: config['serverUrl']
  })

  const jwt = new Jwt(config, request)
  const accessToken = new AccessToken(config, request)

  return {
    jwt,
    Token,
    accessToken
  }
}

module.exports = {
  Token,
  Utils
}

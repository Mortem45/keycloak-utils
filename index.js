'use strict'

const axios = require('axios')
const JWT = require('./lib/jwt')

module.exports = (config) => {
  const request = axios.create({
    baseURL: config['serverUrl']
  })

  const jwt = new JWT(config, request)

  return {
    jwt
  }
}

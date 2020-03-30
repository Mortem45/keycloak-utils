'use strict'

const configKeycloak = {
  realm: 'SpringBootKeycloak',
  serverUrl: 'http://localhost:8080',
  clientId: 'login_app',
  clientSecret: 'e27ec8f0-b74d-4efe-aeb2-183a1e41e708'
}
const Keycloak = require('../index')(configKeycloak)

async function run () {
  try {
    // console.log(token.content)
    const Accestoken = await Keycloak.accessToken.getToken('test', 'test')
    // console.log('Bearer ', Accestoken)

    const token = new Keycloak.Token(Accestoken, 'login_app')
    console.log(Accestoken)
    // const tok = token.isExpired()
    // console.log('isEspired ', token.hasRole('user'))

    // const tok4 = token.hahasRole('user')
    // console.log('hasRole ', tok4)
  } catch (error) {
    console.log(error)
  }
}
run()

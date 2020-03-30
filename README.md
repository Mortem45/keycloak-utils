# Keycloak-Utils

utiles module to keycloak ()

## Installation

Use the package manager [npm](https://npmjs.com/) to install foobar.

```bash
npm install keycloak-utils --save
```

## Usage

```javascript
import keycloakUtils from 'keycloak-utils'
//or
const KeycloakUtils = require('keycloak-utils')

const configKeycloak = {
    realm: 'myRealm',
    serverUrl: 'http://localhost:8080',
    clientId: 'myClient',
    clientSecret: 'myClientSecret'
}

const keycloakUtils = new KeycloakUtils(configKeycloak)

```

## Example
```javascript


!async function {
  try {
    /**
    * @description returns Aceess Token
    * @param userName username
    * @param Password password
    */
    const AccessToken = await KeycloakUtils.accessToken.getToken(userName, Password)

    /**
    * @description check if the token is valid
    * @param token access token
    */
    const isVerify = await KeycloakUtils.jwt.verify(token)
  } catch (e) {
    console.error(e)
  }
}()

/**
*@description decode token
* @param token AccessToken
*/
let decode = KeycloakUtils.jwt.decode(token)


// TOKEN INFORMATION
/**
* @description returns true if the token is expired and false otherwise
*/
let isExpired = KeycloakUtils.Token.isExpired()

/**
* @description look for a role in the app
* @param clientId name of the client
* @param roleName name of the role
*/
let hasApplicationRole = KeycloakUtils.Token.hasApplicationRole(clientId, roleName)

/**
* @description look for a role in the realm
* @param roleName name of the role
*/
let hasRealmRole = KeycloakUtils.Token.hasRealmRole(roleName)

/**
* @description look for role for his name
* @param name of the role
*/
let hasRole = KeycloakUtils.Token.hasRole(name)
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

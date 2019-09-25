# Keycloak-Utils

utiles module to keycloak

## Installation

Use the package manager [npm](https://npmjs.com/) to install foobar.

```bash
npm install keycloak-utils
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

###

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)

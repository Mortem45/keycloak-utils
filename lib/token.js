'use strict'

function Token (token, clientId) {
  this.token = token
  this.clientId = clientId

  if (token) {
    try {
      const parts = token.split('.')
      this.header = JSON.parse(new Buffer.from(parts[0], 'base64').toString())
      this.content = JSON.parse(new Buffer.from(parts[1], 'base64').toString())
      this.signed = parts[0] + '.' + parts[1]
    } catch (err) {
      this.content = {
        expiresAt: 0
      }
    }
  }
}

Token.prototype.isExpired = function () {
  if ((this.content.exp * 1000) < Date.now()) {
    return true
  } else {
    return false
  }
}

Token.prototype.hasApplicationRole = function (appName, roleName) {
  const appRoles = this.content.resource_access[appName]

  if (!appRoles) {
    return false
  }

  return (appRoles.roles.indexOf(roleName) >= 0)
}

Token.prototype.hasRealmRole = function (roleName) {
  return (this.content.realm_access.roles.indexOf(roleName) >= 0)
}

Token.prototype.hasRole = function (name) {
  if (!this.clientId) {
    return false
  }

  const parts = name.split(':')

  if (parts.length === 1) {
    return this.hasApplicationRole(this.clientId, parts[0])
  }

  if (parts[0] === 'realm') {
    return this.hasRealmRole(parts[1])
  }

  return this.hasApplicationRole(parts[0], parts[1])
}

module.exports = Token

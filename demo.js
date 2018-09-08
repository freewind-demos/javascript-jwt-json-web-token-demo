const base64url = require('base64url')
const crypto = require('crypto')

const header = base64url(JSON.stringify({
    'alg': 'HS256',
    'typ': 'JWT'
}))

const payload = base64url(JSON.stringify({
    'sub': 'demo',
    'name': 'javascript-jwt-json-web-token-demo',
    'iat': 1999939022
}))

const secret = 'hello-jwt'

const signature = base64url(crypto.createHmac('sha256', secret).update(header + '.' + payload).digest())

const jwt = `${header}.${payload}.${signature}`

console.log(jwt)


/* ---- Requires ---- */

const bcrypt = require('bcryptjs')

/* ---- Constants ---- */

const SALT_NUMBER = 10

/* ---- Methods ---- */

async function encrypt (string, key) {
  const salt = await bcrypt.genSalt(SALT_NUMBER)
  const content = getContent(string, key)
  return bcrypt.hash(content, salt)
}

async function check (string, hash, key) {
  const content = getContent(string, key)
  return bcrypt.compare(content, hash)
}

/* ---- Aux Functions ---- */

function getContent (string, key) {
  return string + key
}

module.exports = {
  encrypt,
  check
}

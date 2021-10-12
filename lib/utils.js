const {PASCAL_CASE_REGEX} = require('./constants')

function isPascalCase(value = '') {
  return PASCAL_CASE_REGEX.test(value)
}

module.exports = {
  isPascalCase
}

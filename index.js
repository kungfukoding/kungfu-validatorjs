/* Any */

const is = function (value, type) {
  const types = {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    object: 'object',
    array: 'object',
    function: 'function'
  }
  let result = false
  if (types.hasOwnProperty(type)) {
    result = typeof value == types[type]
    if (type === 'array') {
      result = Array.isArray(value)
    } 
  } else {
    if (type === 'date') {
      return value instanceof Date
    }
  }
  return result
}

/* Date */

Date.prototype.isEqual = function(value) {
  return this == value
}

Date.prototype.isGreaterThan = function(value) {
  return this > value
}

Date.prototype.isLessThan = function(value) {
  return this < value
}

Date.prototype.inRange = function(start, end) {
    return start <= this && this <= end
}

/* Number */

Number.prototype.isEqual = function (value) {
  return this == value
}

Number.prototype.isGreaterThan = function (value) {
  return this > value
}

Number.prototype.isLessThan = function (value) {
  return this < value
}

Number.prototype.isContains = function (list) {
  let result = false
  if (Array.isArray(list)) {
    result = list.includes(this)
  }
  return result
}

Number.prototype.inRange = function(start, end) {
    return start <= this && this <= end
}

/* String */

String.prototype.isEqual = function (value) {
  return this.localeCompare(value) === 0
}

String.prototype.isGreaterThan = function (value) {
  return this.length > value
}

String.prototype.isLessThan = function (value) {
  return this.length < value
}

String.prototype.isAlpha = function () {
  return /^[a-z\s]+$/i.test(this)
}

String.prototype.isNum = function () {
  return /^[0-9]+$/.test(this)
}

String.prototype.isAlnum = function () {
  return /^[a-z0-9\s]+$/i.test(this)
}

String.prototype.isPhone = function () {
  return /^[+]?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{1,8}$/im.test(this)
}

String.prototype.isEmail = function () {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this)
}

String.prototype.isEmpty = function () {
  return this.length === 0
}

String.prototype.isLength = function (value) {
  return this.length === value
}

String.prototype.inLength = function (min, max) {
  return min <= this.length  && this.length  <= max
}

String.prototype.isContains = function (list) {
  if (Array.isArray(list)) {
    return list.includes(this)
  }
}

module.exports = is

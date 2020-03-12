var assert = require('assert')
var is = require('./index')

test('check is number', () => {
    assert.equal(is(15, 'number'), true)
})

test('check is string', () => {
    assert.equal(is('hello', 'string'), true)
})

test('check number isGreaterThan', () => {
    var number = 15
    assert.equal(number.isGreaterThan(20), false)
})

test('check number isLessThan', () => {
    var number = 15
    assert.equal(number.isLessThan(20), true)
})

test('check number inRange', () => {
    var number = 15
    assert.equal(number.inRange(5, 20), true)
})

test('check number isContains', () => {
    var number = 15
    assert.equal(number.isIn([5,10,15,20]), false)
})

test('check string isEmail', () => {
    var string = 'hafidmukhlasin@gmail.com'
    assert.equal(string.isEmail(), true)
})

test('check string isAlpha', () => {
    var string = 'Abcd1234'
    assert.equal(string.isAlpha(), false)
})

test('check string isAlnum', () => {
    var string = 'Abcd1234'
    assert.equal(string.isAlnum(), true)
})

test('check string inLength', () => {
    var string = 'Abcd1234'
    assert.equal(string.inLength(3, 10), true)
})

test('check falsy', () => {
    assert.equal(is(0, 'falsy'), true)
    assert.equal(is(null, 'falsy'), true)
    assert.equal(is(undefined, 'falsy'), true)
    assert.equal(is(false, 'falsy'), true)
    assert.equal(is(NaN, 'falsy'), true)
    assert.equal(is("", 'falsy'), true)
})
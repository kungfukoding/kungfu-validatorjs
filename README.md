# Kungfu ValidatorJs

Validator Javascript base on prototype

## Installation

```
npm install kungfu-validatorjs
```

## How To Use

```js
const is = require('kungfu-validatorjs')
 
is(15, 'number') // true
is('hello', 'string') // true
 
const number = 15
number.isGreaterThan(20) // false
number.isLessThan(20) // true
number.inRange(5, 20) // true
number.isContains([5,10,15,20]) // true
 
const string = 'hafidmukhlasin@gmail.com'
string.isEmail() // true
string.isAlpha() // false
string.inLength(10, 100) // true
```

## How To Contribute

Clone this project

```
git clone https://gitlab.com/kungfukoding/kungfu-validatorjs.git
cd kungfu-validatorjs
npm install
npm test
```
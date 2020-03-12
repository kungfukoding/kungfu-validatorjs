# Kungfu ValidatorJs

Validator Javascript base on prototype

[![npm downloads](https://img.shields.io/npm/dm/kungfu-validatorjs.svg?style=flat-square)](https://www.npmjs.com/package/kungfu-validatorjs)
![Node.js CI](https://github.com/kungfukoding/kungfu-validatorjs/workflows/Node.js%20CI/badge.svg)

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
number.isIn([5,10,15,20]) // true
 
const string = 'hafidmukhlasin@gmail.com'
string.isEmail() // true
string.isAlpha() // false
string.inLength(10, 100) // true
```

Or You can import it

```js
import is from 'kungfu-validatorjs'
```

## Documentation

You can find the documentation in [click here](./guide.md)

## How To Contribute

Clone this project

```
git clone https://gitlab.com/kungfukoding/kungfu-validatorjs.git
cd kungfu-validatorjs
npm install
npm run build
npm run test
```


## License

[MIT](LICENSE.md)

# deep-cloner

This package offers _deep cloning_ of objects, arrays, numbers, strings, maps,
sets and dates in JavaScript.

## Installation

```sheel
$ npm install deep-cloner
```

## Example

```javascript
const clone = require('deep-cloner');

const x = { foo: { bar: 'bazinga' } };  // initial value of x
const y = clone(x);                 // clone x -> y

x.foo.bar = 'foo';                  // update x

console.log(x);               
console.log(y);                     
```

This will print:

```javascript
{ foo: { bar: 'foo' } }
{ foo: { bar: 'bazinga' } }
```

## API

### `clone(value)`
  * `value`: The value that you want to clone. 
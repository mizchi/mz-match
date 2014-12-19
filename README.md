# mz-match 

Returnable switch for es6 and typescript with easy pattern matching.

This is a feature just what I want.

```
npm install --save mz-match
```

## How to use

String match

```javascript
var match = require('mz-match');

var target = 'A';
var ret = match(target,
    'A', ()=> 'this is a', 
    'B', ()=> 'this is b'
);
```

instance match

```javascript
var match = require('mz-match');

class A {}
class B {}

var target = new B();
var ret = match(target,
    A, ()=> 'this is instance of A', 
    B, ()=> 'this is instance of B'
);
```

function test

```javascript
var match = require('mz-match');

var test1 = (v) => v === 1;
var test2 = (v) => v === 2;

var target = 1;
var ret = match(target,
    test1, ()=> 'this passed test1', 
    test2, ()=> 'this passed test2'
);
```

with default

```javascript
var match = require('mz-match');

class A {}
var test1 = (v) => v === 1;

var ret = match(null,
    'foo', ()=> 'this is foo',
    A    , ()=> 'this is instance of A',
    test1, ()=> 'this passed test1', 
    () => 'not hit'
);
console.log(ret); //=> 'not hit'
```

## LICENSE

MIT

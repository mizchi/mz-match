declare var require: any;
var ok = require('assert').ok;
var match = require('../');

class A {}
var fn = (v) => v === 2;

var test1 = (target) => match(target,
    'foo', () => 'this is foo string',
    A    , () => 'this is A',
    fn   ,  () => 'this is 2',
    () => 'not hit')

ok(test1('foo') === 'this is foo string');
ok(test1(new A) === 'this is A');
ok(test1(2)     === 'this is 2');
ok(test1(null)  ===  'not hit');

// # non array
var test2 = (target) =>
  match(target,
    'foo', ()=> 'this is foo string',
    A    , ()=> 'this is A',
    fn   , ()=> 'this is 2',
    () => 'not hit')

ok(test2('foo') === 'this is foo string');
ok(test2(new A()) === 'this is A');

// # with undefined, null
var test3 = (t) => match(t,
    null, () => 'this is null',
    undefined, () => 'this is undefined',
    () => 'error');

ok(test3(undefined) === 'this is undefined');
ok(test3(null) === 'this is null');

console.log('test success');

var ok = require('assert').ok;
var match = require('../');
var A = (function () {
    function A() {
    }
    return A;
})();
var fn = function (v) { return v === 2; };
var test1 = function (target) { return match(target, 'foo', function () { return 'this is foo string'; }, A, function () { return 'this is A'; }, fn, function () { return 'this is 2'; }, function () { return 'not hit'; }); };
ok(test1('foo') === 'this is foo string');
ok(test1(new A) === 'this is A');
ok(test1(2) === 'this is 2');
ok(test1(null) === 'not hit');
// # non array
var test2 = function (target) { return match(target, 'foo', function () { return 'this is foo string'; }, A, function () { return 'this is A'; }, fn, function () { return 'this is 2'; }, function () { return 'not hit'; }); };
ok(test2('foo') === 'this is foo string');
ok(test2(new A()) === 'this is A');
// # with undefined, null
var test3 = function (t) { return match(t, null, function () { return 'this is null'; }, undefined, function () { return 'this is undefined'; }, function () { return 'error'; }); };
ok(test3(undefined) === 'this is undefined');
ok(test3(null) === 'this is null');
console.log('test success');

{ok} = require 'assert'

match = require '../'

class A
fn = (v) -> v is 2

test = (target) ->
  match target, [
    'foo', () => 'this is foo string'
    A    , () => 'this is A'
    fn   ,  () => 'this is 2'
    -> 'not hit'
  ]

ok test('foo') is 'this is foo string'
ok test(new A) is 'this is A'
ok test(2)     is 'this is 2'
ok test(null)  is  'not hit'

# non array
test2 = (target) ->
  match target,
    'foo', () => 'this is foo string'
    A    , () => 'this is A'
    fn   ,  () => 'this is 2'
    -> 'not hit'

ok test('foo') is 'this is foo string'
ok test(new A) is 'this is A'
console.log 'test success'

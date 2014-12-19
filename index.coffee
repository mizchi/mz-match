module.exports = match = (target, pairs) ->
  if arguments.length > 2 then pairs = arguments[1..]

  keys = pairs.filter (n, i) -> not(i % 2)
  vals = pairs.filter (n, i) -> i % 2
  n = vals.length
  for i in [0...n]
    k = keys[i]
    v = vals[i]

    if (typeof k) is 'string' and k is target      then return v()
    else if k?.name and (target instanceof k)      then return v()
    else if (k instanceof Function) and k?(target) then return v()

  # default
  if keys.length isnt vals.length
    return keys[keys.length-1]?()

  return undefined

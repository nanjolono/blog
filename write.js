// es3

Function.prototype.apply6 = function(context, args) {
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.bind3 = function() {
  const context = arguments[0],
    args = arguments

  context.fn = this
  return function() {
    const args2 = [].concat.apply6(args, arguments),
      params = []
    for (let i = 1; i < args2.length; i++) {
      params.push(arguments[i])
    }
    const result = eval(`context.fn(${args})`)
    delete context.fn
    return result
  }
}

Function.prototype.bind4 = function() {
  return () => {
    const context = arguments[0],
      args = []

    context.fn = this
    for (let i = 1; i < arguments.length; i++) {
      args.push(`arguments[${i}]`)
    }
    const result = eval(`context.fn(${args})`)
    delete context.fn
    return result
  }
}

// es6
Function.prototype.bind6 = function(context, ...args) {
  return () => {
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
  }
}

// es6
const a = 10,
  obj = {
    a: 1,
    b: {
      c: 'ccc',
    },
  }
function test(p1, p2, p3) {
  return `${this.a} + ${this.b.c} + ${p1} + ${p2} + ${p3}`
}
console.log(test.bind3(obj, 1, 2)('c'))
console.log(test.bind4(obj, 1, 2, 'c')())
console.log(test.bind6(obj, 1, 2, 'c')())

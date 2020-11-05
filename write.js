// es3
Function.prototype.apply6 = function(context, args) {
  const params = []
  context.fn = this

  if (args) {
    for (let i = 0; i < args.length; i++) {
      params.push(`args[${i}]`)
    }
  }
  const result = eval(`context.fn(${params})`)
  delete context.fn
  return result
}

Function.prototype.bind5 = function(context) {
  const args = [].slice.apply6(arguments, [1]),
    self = this

  const Fc = function() {}
  Fc.prototype = self.prototype

  const func = function() {
    const args2 = [].slice.apply6(arguments)
    return self.apply6(
      this instanceof func ? this : context,
      args.concat(args2)
    )
  }
  // 继承一下，这样保证了原型链，又不会影响到父类的 prototype
  func.prototype = new Fc()
  return func
}

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
const value = 2

const foo = {
  value: 1,
}

function bar(name, age) {
  this.habit = 'shopping'
  console.log(this.value)
  console.log(name)
  console.log(age)
}
console.log(test.bind5(obj, 1, 2)('c'))
const f = bar.bind5(foo, 1, 2)
console.log(new f(3))

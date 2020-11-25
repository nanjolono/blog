const arr = ['a', 'b', 'c']

let val = arr[0]
Object.defineProperty(arr, '0', {
  get: function() {
    console.log(123)
    return val
  },
  set: function (newVal) {
    val = newVal + 1
  }
})

console.log(arr[0])
arr[0]  = 100
console.log(arr[0])
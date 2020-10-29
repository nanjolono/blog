const analyseType = (o) => {
  var s = Object.prototype.toString.call(o)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

const isObject = (o) => {
  return (
    analyseType(o) === 'object' ||
    analyseType(o) === 'array' ||
    analyseType(o) === 'function'
  )
}

const deepClone = (target, map = new WeakMap()) => {
  if (isObject(target)) {
    // 解决循环引用，用 weakmap 防止内存泄露
    if (map.get(target)) {
      return target
    }
    map.set(target, true)
    let cloneTarget
    if (Array.isArray(target)) {
      cloneTarget = []
      target.forEach((v, i) => {
        cloneTarget[i] = deepClone(v, map)
      })
    } else {
      cloneTarget = {}
      for (const key in target) {
        if (target.hasOwnProperty(key)) {
          cloneTarget[key] = deepClone(target[key], map)
        }
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

const a = { a: { a: 'a' } }
a.b = a

const c = [1, 2]
c[2] = c

console.log(deepClone(a), deepClone(c))

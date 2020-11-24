function a(str) {
  const list = str.split('')
  const indexList = []
  list.forEach((v, i) => {
    if (!(i % 3)) {
      indexList.push(i)
    }
  })
  indexList.sort((a, b) => b - a)
  indexList.forEach((v) => {
    if (v) {
      list.splice(v, 0, ',')
    }
  })
  console.log(list.join(''))
}

function a2(str) {
  const index = str.indexOf('.'),
    dot = ','
  let pre, suf
  if (index !== -1) {
    pre = str.slice(0, index)
    suf = str.slice(index)
  } else {
    pre = str
  }

  const list = pre.split('')
  pre = ''

  let v
  for (let i = list.length - 1; i >= 0; i--) {
    v = list[i]
    pre = v + pre
    if (!(i % 3)) {
      pre = dot + pre
    }
  }

  if (suf) {
    pre = pre + suf
  }
  if (pre.indexOf(dot) === 0) {
    pre = pre.slice(1)
  }
  console.log(pre)
  return pre
}

a2('123456789')

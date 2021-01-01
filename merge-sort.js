const { performance } = require('perf_hooks')

const arr = [9, 2, 22, 90, 4, 1, 5, 7, 8, 11]

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

function mergeSort(arr) {
  const half = arr.length / 2

  // base case or terminating case
  if (arr.length < 2) {
    return arr
  }

  // halves array every time function is called
  const left = arr.splice(0, half)
  // recursively call mergeSort until it returns a value to merge
  return merge(mergeSort(left), mergeSort(arr))
}

const t0 = performance.now()
// console.log(merge(left, right))
console.log(mergeSort(arr))
const t1 = performance.now()
console.log('Call to mergeSort took ' + (t1 - t0).toFixed(2) + ' milliseconds')

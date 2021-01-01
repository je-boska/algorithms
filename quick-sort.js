const { performance } = require('perf_hooks')

const arr = [9, 2, 22, 90, 4, 1, 5, 7, 8, 11]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let pivot = arr[0]
  let lesserArray = []
  let greaterArray = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greaterArray.push(arr[i])
    } else {
      lesserArray.push(arr[i])
    }
  }

  return quickSort(lesserArray).concat(pivot, quickSort(greaterArray))
}

const t0 = performance.now()
console.log(quickSort(arr))
const t1 = performance.now()
console.log('Call to quickSort took ' + (t1 - t0).toFixed(2) + ' milliseconds')

// Average time complexity is O(n log n), worst case is O(n*n)
// Not a stable sort algorithm

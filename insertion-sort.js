const { performance } = require('perf_hooks')

const arr = [9, 2, 22, 90, 4, 1, 5, 7, 8, 11]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // the first element of the unsorted (right) subarray
    let current = arr[i]
    // the last element of the sorted (left) subarray
    let j = i - 1
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j]
      console.log(arr[j])
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

const t0 = performance.now()
console.log(insertionSort(arr))
const t1 = performance.now()
console.log(
  'Call to insertionSort took ' + (t1 - t0).toFixed(2) + ' milliseconds'
)

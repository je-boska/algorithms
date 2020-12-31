const { performance } = require('perf_hooks')

const arr = [9, 2, 22, 90, 4, 1, 5, 7, 8, 11]

function selectionSort(arr) {
  let value
  for (let i = 0; i < arr.length; i++) {
    value = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < value) {
        value = arr[j]
        arr[j] = arr[i]
        arr[i] = value
      }
    }
  }
  return arr
}

const t0 = performance.now()
console.log(selectionSort(arr))
const t1 = performance.now()
console.log(
  'Call to selectionSort took ' + (t1 - t0).toFixed(2) + ' milliseconds'
)

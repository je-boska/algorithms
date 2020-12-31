const arr = [9, 2, 22, 90, 4, 1, 5, 7, 8, 11]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.time('bubbleSort')
console.log(bubbleSort(arr))
console.timeEnd('bubbleSort')

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

//  ASCENDING
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; ++i) {
    let maxIndex = i;
    for (let j = i + 1; j < array.length; ++j) {
      if (arr[maxIndex] > arr[j]) {
        maxIndex = j;
      }
    }
    swap(array, i, maxIndex);
  }
  return array;
}

let arr = [52, 525, 896, 1];
console.log(selectionSort(arr));

//  DESCENDING

// function selectionSort(array) {
//   for (let i = 0; i < array.length - 1; ++i) {
//     let maxIndex = i;
//     for (let j = i + 1; j < array.length; ++j) {
//       if (arr[maxIndex] < arr[j]) {
//         maxIndex = j;
//       }
//     }
//     swap(array, maxIndex, i);
//   }
//   return array;
// }

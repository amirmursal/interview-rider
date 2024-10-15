// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(inputArr, size) {
  const chunkedArray = [];
  // solution 2
  let index = 0;
  while (index < inputArr.length) {
    chunkedArray.push(inputArr.slice(index, index + size));
    index += size;
  }
  // solution 1
  //   for (element of inputArr) {
  //     let last = chunkedArray[chunkedArray.length - 1];
  //     if (!last || last.length === size) {
  //       chunkedArray.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }
  console.log(chunkedArray);
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

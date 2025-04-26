/*  Given an unsorted array, find a peak element in it.
 *  An element is considered to be peak if its value is greater than or equal to the values of its adjacent elements (if they exist).
 *  There can be more than one peak elements in an array, we return any of them
 */

const arr = [5, 10, 20, 35];

function findPeakValue(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + right / 2); //
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(findPeakValue(arr));

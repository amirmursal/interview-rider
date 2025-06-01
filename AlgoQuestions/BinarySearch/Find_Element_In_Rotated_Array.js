/* Given a sorted and rotated array numbers containing unique elements and an integer target,
 * return the index of target if it is in numbers, or -1 if it is not.
 * Rotating an array [a[0], a[1], a[2], ..., a[n-1]] once results in [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. '
 * Rotating it a second time results in [a[n-2], a[n-1], a[0], a[1], ..., a[n-3]].
 * Develop an algorithm that runs in O(log n) time complexity.*/

function findElementInRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // Check if the middle element is the target value
    if (arr[mid] === target) {
      return mid;
    }
    // Determine if the left half of the array is sorted
    if (arr[left] <= arr[mid]) {
      // Check if the target is within the sorted left half
      if (arr[left] <= target && target <= arr[mid]) {
        // If target is in the left half, adjust the search range to exclude the right half
        right = mid - 1;
      } else {
        // If target is not in the left half, adjust to search in the right half
        left = mid + 1;
      }
    } else {
      // The right half must be sorted
      // Check if the target is within the sorted right half
      if (target <= arr[right] && target >= arr[mid]) {
        // If target is in the right half, adjust the search range to exclude the left half
        left = mid + 1;
      } else {
        // If target is not in the right half, adjust to search in the left half
        high = mid - 1;
      }
    }
  }
  return -1;
}

//console.log(findElementInRotatedArray([0, 1, 2, 3, 4], 3)); // 2
//console.log(findElementInRotatedArray([2, 3, 4, 0, 1], 0));
console.log(findElementInRotatedArray([4], 0));

/**
  * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
  */

function moveZeros(arr) {
  let nonIndexZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonIndexZero] = arr[i];
      nonIndexZero++;
    }
  }
  for (let i = nonIndexZero; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
}

moveZeros([0, 1, 0, 3, 12]);

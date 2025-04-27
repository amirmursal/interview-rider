/**
 * Given an array of integers numbers, determine the subarray that has the highest product and return that product.
 * A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order,
 * such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.
 * Example:
 * Input: numbers = [1,2,-3,5,1]
 *  Output: 5
 *  Explanation: The subarray [5, 1] has the largest product i.e 5.
 */

function getMaxProduct(arr) {
  if (arr.length === 0) return 0;
  let maxProduct = 0;
  let currentProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    currentProduct = 1;
    for (let j = i; j < arr.length; j++) {
      currentProduct *= arr[j];
      maxProduct = Math.max(maxProduct, currentProduct);
    }
  }
  console.log(maxProduct);
}

getMaxProduct([1, 2, -3, 5, 1]);

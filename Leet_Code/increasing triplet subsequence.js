/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
 */

function shouldIncresingTriplet(numbers) {
  let firstNumber = Number.POSITIVE_INFINITY;
  let secondNumber = Number.POSITIVE_INFINITY;

  for (let number of numbers) {
    if (number <= firstNumber) {
      firstNumber = number;
    } else if (number <= secondNumber) {
      secondNumber = number;
    } else {
      return true;
    }
  }
  return false;
}

console.log(shouldIncresingTriplet([5, 4, 3, 2, 1]));

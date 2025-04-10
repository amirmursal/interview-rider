/**
 * Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array.
 * All numbers except one are present in the array. Find the missing number.
 * example:
 * Input: numbers = [1,3,0]
 * Output: 2
 * Explanation: The array has a size of 3, and within the range from 0 to 3, the number 2 is missing from the array
 */

function findMissingNumberInSequence(numbers) {
  const test = numbers.sort((a, b) => a - b);
  for (let num = 0; num < test.length; num++) {
    if (!test.includes(test[num] + 1)) {
      test[num] = test[num] + 1;
    }
  }
  console.log(test);
}

findMissingNumberInSequence([1, 3, 0]);

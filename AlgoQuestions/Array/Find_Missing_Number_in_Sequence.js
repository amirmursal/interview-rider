/**
 * Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array.
 * All numbers except one are present in the array. Find the missing number.
 * example:
 * Input: numbers = [1,3,0]
 * Output: 2
 * Explanation: The array has a size of 3, and within the range from 0 to 3, the number 2 is missing from the array
 */

function findMissingNumberInSequence(numbers) {
  const n = numbers.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumberInSequence([1, 3, 0]));

/**
 * Let's implement a function to identify the missing elements in the array.
 */

function findAllMissingNumbersInSequence(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  const missing = [];
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  for (let i = min; i <= max; i++) {
    if (!numbers.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}

//console.log(findAllMissingNumbersInSequence([1, 3, 0, 6, 44]));

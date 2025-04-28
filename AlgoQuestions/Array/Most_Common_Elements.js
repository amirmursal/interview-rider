/**
 * Given an array of integers numbers and a number k, find the k most frequent numbers in the array. Here, k represents the number of elements that should be returned,
 * which are the ones that appear the most frequently. The order of the result does not matter.
 * Example:
 * Input: numbers = [4,4,4,6,6,5,5,5], k = 2
 * Output: [4,5]
 * Explanation: The two most frequent numbers are 4 and 5, as they appear the most often in the array.
 */

function getMostCommonElement(arr, target) {
  const valueMap = new Map();

  for (let number of arr) {
    if (valueMap.has(number)) {
      valueMap.set(number, valueMap.get(number) + 1);
    } else {
      valueMap.set(number, 1);
    }
  }
  return Array.from(valueMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, target)
    .map((item) => item[0]);
}

console.log(getMostCommonElement([4, 4, 4, 6, 6, 5, 5, 5], 2));

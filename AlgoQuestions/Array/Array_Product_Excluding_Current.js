/**
 * Given an array of integers numbers, return a new array result where each element result[i]
 * represents the product of all the elements in numbers except for numbers[i].
 * Input: numbers = [1,2,3]
 * Output: [6,3,2]
 * Explanation: Output is multiplication of all other elements except self, i.e 2*3, 1*3, 1*2
 */

function getProductExceptSelf(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(getProductExceptSelf([1, 2, 3]));

/**
 * Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array where only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 * uniqueArray([1, 2, 3]); // [1, 2, 3]
 * uniqueArray([1, 1, 2]); // [1, 2]
 * uniqueArray([2, 1, 2]); // [2, 1]
 */

const uniqueArray = (values) => {
  console.log(Array.from(new Set(values)));
};

uniqueArray([1, 1, 2]);

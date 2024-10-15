/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 */

/**
 * The map counts how many times each value appears in the array.
The occurrenceSet stores the unique occurrence counts.
If the number of unique occurrence counts matches the number of keys in the map,
 it means all occurrences are unique, so we return true. Otherwise, we return false.
 */

const hasUniqueOccurance = (arr) => {
  const map = new Map();

  for (let val of arr) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  const occurrenceSet = new Set(map.values());

  console.log(map.size === occurrenceSet.size);
};

hasUniqueOccurance([1, 3]);

/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2] 
Output: 2
 */

const getMajorityElement = (nums) => {
  /*let numberMap = new Map();

  for (let num of nums) {
    if (numberMap.has(num)) {
      numberMap.set(num, numberMap.get(num) + 1);
    } else {
      numberMap.set(num, 1);
    }
  }
  let maxValue = 0;
  let maxKey;
  for (let [key, value] of numberMap) {
    if (maxValue < value) {
      maxValue = value;
      maxKey = key;
    }
  }
  console.log(maxKey);*/

  const countMap = new Map();
  const majorityCount = Math.floor(nums.length / 2);

  for (const num of nums) {
    // Update the count for each element in the map
    countMap.set(num, (countMap.get(num) || 0) + 1);

    // Check if the current element has become the majority
    if (countMap.get(num) > majorityCount) {
      return num;
    }
  }
};

getMajorityElement([2, 2, 1, 1, 1, 2, 2]);

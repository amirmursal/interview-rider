/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * The returned answer can be returned in any order.

Examaple 1:
Input: nums = [2,7,1,1], target = 2
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Examaple 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

const getTwoSum = (nums, target) => {
  // Approach 1
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]; //2-1
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i); //(2=>0, 7=>1, 1=>2, 1)
  }
  return [];
  // Approach 2
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return [];
};

console.log(getTwoSum([2, 7, 1, 1], 2));

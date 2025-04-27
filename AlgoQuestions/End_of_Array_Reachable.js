/**
 * Given an array of integers numbers where each element in the array represents the maximum number of positions that
 * can be moved forward from that index; it is acceptable to move by fewer positions.
 * Determine whether it is possible to reach the last index of the array by starting from the first index.
 * Return true if it can be reached and false otherwise.
 * Input: numbers = [4,1,0,0,2,3]
 * Output: true
 * Explanation: Move from index 0 to 4, then move 1 position to the last index.
 */

function canReachEnd(arr) {
  let maxReach = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + arr[i]);
  }
  return true;
}

console.log(canReachEnd([4, 1, 0, 0, 2, 3]));

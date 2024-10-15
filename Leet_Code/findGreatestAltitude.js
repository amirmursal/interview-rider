/**
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
 */

function largestAltitude(gain) {
  let currentAltitude = 0;
  let maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    maxAltitude = Math.max(currentAltitude, maxAltitude);
  }

  return maxAltitude;
}

largestAltitude([0, -4, -7, -9, -10, -6, -3, -1]);
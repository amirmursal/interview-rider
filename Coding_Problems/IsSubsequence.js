/**
 * 
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
 */

function isSubquence(s, t) {
  let sIndex = 0; // Pointer for string s
  let tIndex = 0; // Pointer for string t

  // Traverse string t
  while (tIndex < t.length) {
    // If characters match, move the pointer for s
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    // Always move the pointer for t
    tIndex++;

    // If we've gone through the entire s, return true
    if (sIndex === s.length) {
      return true;
    }
  }

  // If we've gone through t but not s, return false
  return sIndex === s.length;
}

isSubquence("abc", "ahbgdc");

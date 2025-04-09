/**
 * Given a string str, return the longest contiguous substring that is a palindrome.
 * If there are multiple such substrings, return any one of them.
 * A palindrome is a sequence of characters that reads the same forward and backward (e.g., racecar).
 * A substring is any contiguous sequence of characters within a string. For example, the substrings of string abc are a, b, c, ab, bc, and abc. 
 * A substring is formed by selecting a starting and ending point without skipping characters in between.
 * example:
 * Input: str = "cauumzssz"
Output: "zssz"
Explanation: 'zssz' is the longest palindromic substring within 'cauumzssz'.
Input: str = "racecar"
Output: "racecar"
Explanation: The entire string 'racecar' is a palindrome and is the longest.
Input: str = "cacae"
Output: "cac"
Explanation: Both 'cac' and 'aca' are valid palindromic substrings of the same length, and either can be returned.
 */

const getLongestPalindromicString = (str) => {
  //this will be brute force approach

  const isPalindrome = (i, j) => {
    let left = i;
    let right = j - 1;

    while (left < right) {
      if (str.charAt(left) !== str.charAt(right)) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  for (let leftLength = str.length; leftLength > 0; leftLength--) {
    for (
      let rightLength = 0;
      rightLength <= str.length - leftLength;
      rightLength++
    ) {
      if (isPalindrome(rightLength, rightLength + leftLength)) {
        return str.substring(rightLength, rightLength + leftLength);
      }
    }
  }
  return "";
};

console.log(getLongestPalindromicString("cauumzssz"));

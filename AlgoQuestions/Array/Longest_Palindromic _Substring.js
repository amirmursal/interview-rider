/**
 * Given a string str, return the longest contiguous substring that is a palindrome.
 * If there are multiple such substrings, return any one of them.
 * A palindrome is a sequence of characters that reads the same forward and backward (e.g., racecar).
 * A substring is any contiguous sequence of characters within a string. For example, the substrings of string abc are a, b, c, ab, bc, and abc.
 * A substring is formed by selecting a starting and ending point without skipping characters in between.
 * example:
 * Input: str = "cauumzssz"
 * Output: "zssz"
 * Explanation: 'zssz' is the longest palindromic substring within 'cauumzssz'.
 */

const getLongestPalindromicString = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  function expand(left, right) {
    //We are still inside the string on both sides (left ≥ 0, right < length)
    // The characters at both ends match (str[left] === str[right])
    //If both conditions are true, it means the substring from left to right is still a palindrome — so we can try to expand it further.
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > result.length) {
        result = str.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }
  return result;
};

console.log(getLongestPalindromicString("cauumzssz"));

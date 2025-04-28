/**
 * Given a string str, determine the total number of substrings that are palindromes.
 * A palindrome is a sequence of characters that reads the same forward and backward (e.g., racecar).
 * A substring is any contiguous sequence of characters within a string.
 * For example, the substrings of string abc are a, b, c, ab, bc, and abc.
 * A substring is formed by selecting a starting and ending point without skipping characters in between.
 */

const getCountPalidromicSubstring = (str) => {
  let count = 0;

  // Iterate through all substrings
  for (let start = 0; start < str.length; start++) {
    for (let end = start; end < str.length; end++) {
      let substring = str.slice(start, end + 1);
      if (substring === substring.split("").reverse().join("")) {
        count++;
      }
    }
  }

  return count;
};

console.log(getCountPalidromicSubstring("abba"));

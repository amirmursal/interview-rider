/**
 * Given a string str, determine the total number of substrings that are palindromes.
 * A palindrome is a sequence of characters that reads the same forward and backward (e.g., racecar).
 * A substring is any contiguous sequence of characters within a string.
 * For example, the substrings of string abc are a, b, c, ab, bc, and abc.
 * A substring is formed by selecting a starting and ending point without skipping characters in between.
 */

const getCountPalidromicSubstring = (str) => {
  const isPalindrom = (str, low, high) => {
    while (low < high) {
      if (str[low] !== str[high]) {
        return false;
      }
      low++;
      high--;
    }
    return true;
  };

  let ans = 0;
  for (let low = 0; low < str.length; low++) {
    for (let high = low; high < str.length; high++) {
      ans += isPalindrom(str, low, high) ? 1 : 0;
    }
  }
  return ans;
};

console.log(getCountPalidromicSubstring("abba"));

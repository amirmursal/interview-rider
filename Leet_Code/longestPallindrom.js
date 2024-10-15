function isPalindrome(s) {
  // Check if the string is the same forwards and backwards
  return s === s.split("").reverse().join("");
}

function longestPalindrome(s) {
  let maxLength = 0; // To keep track of the longest palindrome length
  let longestPal = ""; // To keep the longest palindrome string

  // Check every possible substring
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j); // Get the substring from i to j
      if (isPalindrome(substring) && substring.length > maxLength) {
        // Update longestPal if a longer palindrome is found
        longestPal = substring;
        maxLength = substring.length;
      }
    }
  }

  return longestPal;
}

// Example usage
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"
console.log(longestPalindrome("forgeeksskeegfor")); // Output: "geeksskeeg"
console.log(longestPalindrome("a")); // Output: "a"
console.log(longestPalindrome("ac")); // Output: "a" or "c"

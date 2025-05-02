/* Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 * Example 1:
 * Inputs = "abciiidef", k = 3
 * Output: 3
 * Explanation: The substring "iii" contains 3 vowel letters.
 */

function getMaxNumberOfVowels(str, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels = 0;
  let currentVowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      currentVowels++;
    }

    if (i >= k && vowels.has(str[i - k])) {
      currentVowels--;
    }

    maxVowels = Math.max(maxVowels, currentVowels);
  }
  return maxVowels;
}

console.log(getMaxNumberOfVowels("a_b_c_d_e_f", 5));

/**
 * 345. Reverse Vowels of a String
Easy
Topics
Companies
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"
 */

function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  let arr = str.split("");
  let vowelsArr = [];

  for (let char of arr) {
    if (vowels.includes(char)) {
      vowelsArr.push(char);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = vowelsArr.pop();
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}

reverseVowels("IceCreAm");

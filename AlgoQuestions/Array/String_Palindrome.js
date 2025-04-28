/**
 * Given a string str, determine if it is a palindrome. Return true if it is, and false otherwise.
 * A string is a palindrome if, after changing all uppercase letters to lowercase and discarding all non-alphanumeric characters,
 * it remains identical when read forward and backward. Alphanumeric characters consist of both letters and numbers.
 */

const isPalindrome = (str) => {
  let chars = "";
  for (let c of str) {
    if (c.match(/[a-z0-9]/i)) {
      chars += c.toLowerCase();
    }
  }
  const reveseString = chars.split("").reverse().join("");
  return chars === reveseString;
};

console.log(isPalindrome("cat tax"));

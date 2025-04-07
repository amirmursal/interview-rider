/**
 * Write a function that takes a sentence and reverse only alphanumeric word but other characters remain unchanged.
For Example -

**Input:**This is test!!! 
Output: sihT si tset!!!

Input: Hello, Bangkok:)
Output: olleH, kokgnaB:)

Input: Hurray! Easy Questions
Output: yarruH! ysaE snoitseuQ

Input: Bangkok12:)Has
Output: 21kokgnaB:)saH

Input: Bangkok
Output: kokgnaB
 */

function reverseEachWord(str) {
  const splitString = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

  console.log(splitString);
}

reverseEachWord("Hurray! Easy Questions");



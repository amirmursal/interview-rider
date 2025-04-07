// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const sortedStringA = getSortedString(stringA);
  const sortedStringB = getSortedString(stringB);
  return sortedStringA === sortedStringB;
}
function getSortedString(inputString) {
  return inputString
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split()
    .sort()
    .join("");
}

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   if (charMapA.size !== charMapB.size) {
//     return false;
//   }
//   for (let char in charMapA) {
//     if (!charMapB.has(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// const buildCharMap = (inputString) => {
//   const charMap = new Map();
//   const formatString = inputString.replace(/[^\w]/g, "");

//   for (let char of formatString) {
//     if (charMap.has(char)) {
//       charMap.set(char, charMap.get(char) + 1);
//     } else {
//       charMap.set(char, 1);
//     }
//   }
//   return charMap;
// };

console.log(anagrams("aAmir!", "aamir"));

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = new Map();
  let maxValue = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (let [char, count] of charMap) {
    if (count > maxValue) {
      maxValue = count;
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
}

maxChar("aammmmir");

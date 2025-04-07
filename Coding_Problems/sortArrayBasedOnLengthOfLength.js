/*
Q1: Sort an array of Strings based on ASCENDING Order of the length of element.
Input: ["ABCDE", "ABCD", "Z", "A", "AB", "AA", "ABC"]
Output: ["A", "Z", "AA", "AB", "ABC", "ABCD", "ABCDE"]*/

function sortArray(arr) {
  const sortedArray = arr.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });
  console.log(sortedArray);
}

sortArray(["ABCDE", "ABCD", "Z", "A", "AB", "AA", "ABC"]);

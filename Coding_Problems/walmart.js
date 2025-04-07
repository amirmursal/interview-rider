/*Given an unsorted array, find a peak element in it. 
An element is considered to be peak if its value is greater than or equal to the values of its adjacent elements (if they exist). 
There can be more than one peak elements in an array, we return any of them*/

const arr = [5, 10, 20, 35];

function findPeakValue(element) {
  let n = element.length;

  // If the array has only one element, return it
  if (n === 1) {
    return element[0];
  }

  // Check if the first or last element is a peak
  if (element[0] >= element[1]) {
    return element[0];
  }
  if (element[n - 1] >= element[n - 2]) {
    return element[n - 1];
  }

  // Check the rest of the array
  for (let i = 1; i < n - 1; i++) {
    if (element[i] >= element[i - 1] && element[i] >= element[i + 1]) {
      return element[i];
    }
  }

  return null; // In case no peak is found (though there should be one)
}

console.log(findPeakValue(arr));

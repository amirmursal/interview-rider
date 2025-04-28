/**
 * Given an array of integers numbers, determine whether the array contains any duplicate values.
 * A duplicate is defined as any number that appears more than once in the array.
 */

const hasDuplicates = (numbers) => {
  return new Set(numbers).size !== numbers.length;
};

//console.log(hasDuplicates([1, 2, 2, 4]));

const findDuplicates = (numbers) => {
  const data = new Set();
  const results = [];
  for (num of numbers) {
    if (!data.has(num)) {
      data.add(num);
    } else {
      results.push(num);
    }
  }
  return results;
};

console.log(findDuplicates([1, 2, 2, 4, 4]));

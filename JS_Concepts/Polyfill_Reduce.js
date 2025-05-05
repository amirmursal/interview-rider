/**
 *  Write a polyfill for reduce method of array.
 *  The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 *  The reduce() method executes the callback function once for each element present in the array, excluding empty elements.
 *  The reduce() method returns a single value: the function's accumulated result.
 */

Array.prototype.customReduce = function (callBackFun, initialValue) {
  if (this === null) {
    throw new TypeError("reduce will not work on null or undefined value");
  }
  if (typeof callBackFun !== "function") {
    throw new TypeError(callBackFun + "is not a function");
  }
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callBackFun(accumulator, this[i], i, this);
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];

const test = arr.customReduce((acc, currentvalue) => acc + currentvalue, 0);

console.log(test);

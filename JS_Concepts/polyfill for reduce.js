//**Create own reducer function */
// what is redcuce?
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method executes the callback function once for each element present in the array, excluding empty elements.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty elements.

Array.prototype.customReduce = function (callBackFun, initialValue) {
  const noInitialValue = initialValue === undefined;
  const arrLen = this.length;
  if (noInitialValue && arrLen === 0) {
    throw new Error("Reduce array is empty");
  }
  let accumulator = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;
  for (let i = startingIndex; i < arrLen; i++) {
    if (Object.hasOwn(this, i)) {
      accumulator = callBackFun(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];

const test = arr.customReduce((acc, currentvalue) => acc + currentvalue, 0);

console.log(test);

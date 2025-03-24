//**Create own reducer function */

Array.prototype.myReduce = function (callBackfun, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError("Reduce array is empty");
  }
  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++)
  if (Object.hasOwn(this, k)) {
    acc = callBackfun(acc, this[k], k, this);
  }
  return acc;
};

const arr = [1, 2, 3, 4];

const test = arr.myReduce((acc, currentvalue) => acc + currentvalue, 0);

console.log(test);

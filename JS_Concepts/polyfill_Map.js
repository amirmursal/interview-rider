/**
 * Write a polyfill for map function
 */

const arr = [1, 2, 3, 4];

Array.prototype.customMap = function (callBackFun) {
  if (this === null) {
    throw new TypeError("map cannot be done on null or undefined");
  }
  if (typeof callBackFun !== "function") {
    throw new TypeError(callBackFun + "is not a function");
  }
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callBackFun(this[i], i, this));
  }
  return result;
};

console.log(arr.customMap((num) => num * 2));

const arr = [1, 2, 3, 5];

Array.prototype.customFilter = function (callFunc, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError("fillter is not applied on null or undefined");
  }
  if (typeof callFunc !== "function") {
    throw new TypeError(callFunc + " is not a function");
  }
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callFunc.call(thisArg, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log(arr.customFilter((num) => num > 2));

/**
 * what is call in javascript?
 * The call() method calls a function with a given this value and arguments provided individually.
 * It allows you to invoke a function with a specific context (the value of this) and pass arguments to it.
 * Implement your own Function.prototype.call without calling the native call method.
 * To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.
 */

function displayData(age) {
  console.log(`This is his name ${this.data} and age ${age}`);
}

const userData = {
  data: "Amir",
};

//displayData.call(userData, 25);

Function.prototype.customCall = function (thisArg, ...args) {
  return this.bind(thisArg, ...args)();
};

displayData.customCall(userData, 25);

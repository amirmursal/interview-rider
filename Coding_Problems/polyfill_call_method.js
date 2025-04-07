/**
 * what is call in javascript?
 * The call() method calls a function with a given this value and arguments provided individually.
 * It allows you to invoke a function with a specific context (the value of this) and pass arguments to it.
 * The call() method is a built-in method of the Function prototype in JavaScript.
 * 
 * Implement your own Function.prototype.call without calling the native call method.
 * To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.
 * example:
 * function myFunction() {
 *  console.log(this.name);
 *  }
 * const obj = { name: 'John' };
 * myFunction.myCall(obj); // Output: John
 *
 * function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myCall(mary); // 21
multiplyAge.myCall(john, 2); // 84
 */

Function.prototype.myCall = function (thisArg, ...arg) {
  return this.bind(thisArg, ...arg)();
};

function myFunction() {
  console.log(this.name);
}
const obj = { name: "AMir" };
//myFunction.call(obj);

myFunction.myCall(obj);

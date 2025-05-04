/**
 * What is bind method in javascript?
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value.
 * It allows you to set the value of this for a function, regardless of how that function is called.
 * It is a built-in method of the Function prototype in JavaScript.
 *
 * Implement a polyfill for the Function.prototype.bind method.
 * The bind method creates a new function that, when called, has its this keyword set to the provided value.
 * example:
 * function myFunction() {
 *  console.log(this.name);
 * }
 * const obj = { name: 'John' };
 * const boundFunction = myFunction.bind(obj);  // Output: John
 * boundFunction(); // Output: John
 */

function calculateAge(multiple) {
  const age = this.age * multiple;
  console.log(age);
}

const obj = { age: 23 };

//const test = calculateAge.bind(obj, 34);
//test(); // you have to call explicitly call bind method

Function.prototype.customBind = function (thisArg, ...argArray) {
  // how bind works it will return a method
  const originalMethod = this;
  return function (...args) {
    //return originalMethod.apply(thisArg, [...argArray, ...args]); // using apply method
    return originalMethod.call(thisArg, ...argArray, ...args); // using call method
  };
};

const test = calculateAge.customBind(obj, 34);
test();

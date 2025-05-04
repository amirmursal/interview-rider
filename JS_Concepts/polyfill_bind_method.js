/**
 * What is bind method in javascript?
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value.
 * It allows you to set the value of this for a function, regardless of how that function is called.
 * It is a built-in method of the Function prototype in JavaScript.
 */

function displayData(age) {
  console.log(`This is his name ${this.data} and age ${age}`);
}

const userData = {
  data: "Amir",
};

//const test = displayData.bind(userData, 25);
//test();

Function.prototype.customBind = function (thisArg, ...funargs) {
  const func = this;
  return function (...args) {
    return func.call(thisArg, ...funargs, ...args);
  };
};

const test = displayData.customBind(userData, 25);
test();
